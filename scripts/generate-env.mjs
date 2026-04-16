import { randomBytes } from 'crypto'
import { writeFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const envPath = resolve(process.cwd(), '.env')

if (existsSync(envPath)) {
  console.log('⚠️  .env dosyası zaten var, üzerine yazılmıyor.')
  console.log('   Silmek istersen: del .env (Windows) veya rm .env (Unix)')
  process.exit(0)
}

const jwtSecret  = randomBytes(48).toString('base64url')
const adminPass  = randomBytes(16).toString('base64url')
const adminUser  = 'admin'
// TOTP secret: 20 byte → gerçek Base32 encode → 32 karakter
function toBase32(bytes) {
  const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
  let result = '', bits = 0, value = 0
  for (const byte of bytes) {
    value = (value << 8) | byte
    bits += 8
    while (bits >= 5) { result += ALPHA[(value >>> (bits - 5)) & 31]; bits -= 5 }
  }
  if (bits > 0) result += ALPHA[(value << (5 - bits)) & 31]
  return result
}
const totpSecret = toBase32(randomBytes(20)) // 32 karakter, Google Authenticator uyumlu

const content = `# Admin Panel
ADMIN_USERNAME=${adminUser}
ADMIN_PASSWORD=${adminPass}
JWT_SECRET=${jwtSecret}

# 2FA - Google Authenticator / Authy
# QR kurmak icin: /admin/setup sayfasini ziyaret et
TOTP_SECRET=${totpSecret}

# Storage (Vercel icin STORAGE_PATH=/tmp/messages yap)
STORAGE_PATH=./.data/messages
`

writeFileSync(envPath, content, 'utf-8')

console.log('✅ .env oluşturuldu!\n')
console.log(`   Kullanıcı adı : ${adminUser}`)
console.log(`   Şifre         : ${adminPass}`)
console.log(`   TOTP Secret   : ${totpSecret}`)
console.log(`   JWT Secret    : ${jwtSecret}\n`)
console.log('📱 2FA kurmak için önce siteyi başlat, sonra /admin/setup adresine git.')
console.log('⚠️  Bu bilgileri bir yere not et – .env dosyası git\'e commit edilmez.')
