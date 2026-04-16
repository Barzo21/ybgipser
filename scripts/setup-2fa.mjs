import { readFileSync, writeFileSync, unlinkSync } from 'fs'
import { resolve, join } from 'path'
import { exec } from 'child_process'
import { tmpdir } from 'os'
import QRCode from 'qrcode'

// .env oku
const envPath = resolve(process.cwd(), '.env')
let envText
try {
  envText = readFileSync(envPath, 'utf-8')
} catch {
  console.error('❌ .env bulunamadı. Önce: npm run setup:env')
  process.exit(1)
}

function getEnv(key) {
  const match = envText.match(new RegExp(`^${key}=(.+)$`, 'm'))
  return match ? match[1].trim() : null
}

const totpSecret  = getEnv('TOTP_SECRET')
const adminUser   = getEnv('ADMIN_USERNAME') || 'admin'
const adminPass   = getEnv('ADMIN_PASSWORD')

if (!totpSecret) {
  console.error('❌ TOTP_SECRET .env içinde bulunamadı.')
  process.exit(1)
}

// otpauth URI oluştur
const uri = `otpauth://totp/YB%20Gipser%3A${encodeURIComponent(adminUser)}?secret=${totpSecret}&issuer=YB%20Gipser&algorithm=SHA1&digits=6&period=30`

// QR → data URL
const qrDataUrl = await QRCode.toDataURL(uri, {
  width: 300,
  margin: 3,
  color: { dark: '#1c1917', light: '#ffffff' },
})

// HTML oluştur
const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Y.B. Gipser – 2FA Setup</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #0c0a09;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
    }
    .card {
      background: #1c1917;
      border: 1px solid #292524;
      border-radius: 20px;
      padding: 40px;
      max-width: 420px;
      width: 100%;
      text-align: center;
    }
    .badge {
      display: inline-block;
      background: #f59e0b22;
      color: #f59e0b;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .1em;
      padding: 5px 14px;
      border-radius: 99px;
      border: 1px solid #f59e0b44;
      margin-bottom: 20px;
    }
    h1 { font-size: 22px; margin-bottom: 6px; }
    .sub { color: #78716c; font-size: 14px; margin-bottom: 28px; }
    .qr-wrap {
      background: #fff;
      display: inline-block;
      border-radius: 14px;
      padding: 12px;
      margin-bottom: 28px;
    }
    .qr-wrap img { display: block; width: 260px; height: 260px; }
    .info-box {
      background: #0c0a09;
      border: 1px solid #292524;
      border-radius: 12px;
      padding: 16px 20px;
      text-align: left;
      margin-bottom: 12px;
    }
    .info-label { color: #78716c; font-size: 11px; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 4px; }
    .info-value { color: #e7e5e4; font-size: 14px; font-family: monospace; word-break: break-all; }
    .info-value.pass { color: #fbbf24; font-weight: 600; }
    .steps {
      margin-top: 24px;
      text-align: left;
      color: #78716c;
      font-size: 13px;
      line-height: 1.8;
    }
    .steps b { color: #d6d3d1; }
    .warn {
      margin-top: 24px;
      color: #78716c;
      font-size: 12px;
      border-top: 1px solid #292524;
      padding-top: 16px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">2FA Setup</div>
    <h1>Google Authenticator</h1>
    <p class="sub">Y.B. Gipser GmbH · Admin Panel</p>

    <div class="qr-wrap">
      <img src="${qrDataUrl}" alt="QR Code" />
    </div>

    <div class="info-box">
      <div class="info-label">Kullanıcı adı</div>
      <div class="info-value">${adminUser}</div>
    </div>
    <div class="info-box">
      <div class="info-label">Şifre</div>
      <div class="info-value pass">${adminPass || '(env\'de yok)'}</div>
    </div>
    <div class="info-box">
      <div class="info-label">Manuel giriş kodu (TOTP Secret)</div>
      <div class="info-value">${totpSecret}</div>
    </div>

    <div class="steps">
      <b>Nasıl kurulur?</b><br />
      1. Telefonda <b>Google Authenticator</b> veya <b>Authy</b>'yi aç<br />
      2. <b>+</b> → <b>QR kodu tara</b><br />
      3. Yukarıdaki QR'ı tara<br />
      4. <b>YB Gipser</b> hesabı eklenir<br />
      5. Artık /admin girişinde 6 haneli kodu kullan
    </div>

    <p class="warn">⚠️ Bu sayfayı kapattıktan sonra silinir. Ekran görüntüsü alma.</p>
  </div>
  <script>
    // Sayfa kapanınca temp dosyayı silme isteği gönder (opsiyonel)
    window.addEventListener('beforeunload', () => {})
  </script>
</body>
</html>`

// Geçici HTML dosyasına yaz
const tmpFile = join(tmpdir(), 'ybgipser-2fa-setup.html')
writeFileSync(tmpFile, html, 'utf-8')

console.log('✅ QR kodu hazır, tarayıcı açılıyor...')
console.log(`   Dosya: ${tmpFile}\n`)

// Platform'a göre aç
const cmd = process.platform === 'win32'
  ? `start "" "${tmpFile}"`
  : process.platform === 'darwin'
  ? `open "${tmpFile}"`
  : `xdg-open "${tmpFile}"`

exec(cmd, (err) => {
  if (err) {
    console.error('Tarayıcı açılamadı, dosyayı manuel aç:')
    console.log(tmpFile)
  }
})
