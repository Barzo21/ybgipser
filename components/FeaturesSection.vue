<template>
  <section id="warum-wir" class="py-32 bg-white relative overflow-hidden">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[120px] pointer-events-none"
    />

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">
          Unsere Stärken
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
          Warum
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            ElektroProfi?
          </span>
        </h2>
        <p class="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
          Was uns von anderen unterscheidet – und warum über 1.200 Kunden auf uns vertrauen.
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="reveal group flex gap-5 p-7 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-200 hover:bg-white hover:shadow-md hover:shadow-blue-50 transition-all duration-300"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- Icon -->
          <div
            class="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
            :class="feature.iconBg"
          >
            {{ feature.emoji }}
          </div>

          <!-- Text -->
          <div>
            <h3 class="text-slate-900 font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
              {{ feature.title }}
            </h3>
            <p class="text-slate-500 leading-relaxed text-sm">{{ feature.body }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA banner -->
      <div class="reveal">
        <div
          class="relative rounded-3xl overflow-hidden border border-blue-100 p-10 text-center bg-gradient-to-br from-blue-600 to-cyan-600 shadow-xl shadow-blue-200"
        >
          <!-- Wire decoration -->
          <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            <svg class="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
              <path
                class="banner-wire"
                d="M-50,100 C100,60 200,140 400,100 S600,60 850,100"
                fill="none"
                stroke="white"
                stroke-width="1.5"
                stroke-dasharray="20 12"
              />
              <path
                class="banner-wire-2"
                d="M-50,130 C150,90 250,160 400,130 S600,90 850,130"
                fill="none"
                stroke="white"
                stroke-width="1"
                stroke-dasharray="15 18"
              />
            </svg>
          </div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-medium mb-4">
              <span class="w-1.5 h-1.5 rounded-full bg-white animate-electric-pulse" />
              Kostenlose Erstberatung
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
              Bereit für Ihr Projekt?
            </h3>
            <p class="text-blue-100 mb-8 max-w-lg mx-auto">
              Kontaktieren Sie uns jetzt für eine kostenlose Beratung und ein unverbindliches Angebot.
              Wir melden uns innerhalb von 24 Stunden.
            </p>
            <a
              href="#kontakt"
              class="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg text-lg"
            >
              Jetzt Angebot anfragen ⚡
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
    body: 'Als eingetragener Meisterbetrieb garantieren wir höchste Ausführungsqualität nach allen aktuellen VDE-Normen. Jede Arbeit wird sorgfältig dokumentiert und abgenommen.',
    iconBg: 'bg-gradient-to-br from-yellow-100 to-orange-100',
  },
  {
    emoji: '⚡',
    title: 'Schnelle Reaktionszeit',
    body: 'Im Notfall sind wir innerhalb kürzester Zeit vor Ort. Unser 24h-Notdienst steht Ihnen an 365 Tagen im Jahr zur Verfügung – auch an Sonn- und Feiertagen.',
    iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
  },
  {
    emoji: '🔒',
    title: 'Sicherheit an erster Stelle',
    body: 'Alle unsere Arbeiten werden nach höchsten Sicherheitsstandards ausgeführt und vollständig dokumentiert. Ihr Schutz und die Betriebssicherheit haben oberste Priorität.',
    iconBg: 'bg-gradient-to-br from-slate-100 to-slate-50',
  },
  {
    emoji: '💡',
    title: 'Moderne Zukunftslösungen',
    body: 'Wir denken voraus: Smart Home, E-Mobilität Ladeinfrastruktur, Photovoltaik-Anbindung und Energieeffizienz – wir rüsten Sie für die Zukunft.',
    iconBg: 'bg-gradient-to-br from-cyan-100 to-teal-50',
  },
]
</script>

<style scoped>
@keyframes bannerFlow {
  from { stroke-dashoffset: 200; }
  to   { stroke-dashoffset: 0; }
}
.banner-wire   { animation: bannerFlow 4s linear infinite; }
.banner-wire-2 { animation: bannerFlow 6s linear infinite; animation-delay: -2s; }
</style>
