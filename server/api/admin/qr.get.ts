import QRCode from 'qrcode'
import { getTOTPUri } from '~/server/utils/totp'

export default defineEventHandler(async (event) => {
  // username + password ile koru (QR setup için JWT öncesi erişim)
  const { username, password } = getQuery(event) as { username: string; password: string }

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    throw createError({ statusCode: 401, message: 'Nicht autorisiert' })
  }

  const uri = getTOTPUri()
  if (!uri) {
    throw createError({ statusCode: 404, message: 'TOTP_SECRET nicht konfiguriert' })
  }

  const qrDataUrl = await QRCode.toDataURL(uri, {
    width: 256,
    margin: 2,
    color: { dark: '#1c1917', light: '#ffffff' },
  })

  return { qrDataUrl, uri }
})
