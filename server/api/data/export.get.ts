// API endpoint for GDPR/nFDPA data export
// User can request their data by providing their contact information

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { email, phone } = query as { email?: string; phone?: string }

  if (!email && !phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'E-Mail-Adresse oder Telefonnummer erforderlich',
    })
  }

  const messages = await useStorage('messages').getKeys()
  const userRecords: any[] = []

  for (const key of messages) {
    const record: any = await useStorage('messages').getItem(key)
    if (
      (email && record.kontakt?.toLowerCase().includes(email.toString().toLowerCase())) ||
      (phone && record.kontakt?.includes(phone.toString()))
    ) {
      userRecords.push({
        id: record.id,
        vorname: record.vorname,
        nachname: record.nachname,
        kontakt: record.kontakt,
        leistung: record.leistung,
        beschreibung: record.beschreibung,
        consentPrivacy: record.consentPrivacy,
        consentContact: record.consentContact,
        createdAt: record.createdAt,
        dataRetentionUntil: record.dataRetentionUntil,
      })
    }
  }

  // Set response headers for JSON export
  setHeader(event, 'Content-Type', 'application/json')
  setHeader(event, 'Content-Disposition', `attachment; filename="personliche-daten-${Date.now()}.json"`)

  return {
    exportDate: new Date().toISOString(),
    message: `Es wurden ${userRecords.length} Datensätze gefunden, die mit dieser Kontaktinformation verknüpft sind.`,
    data: userRecords,
    legal: {
      note: 'Diese Daten werden gemäß nFDPA (Bundesgesetz über den Datenschutz) verwaltet.',
      retentionPolicy: {
        contactRequests: '24 months nach letzter Aktivität',
        completedProjects: '7 years für Archivierung und Haftung',
        rejectedOffers: '12 months',
      },
    },
  }
})
