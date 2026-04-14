<template>
  <section id="kontakt" class="py-32 relative overflow-hidden bg-stone-50">
    <div class="absolute top-0 left-1/3 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
          Kontakt
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-5 leading-tight">
          Nehmen Sie
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
            Kontakt auf
          </span>
        </h2>
        <p class="text-stone-500 max-w-xl mx-auto text-lg leading-relaxed">
          Wir freuen uns auf Ihre Anfrage. Schreiben Sie uns oder rufen Sie direkt an –
          wir erstellen Ihnen innerhalb von 48 Stunden ein kostenloses Angebot.
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-10">
        <!-- Contact info -->
        <div class="lg:col-span-2 reveal-left space-y-4">
          <!-- WhatsApp card — highlighted -->
          <a
            :href="waLink()"
            target="_blank"
            rel="noopener"
            class="flex items-start gap-4 p-5 bg-green-50 border-2 border-green-300 rounded-2xl hover:border-green-400 hover:shadow-md hover:shadow-green-100 transition-all duration-300 group"
          >
            <div class="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
              <!-- WhatsApp SVG -->
              <svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <div class="text-green-700 text-xs uppercase tracking-wider mb-0.5 font-semibold">WhatsApp</div>
              <div class="text-stone-900 font-medium">079 335 78 75</div>
              <div class="text-green-600 text-xs mt-0.5 font-medium">Jetzt schreiben →</div>
            </div>
          </a>

          <!-- Other contact cards -->
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="flex items-start gap-4 p-5 bg-white border border-stone-200 rounded-2xl hover:border-amber-300 hover:shadow-md hover:shadow-amber-50 transition-all duration-300 group"
          >
            <div class="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl group-hover:bg-amber-100 transition-colors">
              {{ info.icon }}
            </div>
            <div>
              <div class="text-stone-400 text-xs uppercase tracking-wider mb-0.5">{{ info.label }}</div>
              <div class="text-stone-900 font-medium">{{ info.value }}</div>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="lg:col-span-3 reveal-right">
          <div class="bg-white border border-stone-200 rounded-3xl p-8 relative overflow-hidden shadow-lg shadow-stone-100">
            <div class="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

            <h3 class="text-stone-900 font-semibold text-xl mb-7 flex items-center gap-2">
              <span class="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg flex items-center justify-center text-sm">✉️</span>
              Angebot anfordern
            </h3>

            <form class="space-y-5" @submit.prevent="sendViaWhatsApp">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-stone-500 text-xs uppercase tracking-wider mb-2">Vorname</label>
                  <input v-model="form.vorname" type="text" placeholder="Max"
                    class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all placeholder-stone-300 text-sm" />
                </div>
                <div>
                  <label class="block text-stone-500 text-xs uppercase tracking-wider mb-2">Nachname</label>
                  <input v-model="form.nachname" type="text" placeholder="Mustermann"
                    class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all placeholder-stone-300 text-sm" />
                </div>
              </div>

              <div>
                <label class="block text-stone-500 text-xs uppercase tracking-wider mb-2">Telefon / E-Mail</label>
                <input v-model="form.kontakt" type="text" placeholder="+41 79 ... oder email@beispiel.ch"
                  class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all placeholder-stone-300 text-sm" />
              </div>

              <div>
                <label class="block text-stone-500 text-xs uppercase tracking-wider mb-2">Gewünschte Leistung</label>
                <select v-model="form.leistung" class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-700 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all text-sm appearance-none">
                  <option value="">Bitte wählen...</option>
                  <option>Trockenbau</option>
                  <option>Innenputz / Verputze</option>
                  <option>Fassade / Außenputz</option>
                  <option>Renovierung / Sanierung</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              <div>
                <label class="block text-stone-500 text-xs uppercase tracking-wider mb-2">Projektbeschreibung</label>
                <textarea v-model="form.beschreibung" rows="4" placeholder="Beschreiben Sie kurz Ihr Vorhaben (Fläche, Ort, Zeitraum...)"
                  class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all placeholder-stone-300 resize-none text-sm" />
              </div>

              <!-- Submit → WhatsApp -->
              <button type="submit"
                class="w-full py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-all duration-300 text-base flex items-center justify-center gap-3 shadow-lg shadow-green-200 group">
                <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Über WhatsApp senden
              </button>

              <p class="text-xs text-stone-400 text-center">
                Sie werden zu WhatsApp weitergeleitet. Ihre Nachricht ist vorausgefüllt – einfach absenden.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Floating WhatsApp button -->
  <a
    :href="waLink()"
    target="_blank"
    rel="noopener"
    class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full shadow-xl shadow-green-300/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
    aria-label="WhatsApp"
  >
    <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <!-- Ping animation -->
    <span class="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
  </a>
</template>

<script setup lang="ts">
const WA_NUMBER = '41793357875'

const form = reactive({
  vorname: '',
  nachname: '',
  kontakt: '',
  leistung: '',
  beschreibung: '',
})

function waLink(message = 'Guten Tag, ich möchte ein kostenloses Angebot anfragen.') {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

function sendViaWhatsApp() {
  const lines: string[] = ['*Angebotsanfrage – Y.B. Gipser GmbH*', '']
  if (form.vorname || form.nachname)
    lines.push(`👤 Name: ${[form.vorname, form.nachname].filter(Boolean).join(' ')}`)
  if (form.kontakt)
    lines.push(`📱 Kontakt: ${form.kontakt}`)
  if (form.leistung)
    lines.push(`🔧 Leistung: ${form.leistung}`)
  if (form.beschreibung)
    lines.push(`📝 Beschreibung: ${form.beschreibung}`)
  if (lines.length === 2)
    lines.push('Ich möchte ein kostenloses Angebot anfragen.')

  window.open(waLink(lines.join('\n')), '_blank', 'noopener')
}

const contactInfo = [
  { icon: '📞', label: 'Yunus Büyüksari', value: '079 335 78 75' },
  { icon: '📞', label: 'Burhan Koyuncu',  value: '078 950 92 55' },
  { icon: '📧', label: 'E-Mail',          value: 'info@ybgipser.ch' },
  { icon: '📍', label: 'Adresse',         value: '4310 Rheinfelden' },
]
</script>
