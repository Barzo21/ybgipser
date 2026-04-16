import { signToken } from '~/server/utils/jwt'
import { verifyTOTP } from '~/server/utils/totp'

export default defineEventHandler(async (event) => {
  const { username, password, totpCode } = await readBody(event)

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    throw createError({ statusCode: 401, message: 'Ungültige Anmeldedaten' })
  }

  // TOTP_SECRET varsa kod zorunlu
  if (process.env.TOTP_SECRET && !verifyTOTP(totpCode || '')) {
    throw createError({ statusCode: 401, message: 'Ungültiger Authentifizierungscode' })
  }

  const token = await signToken({ username, role: 'admin' })
  return { token }
})
