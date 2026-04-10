<template>
  <section id="ueber-uns" class="py-32 bg-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/50 to-transparent pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        <!-- Left: Text -->
        <div class="reveal-left">
          <span class="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Über uns
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            Handwerk mit<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
              Leidenschaft &amp; Erfahrung
            </span>
          </h2>
          <p class="text-stone-600 text-lg leading-relaxed mb-5">
            Seit über 15 Jahren steht <span class="text-stone-900 font-semibold">Y.B. Gipser GmbH</span>
            für erstklassige Handwerksarbeit im Bereich Trockenbau, Verputze und Fassadengestaltung.
            Unsere erfahrenen Fachleute arbeiten präzise, sauber und immer termingerecht.
          </p>
          <p class="text-stone-500 leading-relaxed mb-10">
            Ob moderner Innenausbau, professioneller Innenputz oder hochwertiger Außenputz –
            wir bringen jedes Projekt zur Vollendung. Qualitätsbewusstsein und persönliche
            Betreuung sind für uns keine Versprechen, sondern gelebter Alltag.
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tag in tags"
              :key="tag"
              class="px-4 py-2 bg-stone-50 border border-stone-200 text-stone-700 rounded-xl text-sm font-medium hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50 transition-colors"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Right: Card -->
        <div class="reveal-right">
          <div class="relative">
            <!-- Main card -->
            <div class="relative bg-white rounded-3xl p-8 border border-stone-200 overflow-hidden shadow-xl shadow-stone-100">
              <div class="absolute top-0 right-0 w-48 h-48 bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

              <!-- Icon -->
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-200 animate-float">
                <!-- House + brush SVG -->
                <svg class="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <h3 class="text-2xl font-bold text-stone-900 mb-3">Ihr lokaler Fachbetrieb</h3>
              <p class="text-stone-500 leading-relaxed mb-8">
                Als familiengeführter Betrieb kennen wir die regionalen Gegebenheiten und sind
                schnell vor Ort. Direkte Kommunikation, faire Preise, perfekte Ausführung.
              </p>

              <!-- Metrics -->
              <div class="grid grid-cols-2 gap-4 pt-6 border-t border-stone-100">
                <div
                  v-for="metric in metrics"
                  :key="metric.label"
                  class="text-center p-3 bg-stone-50 rounded-xl"
                >
                  <div class="text-2xl font-bold" :class="metric.color">{{ metric.value }}</div>
                  <div class="text-xs text-stone-400 mt-1">{{ metric.label }}</div>
                </div>
              </div>
            </div>

            <!-- Floating badge -->
            <div class="absolute -bottom-5 -left-5 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl px-5 py-4 shadow-xl shadow-amber-200 border border-amber-300/30">
              <div class="text-white font-extrabold text-xl leading-none">15+</div>
              <div class="text-amber-50 text-xs mt-0.5">Jahre Erfahrung</div>
            </div>

            <!-- Floating badge 2 -->
            <div class="absolute -top-4 -right-4 bg-white border border-stone-200 rounded-2xl px-4 py-3 shadow-lg">
              <div class="flex items-center gap-1.5">
                <span class="text-amber-400 text-lg">★</span>
                <span class="text-stone-900 font-bold">5.0</span>
              </div>
              <div class="text-stone-400 text-xs mt-0.5">Google Bewertung</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = ['Meisterbetrieb', 'Trockenbau', 'Verputze', 'Fassaden', 'Kostenlose Beratung']

const metrics = [
  { value: '98%', label: 'Weiterempfehlung', color: 'text-amber-600' },
  { value: '5.0★', label: 'Kundenbewertung', color: 'text-yellow-600' },
  { value: '800+', label: 'Projekte', color: 'text-amber-500' },
  { value: '<48h', label: 'Angebotserstellung', color: 'text-stone-700' },
]
</script>
