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

          <!-- Opening hours -->
          <div class="p-5 bg-white border border-stone-200 rounded-2xl">
            <h4 class="text-stone-900 font-semibold mb-4 flex items-center gap-2 text-sm">
              <span class="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center text-sm">🕐</span>
              Arbeitszeiten
            </h4>
            <div class="space-y-2 text-sm">
              <div v-for="row in hours" :key="row.day" class="flex justify-between items-center">
                <span class="text-stone-500">{{ row.day }}</span>
                <span :class="row.highlight ? 'text-amber-600 font-semibold' : 'text-stone-700'">
                  {{ row.time }}
                </span>
              </div>
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

            <form class="space-y-5" @submit.prevent>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-stone-500 text-xs uppercase tracking-wider mb-2">Vorname</label>
                  <input type="text" placeholder="Max"
                    class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all placeholder-stone-300 text-sm" />
                </div>
                <div>
                  <label class="block text-stone-500 text-xs uppercase tracking-wider mb-2">Nachname</label>
                  <input type="text" placeholder="Mustermann"
                    class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all placeholder-stone-300 text-sm" />
                </div>
              </div>

              <div>
                <label class="block text-stone-500 text-xs uppercase tracking-wider mb-2">Telefon / E-Mail</label>
                <input type="text" placeholder="+49 123 ... oder email@beispiel.de"
                  class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all placeholder-stone-300 text-sm" />
              </div>

              <div>
                <label class="block text-stone-500 text-xs uppercase tracking-wider mb-2">Gewünschte Leistung</label>
                <select class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-700 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all text-sm appearance-none">
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
                <textarea rows="4" placeholder="Beschreiben Sie kurz Ihr Vorhaben (Fläche, Ort, Zeitraum...)"
                  class="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300 transition-all placeholder-stone-300 resize-none text-sm" />
              </div>

              <button type="submit"
                class="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 animate-glow-pulse text-base group shadow-lg shadow-amber-200">
                Kostenloses Angebot anfordern →
              </button>

              <p class="text-xs text-stone-400 text-center">
                Mit dem Absenden stimmen Sie unserer
                <a href="#" class="text-stone-500 hover:text-amber-600 transition-colors underline">Datenschutzerklärung</a> zu.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contactInfo = [
  { icon: '📞', label: 'Telefon', value: '+49 (0) 123 456 789' },
  { icon: '📧', label: 'E-Mail', value: 'info@yb-gipser.de' },
  { icon: '📍', label: 'Adresse', value: 'Musterstraße 42, 12345 Musterstadt' },
]

const hours = [
  { day: 'Montag – Freitag', time: '07:00 – 17:00 Uhr', highlight: false },
  { day: 'Samstag', time: '08:00 – 13:00 Uhr', highlight: false },
  { day: 'Sonntag', time: 'Geschlossen', highlight: false },
  { day: 'Angebotserstellung', time: 'innerhalb 48h', highlight: true },
]
</script>
