<template>
  <section id="kontakt" class="py-32 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 pointer-events-none" />
    <div class="absolute top-0 left-1/3 w-80 h-80 bg-blue-900/8 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Kontakt
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Nehmen Sie
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Kontakt auf
          </span>
        </h2>
        <p class="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
          Wir freuen uns auf Ihre Anfrage. Schreiben Sie uns oder rufen Sie direkt an –
          wir antworten innerhalb von 24 Stunden.
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-10">
        <!-- ── Contact info (2/5) ── -->
        <div class="lg:col-span-2 reveal-left space-y-4">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="flex items-start gap-4 p-5 bg-slate-800/30 border border-slate-700/40 rounded-2xl hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300 group"
          >
            <div
              class="w-11 h-11 bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl group-hover:bg-blue-800/60 transition-colors"
            >
              {{ info.icon }}
            </div>
            <div>
              <div class="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{{ info.label }}</div>
              <div class="text-white font-medium">{{ info.value }}</div>
            </div>
          </div>

          <!-- Opening hours -->
          <div class="p-5 bg-slate-800/30 border border-slate-700/40 rounded-2xl">
            <h4 class="text-white font-semibold mb-4 flex items-center gap-2 text-sm">
              <span
                class="w-7 h-7 bg-cyan-900/60 rounded-lg flex items-center justify-center text-sm"
              >🕐</span>
              Öffnungszeiten
            </h4>
            <div class="space-y-2 text-sm">
              <div
                v-for="row in hours"
                :key="row.day"
                class="flex justify-between items-center"
              >
                <span class="text-slate-400">{{ row.day }}</span>
                <span :class="row.highlight ? 'text-blue-400 font-semibold' : 'text-slate-300'">
                  {{ row.time }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Contact form (3/5) ── -->
        <div class="lg:col-span-3 reveal-right">
          <div class="bg-slate-800/30 border border-slate-700/40 rounded-3xl p-8 relative overflow-hidden">
            <!-- Glow accent top -->
            <div class="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

            <h3 class="text-white font-semibold text-xl mb-7 flex items-center gap-2">
              <span
                class="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-sm"
              >✉️</span>
              Nachricht senden
            </h3>

            <form class="space-y-5" @submit.prevent>
              <!-- Name row -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-slate-400 text-xs uppercase tracking-wider mb-2">Vorname</label>
                  <input
                    type="text"
                    placeholder="Max"
                    class="w-full px-4 py-3 bg-slate-900/70 border border-slate-600/50 text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-slate-600 text-sm"
                  />
                </div>
                <div>
                  <label class="block text-slate-400 text-xs uppercase tracking-wider mb-2">Nachname</label>
                  <input
                    type="text"
                    placeholder="Mustermann"
                    class="w-full px-4 py-3 bg-slate-900/70 border border-slate-600/50 text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-slate-600 text-sm"
                  />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-slate-400 text-xs uppercase tracking-wider mb-2">E-Mail-Adresse</label>
                <input
                  type="email"
                  placeholder="max@beispiel.de"
                  class="w-full px-4 py-3 bg-slate-900/70 border border-slate-600/50 text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-slate-600 text-sm"
                />
              </div>

              <!-- Service selector -->
              <div>
                <label class="block text-slate-400 text-xs uppercase tracking-wider mb-2">Gewünschte Leistung</label>
                <select
                  class="w-full px-4 py-3 bg-slate-900/70 border border-slate-600/50 text-slate-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm appearance-none"
                >
                  <option value="" class="bg-slate-900 text-slate-400">Bitte wählen...</option>
                  <option class="bg-slate-900">Elektroinstallation</option>
                  <option class="bg-slate-900">Wartung &amp; Prüfung</option>
                  <option class="bg-slate-900">Smart Home</option>
                  <option class="bg-slate-900">Reparatur / Notdienst</option>
                  <option class="bg-slate-900">Sonstiges</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-slate-400 text-xs uppercase tracking-wider mb-2">Ihre Nachricht</label>
                <textarea
                  rows="4"
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  class="w-full px-4 py-3 bg-slate-900/70 border border-slate-600/50 text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-slate-600 resize-none text-sm"
                />
              </div>

              <!-- Submit -->
              <button
                type="submit"
                class="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 animate-glow-pulse text-base group"
              >
                Nachricht senden
                <span class="ml-2 inline-block transition-transform group-hover:translate-x-1">⚡</span>
              </button>

              <p class="text-xs text-slate-600 text-center">
                Mit dem Absenden stimmen Sie unserer
                <a href="#" class="text-slate-500 hover:text-blue-400 transition-colors underline">Datenschutzerklärung</a>
                zu.
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
  { icon: '📧', label: 'E-Mail', value: 'info@elektro-profi.de' },
  { icon: '📍', label: 'Adresse', value: 'Musterstraße 42, 12345 Musterstadt' },
]

const hours = [
  { day: 'Montag – Freitag', time: '07:00 – 18:00 Uhr', highlight: false },
  { day: 'Samstag', time: '08:00 – 14:00 Uhr', highlight: false },
  { day: 'Sonntag', time: 'Geschlossen', highlight: false },
  { day: 'Notdienst', time: '24h · 7 Tage', highlight: true },
]
</script>
