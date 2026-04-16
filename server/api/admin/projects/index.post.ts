import { verifyToken } from '~/server/utils/jwt'
import { join } from 'path'
import { promises as fs } from 'fs'

export default defineEventHandler(async (event) => {
  const auth = getHeader(event, 'authorization')
  if (!auth?.startsWith('Bearer ')) throw createError({ statusCode: 401, message: 'Nicht autorisiert' })

  const payload = await verifyToken(auth.slice(7))
  if (!payload) throw createError({ statusCode: 401, message: 'Ungültiger Token' })

  const formData = await readMultipartFormData(event)
  if (!formData) throw createError({ statusCode: 400, message: 'Keine Daten gefunden' })

  let title = ''
  let category = ''
  let fileData: Buffer | undefined
  let filename = ''

  for (const field of formData) {
    if (field.name === 'title') title = field.data.toString('utf-8')
    if (field.name === 'category') category = field.data.toString('utf-8')
    if (field.name === 'file' && field.filename) {
      fileData = field.data as Buffer
      const ext = field.filename.split('.').pop() || 'jpg'
      filename = `${Date.now()}.${ext}`
    }
  }

  if (!fileData || !filename) {
    throw createError({ statusCode: 400, message: 'Bild fehlt' })
  }

  const publicDir = join(process.cwd(), 'public', 'projekte')
  await fs.mkdir(publicDir, { recursive: true }).catch(() => {})

  const filePath = join(publicDir, filename)
  await fs.writeFile(filePath, fileData)

  const id = Date.now().toString()
  const storage = useStorage('projects')
  const keys = await storage.getKeys()
  const order = keys.length + 1

  const newProject = {
    id,
    src: `/projekte/${filename}`,
    title,
    category,
    order,
    createdAt: new Date().toISOString()
  }

  await storage.setItem(id, newProject)

  return newProject
})
