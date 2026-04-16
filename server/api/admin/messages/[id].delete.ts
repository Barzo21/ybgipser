import { verifyToken } from '~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const auth = getHeader(event, 'authorization')
  if (!auth?.startsWith('Bearer '))
    throw createError({ statusCode: 401, message: 'Nicht autorisiert' })

  const payload = await verifyToken(auth.slice(7))
  if (!payload)
    throw createError({ statusCode: 401, message: 'Ungültiger Token' })

  const id = getRouterParam(event, 'id')
  await useStorage('messages').removeItem(id!)

  return { ok: true }
})
