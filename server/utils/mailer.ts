import nodemailer from 'nodemailer'

interface ContactData {
  vorname: string
  nachname: string
  kontakt: string
  leistung: string
  beschreibung: string
}

export async function sendContactMail(data: ContactData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const fullName = [data.vorname, data.nachname].filter(Boolean).join(' ') || 'Unbekannt'

  await transporter.sendMail({
    from: `"Y.B. Gipser Website" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || 'info@ybgipser.ch',
    subject: `Neue Anfrage: ${fullName} – ${data.leistung || 'Allgemein'}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#F59E0B;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:22px">Neue Angebotsanfrage</h1>
          <p style="color:#fffbeb;margin:6px 0 0;font-size:14px">Y.B. Gipser GmbH · Website Kontaktformular</p>
        </div>
        <div style="background:#fff;padding:32px;border:1px solid #e7e5e4;border-top:none;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:12px 0;color:#78716c;font-size:13px;width:130px;vertical-align:top">Name</td>
              <td style="padding:12px 0;font-weight:600;color:#1c1917">${fullName}</td>
            </tr>
            <tr style="border-top:1px solid #f5f5f4">
              <td style="padding:12px 0;color:#78716c;font-size:13px;vertical-align:top">Kontakt</td>
              <td style="padding:12px 0;color:#1c1917">${data.kontakt || '–'}</td>
            </tr>
            <tr style="border-top:1px solid #f5f5f4">
              <td style="padding:12px 0;color:#78716c;font-size:13px;vertical-align:top">Leistung</td>
              <td style="padding:12px 0;color:#1c1917">${data.leistung || '–'}</td>
            </tr>
            <tr style="border-top:1px solid #f5f5f4">
              <td style="padding:12px 0;color:#78716c;font-size:13px;vertical-align:top">Beschreibung</td>
              <td style="padding:12px 0;color:#1c1917;white-space:pre-wrap">${data.beschreibung || '–'}</td>
            </tr>
          </table>
        </div>
        <p style="color:#a8a29e;font-size:12px;text-align:center;margin-top:16px">ybgipser.ch</p>
      </div>
    `,
  })
}
