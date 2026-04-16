import { signToken } from '~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    throw createError({ statusCode: 401, message: 'Ungültige Anmeldedaten' })
  }

  const token = await signToken({ username, role: 'admin' })
  return { token }
})
