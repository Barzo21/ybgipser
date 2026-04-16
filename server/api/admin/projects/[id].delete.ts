import { verifyToken } from '~/server/utils/jwt'
import { join } from 'path'
import { promises as fs } from 'fs'

export default defineEventHandler(async (event) => {
  const auth = getHeader(event, 'authorization')
  if (!auth?.startsWith('Bearer ')) throw createError({ statusCode: 401, message: 'Nicht autorisiert' })
  const payload = await verifyToken(auth.slice(7))
  if (!payload) throw createError({ statusCode: 401, message: 'Ungültiger Token' })

  const id = event.context.params?.id
  if (!id) throw createError({ statusCode: 400, message: 'ID fehlt' })

  const storage = useStorage('projects')
  const project = await storage.getItem(id) as any
  if (!project) throw createError({ statusCode: 404, message: 'Projekt nicht gefunden' })

  if (project.src) {
    const filename = project.src.split('/').pop()
    if (filename && !['2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg', '11.jpeg'].includes(filename)) {
      try {
        const filePath = join(process.cwd(), 'public', 'projekte', filename)
        await fs.unlink(filePath)
      } catch (e) {
        console.error('File deletion failed:', e)
      }
    }
  }

  await storage.removeItem(id)
  return { ok: true }
})
