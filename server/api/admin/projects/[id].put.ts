import { verifyToken } from '~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const auth = getHeader(event, 'authorization')
  if (!auth?.startsWith('Bearer ')) throw createError({ statusCode: 401, message: 'Nicht autorisiert' })
  const payload = await verifyToken(auth.slice(7))
  if (!payload) throw createError({ statusCode: 401, message: 'Ungültiger Token' })

  const id = event.context.params?.id
  if (!id) throw createError({ statusCode: 400, message: 'ID fehlt' })

  const body = await readBody(event)
  const storage = useStorage('projects')

  const existing = await storage.getItem(id)
  if (!existing) throw createError({ statusCode: 404, message: 'Projekt nicht gefunden' })

  const updatedProject = {
    ...(existing as any),
    title: body.title !== undefined ? body.title : (existing as any).title,
    category: body.category !== undefined ? body.category : (existing as any).category
  }

  await storage.setItem(id, updatedProject)
  return updatedProject
})
