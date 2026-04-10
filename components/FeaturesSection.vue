<template>
  <section id="warum-wir" class="py-32 bg-white relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-50/80 rounded-full blur-[120px] pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
          Unsere Stärken
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-5 leading-tight">
          Warum
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
            Y.B. Gipser?
          </span>
        </h2>
        <p class="text-stone-500 max-w-xl mx-auto text-lg leading-relaxed">
          Was uns von anderen unterscheidet – und warum Kunden immer wieder auf uns vertrauen.
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="reveal group flex gap-5 p-7 bg-stone-50 border border-stone-200 rounded-2xl hover:border-amber-200 hover:bg-white hover:shadow-md hover:shadow-amber-50 transition-all duration-300"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div
            class="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
            :class="feature.iconBg"
          >
            {{ feature.emoji }}
          </div>
          <div>
            <h3 class="text-stone-900 font-semibold text-xl mb-2 group-hover:text-amber-700 transition-colors">
              {{ feature.title }}
            </h3>
            <p class="text-stone-500 leading-relaxed text-sm">{{ feature.body }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Banner -->
      <div class="reveal">
        <div class="relative rounded-3xl overflow-hidden border border-amber-200 p-10 text-center bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-400 shadow-xl shadow-amber-200">
          <!-- Brush stroke decoration -->
          <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
            <svg class="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
              <path class="banner-stroke-1" d="M-50,80 C150,40 300,120 500,80 S700,40 850,80"
                fill="none" stroke="white" stroke-width="40" stroke-linecap="round" stroke-dasharray="500 300" />
              <path class="banner-stroke-2" d="M-50,140 C200,100 350,170 550,140 S750,100 850,140"
                fill="none" stroke="white" stroke-width="25" stroke-linecap="round" stroke-dasharray="400 400" />
            </svg>
          </div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/25 border border-white/40 text-white text-xs font-medium mb-4">
              <span class="w-1.5 h-1.5 rounded-full bg-white animate-subtle-pulse" />
              Kostenlose Erstberatung
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
              Bereit für Ihr Projekt?
            </h3>
            <p class="text-amber-50 mb-8 max-w-lg mx-auto">
              Kontaktieren Sie uns jetzt für eine kostenlose Beratung und ein
              unverbindliches Angebot – wir melden uns innerhalb von 24 Stunden.
            </p>
            <a
              href="#kontakt"
              class="inline-block px-10 py-4 bg-white text-amber-600 font-bold rounded-2xl hover:bg-amber-50 transition-all duration-300 shadow-lg text-lg"
            >
              Jetzt Angebot anfordern
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    emoji: '🏆',
    title: 'Meisterbetrieb & Qualität',
    body: 'Als eingetragener Meisterbetrieb garantieren wir höchste Ausführungsqualität. Jede Oberfläche wird mit größter Sorgfalt und Präzision fertiggestellt.',
    iconBg: 'bg-gradient-to-br from-amber-100 to-yellow-50',
  },
  {
    emoji: '📐',
    title: 'Präzise Ausführung',
    body: 'Saubere Kanten, glatte Flächen, perfekte Anschlüsse – wir arbeiten mit modernsten Werkzeugen und jahrelanger Erfahrung für ein makelloses Ergebnis.',
    iconBg: 'bg-gradient-to-br from-stone-100 to-stone-50',
  },
  {
    emoji: '📅',
    title: 'Termingerechte Lieferung',
    body: 'Wir halten unsere Versprechen. Klare Zeitpläne, verlässliche Kommunikation und pünktliche Fertigstellung – damit Ihr Projekt reibungslos läuft.',
    iconBg: 'bg-gradient-to-br from-amber-100 to-amber-50',
  },
  {
    emoji: '💬',
    title: 'Persönliche Betreuung',
    body: 'Von der ersten Beratung bis zur Abnahme sind wir für Sie da. Direkte Kommunikation, transparente Preise und kein Durchreichen an Subunternehmer.',
    iconBg: 'bg-gradient-to-br from-yellow-100 to-yellow-50',
  },
]
</script>

<style scoped>
@keyframes bannerStroke {
  from { stroke-dashoffset: 800; }
  to   { stroke-dashoffset: 0; }
}
.banner-stroke-1 { animation: bannerStroke 5s linear infinite; }
.banner-stroke-2 { animation: bannerStroke 7s linear infinite; animation-delay: -2.5s; }
</style>
