import { verifyToken } from '~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const auth = getHeader(event, 'authorization')
  if (!auth?.startsWith('Bearer '))
    throw createError({ statusCode: 401, message: 'Nicht autorisiert' })

  const payload = await verifyToken(auth.slice(7))
  if (!payload)
    throw createError({ statusCode: 401, message: 'Ungültiger Token' })

  const storage = useStorage('messages')
  const keys = await storage.getKeys()
  const items = await Promise.all(keys.map((k) => storage.getItem(k)))

  return (items.filter(Boolean) as any[]).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
})
