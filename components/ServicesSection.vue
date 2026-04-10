<template>
  <section id="leistungen" class="py-32 relative overflow-hidden bg-stone-50">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
          Was wir anbieten
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-5 leading-tight">
          Unsere
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
            Leistungen
          </span>
        </h2>
        <p class="text-stone-500 max-w-xl mx-auto text-lg leading-relaxed">
          Professionelle Handwerksleistungen aus einer Hand –
          von der Planung bis zur perfekten Ausführung.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="reveal group relative bg-white border border-stone-200 rounded-2xl p-7 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all duration-300 hover:-translate-y-2 cursor-default overflow-hidden"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <!-- Hover glow -->
          <div
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style="background: radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%);"
          />

          <!-- Top bar -->
          <div
            class="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-amber-400 to-yellow-400"
          />

          <!-- Icon -->
          <div
            class="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            <component :is="service.icon" class="w-7 h-7 text-white" />
          </div>

          <h3 class="text-stone-900 font-semibold text-lg mb-2.5 group-hover:text-amber-700 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-stone-500 text-sm leading-relaxed mb-4">
            {{ service.description }}
          </p>

          <div class="flex items-center gap-1.5 text-amber-600 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Mehr erfahren
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 reveal text-center">
        <p class="text-stone-400 mb-4 text-sm">
          Haben Sie ein anderes Projekt? Sprechen Sie uns an – wir finden eine Lösung.
        </p>
        <a
          href="#kontakt"
          class="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 font-medium text-sm transition-colors group"
        >
          Jetzt kostenloses Angebot anfordern
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const IconWall = defineComponent({
  render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', 'stroke-linecap': 'round' }),
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6' }),
  ]),
})

const IconBrush = defineComponent({
  render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' }),
  ]),
})

const IconHome = defineComponent({
  render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' }),
  ]),
})

const IconRepair = defineComponent({
  render: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' }),
  ]),
})

const services = [
  {
    icon: IconWall,
    title: 'Trockenbau',
    description: 'Wände, Decken und Ständerwerk in höchster Qualität – für Wohn- und Gewerberäume nach modernsten Standards.',
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-400',
  },
  {
    icon: IconBrush,
    title: 'Verputze / Innenputz',
    description: 'Glattputz, Maschinenputz und dekorative Putze für makellose Oberflächen in Ihren Innenräumen.',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-yellow-400',
  },
  {
    icon: IconHome,
    title: 'Fassaden',
    description: 'Außenputz, Wärmedämmverbundsysteme (WDVS) und Fassadengestaltung für ein perfektes Erscheinungsbild.',
    iconBg: 'bg-gradient-to-br from-amber-600 to-amber-500',
  },
  {
    icon: IconRepair,
    title: 'Renovierung & Sanierung',
    description: 'Altbausanierung, Rissausbesserung und Fassadenerneuerung – wir bringen ältere Gebäude wieder auf Vordermann.',
    iconBg: 'bg-gradient-to-br from-stone-600 to-stone-500',
  },
]
</script>
