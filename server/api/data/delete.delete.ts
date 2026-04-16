// API endpoint for GDPR/nFDPA data deletion
// User can request deletion of their data

export default defineEventHandler(async (event) => {
  const { email, phone, reason } = await readBody(event)

  if (!email && !phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'E-Mail-Adresse oder Telefonnummer erforderlich',
    })
  }

  const messages = await useStorage('messages').getKeys()
  let deletedCount = 0
  const deletedRecords: string[] = []

  for (const key of messages) {
    const record: any = await useStorage('messages').getItem(key)
    if (
      (email && record.kontakt?.toLowerCase().includes(email.toString().toLowerCase())) ||
      (phone && record.kontakt?.includes(phone.toString()))
    ) {
      // Before deletion, log the deletion for audit trail
      console.log(`[GDPR DELETE] Record ${key} deleted for contact ${record.kontakt}`)
      
      await useStorage('messages').removeItem(key)
      deletedCount++
      deletedRecords.push(key)
    }
  }

  if (deletedCount === 0) {
    return {
      status: 'no_records',
      message: 'Keine Datensätze mit dieser Kontaktinformation gefunden.',
      deletedCount: 0,
    }
  }

  return {
    status: 'success',
    message: `${deletedCount} Datensatz(e) wurden gemäß der nFDPA gelöscht.`,
    deletedCount,
    deletionDate: new Date().toISOString(),
    reason: reason || 'Nutzer-Anfrage zur Datenlöschung',
    note: 'Stellt sicher, dass die Löschung in den Systemlogs protokolliert ist.',
  }
})
