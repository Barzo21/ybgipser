<template>
  <section id="ueber-uns" class="py-32 bg-slate-950 relative overflow-hidden">
    <!-- Bg accent -->
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-950/15 to-transparent pointer-events-none"
    />
    <div
      class="absolute bottom-0 left-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"
    />

    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        <!-- ── Left: Text ── -->
        <div class="reveal-left">
          <span class="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Über uns
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Elektrik mit<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Leidenschaft &amp; Präzision
            </span>
          </h2>
          <p class="text-slate-400 text-lg leading-relaxed mb-5">
            Seit über zwei Jahrzehnten sind wir als <span class="text-slate-200 font-medium">ElektroProfi</span>
            der erste Ansprechpartner für Privathaushalte und Unternehmen in der Region. Unser Team aus
            erfahrenen Elektrofachleuten steht für höchste Qualität, Zuverlässigkeit und moderne Lösungen.
          </p>
          <p class="text-slate-500 leading-relaxed mb-10">
            Ob klassische Elektroinstallation, moderne Smart Home Systeme oder schnelle Notfall-Reparaturen –
            wir sorgen dafür, dass bei Ihnen alles reibungslos läuft. Persönliche Betreuung und transparente
            Kommunikation sind für uns selbstverständlich.
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tag in tags"
              :key="tag"
              class="px-4 py-2 bg-slate-800/60 border border-slate-700/60 text-slate-300 rounded-xl text-sm font-medium hover:border-blue-500/40 hover:text-blue-300 transition-colors"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- ── Right: Card ── -->
        <div class="reveal-right">
          <div class="relative">
            <!-- Main card -->
            <div
              class="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 border border-slate-700/50 overflow-hidden backdrop-blur"
            >
              <!-- Glow accent -->
              <div
                class="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
              />

              <!-- Icon -->
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-900/40 animate-float"
              >
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <h3 class="text-2xl font-bold text-white mb-3">Ihr lokaler Experte</h3>
              <p class="text-slate-400 leading-relaxed mb-8">
                Als familiengeführtes Unternehmen kennen wir die lokalen Gegebenheiten und sind
                schnell vor Ort. Persönliche Beratung trifft auf modernste Technik.
              </p>

              <!-- Metrics -->
              <div class="grid grid-cols-2 gap-4 pt-6 border-t border-slate-700/50">
                <div
                  v-for="metric in metrics"
                  :key="metric.label"
                  class="text-center p-3 bg-slate-900/50 rounded-xl"
                >
                  <div class="text-2xl font-bold" :class="metric.color">{{ metric.value }}</div>
                  <div class="text-xs text-slate-500 mt-1">{{ metric.label }}</div>
                </div>
              </div>
            </div>

            <!-- Floating badge -->
            <div
              class="absolute -bottom-5 -left-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-5 py-4 shadow-2xl shadow-blue-900/50 border border-blue-500/20"
            >
              <div class="text-white font-extrabold text-xl leading-none">20+</div>
              <div class="text-blue-100 text-xs mt-0.5">Jahre Erfahrung</div>
            </div>

            <!-- Floating badge 2 -->
            <div
              class="absolute -top-4 -right-4 bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div class="flex items-center gap-1.5">
                <span class="text-yellow-400 text-lg">★</span>
                <span class="text-white font-bold">4.9</span>
              </div>
              <div class="text-slate-500 text-xs mt-0.5">Google Bewertung</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = ['Meisterbetrieb', 'VDE-zertifiziert', '24h Notdienst', 'Familienbetrieb', 'Kostenlose Beratung']

const metrics = [
  { value: '98%', label: 'Weiterempfehlung', color: 'text-blue-400' },
  { value: '4.9★', label: 'Kundenbewertung', color: 'text-cyan-400' },
  { value: '1.200+', label: 'Projekte', color: 'text-indigo-400' },
  { value: '<2h', label: 'Reaktionszeit', color: 'text-blue-300' },
]
</script>
