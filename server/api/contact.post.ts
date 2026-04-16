import { sendContactMail } from '~/server/utils/mailer'

export default defineEventHandler(async (event) => {
  const { vorname = '', nachname = '', kontakt = '', leistung = '', beschreibung = '' } =
    await readBody(event)

  const storage = useStorage('messages')
  const id = Date.now().toString()

  await storage.setItem(id, {
    id,
    vorname,
    nachname,
    kontakt,
    leistung,
    beschreibung,
    createdAt: new Date().toISOString(),
  })

  try {
    await sendContactMail({ vorname, nachname, kontakt, leistung, beschreibung })
  } catch (err) {
    console.error('[mailer]', err)
  }

  return { ok: true }
})
