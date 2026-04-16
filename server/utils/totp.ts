import * as OTPAuth from 'otpauth'

export function getTOTP() {
  const secret = process.env.TOTP_SECRET
  if (!secret) return null

  return new OTPAuth.TOTP({
    issuer: 'YB Gipser',
    label: process.env.ADMIN_USERNAME || 'admin',
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: OTPAuth.Secret.fromBase32(secret),
  })
}

export function verifyTOTP(token: string): boolean {
  const totp = getTOTP()
  if (!totp) return true // TOTP_SECRET yoksa doğrulama atla

  const delta = totp.validate({ token, window: 1 })
  return delta !== null
}

export function getTOTPUri(): string | null {
  const totp = getTOTP()
  return totp ? totp.toString() : null
}
