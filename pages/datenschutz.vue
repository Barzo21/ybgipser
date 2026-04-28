<template>
  <div>
    <AppNav />
    <main class="bg-white pt-20">
      <!-- Hero Section -->
      <section class="bg-stone-50 py-16 border-b border-stone-200">
        <div class="max-w-4xl mx-auto px-6">
          <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Datenschutzerklärung</h1>
          <p class="text-stone-600 text-lg">Y.B. Gipser GmbH – Datenschutz nach Schweizer Recht (nFDPA)</p>
        </div>
      </section>

      <!-- Content -->
      <section class="max-w-4xl mx-auto px-6 py-16">
        <div class="prose prose-stone max-w-none space-y-8">
          <!-- 1. Verantwortlicher -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">1. Verantwortlicher für die Datenverarbeitung</h2>
            <div class="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <p class="font-semibold text-stone-900 mb-2">Y.B. Gipser GmbH</p>
              <p class="text-stone-700">Adresse: 4310 Rheinfelden, Schweiz</p>
              <p class="text-stone-700">Telefon: 079 335 78 75 / 078 950 92 55</p>
              <p class="text-stone-700">E-Mail: info@ybgipser.ch</p>
            </div>
          </div>

          <!-- 2. Erfasste Daten -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">2. Welche Daten wir erfassen und warum</h2>
            
            <h3 class="text-xl font-semibold text-stone-800 mt-6 mb-3">2.1 Kontaktformular</h3>
            <p class="text-stone-700 mb-3">Wenn Sie unser Kontaktformular ausfüllen, erfassen wir:</p>
            <ul class="list-disc list-inside text-stone-700 space-y-2 mb-4">
              <li>Vorname und Nachname</li>
              <li>Telefonnummer oder E-Mail-Adresse</li>
              <li>Art der gewünschten Leistung</li>
              <li>Projektbeschreibung</li>
              <li>Zeitstempel der Anfrage</li>
            </ul>
            <p class="text-stone-700 mb-3"><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Erstellung eines Kostenvoranschlags.</p>
            <p class="text-stone-700"><strong>Rechtliche Grundlage:</strong> Art. 6 Abs. 1 lit. a nFDPA (Ihre ausdrückliche Einwilligung)</p>

            <h3 class="text-xl font-semibold text-stone-800 mt-6 mb-3">2.2 Cookies und Tracking</h3>
            <p class="text-stone-700">Diese Website verwendet standardmässig keine Tracking-Cookies. Alle Cookies unterstützen nur die Funktionalität der Website.</p>
          </div>

          <!-- 3. Datenspeicherung -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">3. Speicherung und Aufbewahrung von Daten</h2>
            <p class="text-stone-700 mb-3">
              Ihre Kontaktdaten werden auf unseren sicheren Servern in der Schweiz gespeichert.
            </p>
            <ul class="list-disc list-inside text-stone-700 space-y-2 mb-4">
              <li><strong>Speicherdauer für Kontaktanfragen:</strong> 24 Monate nach letzter Kontakt-Aktivität</li>
              <li><strong>Speicherdauer nach Projektabschluss:</strong> 7 Jahre (für Archivierung und Haftungszwecke)</li>
              <li><strong>Speicherdauer für abgelehnte Angebote:</strong> 12 Monate</li>
            </ul>
            <p class="text-stone-700">Nach Ablauf dieser Fristen werden Ihre Daten automatisch gelöscht, solange keine gesetzliche Aufbewahrungspflicht besteht.</p>
          </div>

          <!-- 4. Datensicherheit -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">4. Datensicherheit</h2>
            <p class="text-stone-700 mb-3">Wir schützen Ihre Daten mit folgenden Massnahmen:</p>
            <ul class="list-disc list-inside text-stone-700 space-y-2">
              <li>HTTPS-Verschlüsselung für sichere Datenübertragung</li>
              <li>Sichere Server in der Schweiz mit Zugriffskontrolle</li>
              <li>Regelmässige Sicherheitsaudits und Penetrationstests</li>
              <li>Zwei-Faktor-Authentifizierung für Administratoren</li>
            </ul>
          </div>

          <!-- 5. Weitergabe von Daten -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">5. Datenweitergabe an Dritte</h2>
            <p class="text-stone-700 mb-3">
              Wir geben Ihre Daten nicht an Dritte weiter, es sei denn:
            </p>
            <ul class="list-disc list-inside text-stone-700 space-y-2">
              <li>Sie haben ausdrücklich zugestimmt</li>
              <li>Es ist zur Erbringung unserer Leistungen notwendig (z.B. Unterauftragnehmer)</li>
              <li>Gesetzliche Verpflichtungen erfordern dies</li>
            </ul>
          </div>

          <!-- 6. Ihre Rechte -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">6. Ihre Rechte (Datensubjektrechte)</h2>
            <p class="text-stone-700 mb-4">
              Nach dem Bundesgesetz über den Datenschutz (nFDPA) haben Sie folgende Rechte:
            </p>
            <div class="space-y-3 mb-6">
              <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p class="font-semibold text-amber-900 mb-1">📋 Recht auf Auskunft</p>
                <p class="text-amber-800 text-sm">Sie können jederzeit erfahren, welche Daten wir über Sie speichern.</p>
              </div>
              <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p class="font-semibold text-amber-900 mb-1">✏️ Recht auf Berichtigung</p>
                <p class="text-amber-800 text-sm">Sie können falsche oder unvollständige Daten korrigieren lassen.</p>
              </div>
              <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p class="font-semibold text-amber-900 mb-1">🗑️ Recht auf Löschung</p>
                <p class="text-amber-800 text-sm">Sie können die Löschung Ihrer Daten beantragen, soweit keine gesetzlichen Aufbewahrungsfristen bestehen.</p>
              </div>
              <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p class="font-semibold text-amber-900 mb-1">📤 Recht auf Datenportabilität</p>
                <p class="text-amber-800 text-sm">Sie können Ihre Daten in einem strukturierten, maschinenlesbaren Format erhalten.</p>
              </div>
              <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p class="font-semibold text-amber-900 mb-1">🚫 Recht auf Widerspruch</p>
                <p class="text-amber-800 text-sm">Sie können der Verarbeitung Ihrer Daten widersprechen.</p>
              </div>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
              <p class="font-semibold text-blue-900 mb-3">
                🔐 Ihre Daten online verwalten
              </p>
              <p class="text-blue-800 mb-4">
                Sie können Ihre persönlichen Daten selbstständig über unser Datensubjekt-Formular verwalten:
              </p>
              <NuxtLink 
                to="/datenschutz-rechte"
                class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Zu "Ihre Datenschutzrechte" →
              </NuxtLink>
              <p class="text-blue-800 text-sm mt-4">
                Dort können Sie Ihre Daten exportieren oder löschen, ohne uns kontaktieren zu müssen.
              </p>
            </div>
            <p class="text-stone-700">
              Um diese Rechte auszuüben oder bei Fragen, kontaktieren Sie uns direkt:
            </p>
            <p class="text-stone-700 font-semibold">
              📧 info@ybgipser.ch<br />
              💬 WhatsApp: 079 335 78 75
            </p>
          </div>

          <!-- 7. Cookies -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">7. Cookies und ähnliche Technologien</h2>
            <p class="text-stone-700 mb-3">
              Auf dieser Website werden Cookie-freie Technologien verwendet. Es werden keine Tracking-Cookies gesetzt.
            </p>
            <p class="text-stone-700">
              Bestimmte funktionelle Cookies können verwendet werden, um die Nutzung der Website zu verbessern (z.B. Login-Sessions für Administratoren).
            </p>
          </div>

          <!-- 8. Externe Links -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">8. Externe Links</h2>
            <p class="text-stone-700">
              Diese Website enthält möglicherweise Links zu externen Websites. Wir sind nicht verantwortlich für deren Datenschutzrichtlinien. Bitte überprüfen Sie diese selbst.
            </p>
          </div>

          <!-- 9. Kontakt Datenschutzbeauftragter -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">9. Datenschutzbedenken</h2>
            <p class="text-stone-700 mb-3">
              Haben Sie Fragen oder Bedenken zur Verarbeitung Ihrer Daten? Kontaktieren Sie uns:
            </p>
            <div class="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <p class="text-stone-700">
                <strong>Y.B. Gipser GmbH</strong><br />
                E-Mail: info@ybgipser.ch<br />
                Telefon: 079 335 78 75<br />
                Adresse: 4310 Rheinfelden, Schweiz
              </p>
            </div>
          </div>

          <!-- 10. Änderungen -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">10. Änderungen dieser Datenschutzerklärung</h2>
            <p class="text-stone-700">
              Wir können diese Datenschutzerklärung jederzeit aktualisieren. Die jeweils aktuelle Version finden Sie auf dieser Website.
            </p>
            <p class="text-stone-600 text-sm mt-4">
              <strong>Letzte Aktualisierung:</strong> April 2026
            </p>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Y.B. Gipser GmbH nach Schweizer nFDPA. Erfahren Sie, wie wir Ihre Daten verarbeiten und schützen.',
  robots: 'noindex, follow',
})
</script>
