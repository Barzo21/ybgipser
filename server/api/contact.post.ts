export default defineEventHandler(async (event) => {
  const { vorname = '', nachname = '', kontakt = '', leistung = '', beschreibung = '', consentPrivacy = false, consentContact = false } =
    await readBody(event)

  // Validation
  if (!vorname?.trim() || !nachname?.trim() || !kontakt?.trim() || !leistung || !beschreibung?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Alle erforderlichen Felder müssen ausgefüllt werden',
    })
  }

  if (!consentPrivacy || !consentContact) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Alle erforderlichen Zustimmungen müssen aktiviert werden',
    })
  }

  // Validate email or phone
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^[\d\s+\-().]{9,}$/
  if (!emailRegex.test(kontakt) && !phoneRegex.test(kontakt)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Ungültige E-Mail-Adresse oder Telefonnummer',
    })
  }

  const id = Date.now().toString()
  const timestamp = new Date().toISOString()

  await useStorage('messages').setItem(id, {
    id,
    vorname: vorname.trim(),
    nachname: nachname.trim(),
    kontakt: kontakt.trim(),
    leistung: leistung.trim(),
    beschreibung: beschreibung.trim(),
    consentPrivacy,
    consentContact,
    createdAt: timestamp,
    // Data for retention policy
    dataRetentionUntil: new Date(Date.now() + 24 * 60 * 60 * 1000 * 24).toISOString(), // 24 months
  })

  return { ok: true, id }
})
