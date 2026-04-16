import { randomBytes } from 'crypto'
import { writeFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const envPath = resolve(process.cwd(), '.env')

if (existsSync(envPath)) {
  console.log('⚠️  .env dosyası zaten var, üzerine yazılmıyor.')
  console.log('   Silmek istersen: del .env (Windows) veya rm .env (Unix)')
  process.exit(0)
}

const jwtSecret   = randomBytes(48).toString('base64url')
const adminPass   = randomBytes(16).toString('base64url')
const adminUser   = 'admin'

const content = `# Admin Panel
ADMIN_USERNAME=${adminUser}
ADMIN_PASSWORD=${adminPass}
JWT_SECRET=${jwtSecret}

# Storage (Vercel icin STORAGE_PATH=/tmp/messages yap)
STORAGE_PATH=./.data/messages
`

writeFileSync(envPath, content, 'utf-8')

console.log('✅ .env oluşturuldu!\n')
console.log(`   Kullanıcı adı : ${adminUser}`)
console.log(`   Şifre         : ${adminPass}`)
console.log(`   JWT Secret    : ${jwtSecret}\n`)
console.log('⚠️  Bu şifreyi bir yere not et – .env dosyası git\'e commit edilmez.')
