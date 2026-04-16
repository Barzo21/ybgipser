export default defineEventHandler(async (event) => {
  const { vorname = '', nachname = '', kontakt = '', leistung = '', beschreibung = '' } =
    await readBody(event)

  const id = Date.now().toString()
  await useStorage('messages').setItem(id, {
    id,
    vorname,
    nachname,
    kontakt,
    leistung,
    beschreibung,
    createdAt: new Date().toISOString(),
  })

  return { ok: true }
})
