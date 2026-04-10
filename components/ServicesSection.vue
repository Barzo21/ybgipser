<template>
  <section id="leistungen" class="py-32 relative overflow-hidden bg-slate-50">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">
          Was wir anbieten
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
          Unsere
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            Leistungen
          </span>
        </h2>
        <p class="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
          Von der einfachen Reparatur bis zur vollständigen Elektroinstallation –
          wir bieten alles aus einer Hand.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="reveal group relative bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-2 cursor-default overflow-hidden"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <!-- Hover glow overlay -->
          <div
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            :style="`background: radial-gradient(ellipse at 50% 0%, ${service.glowColor} 0%, transparent 70%);`"
          />

          <!-- Top line accent -->
          <div
            class="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :class="service.topBar"
          />

          <!-- Icon container -->
          <div
            class="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            <component :is="service.icon" class="w-7 h-7 text-white" />
          </div>

          <h3 class="text-slate-900 font-semibold text-lg mb-2.5 group-hover:text-blue-600 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-slate-500 text-sm leading-relaxed mb-4">
            {{ service.description }}
          </p>

          <!-- Hover arrow link -->
          <div
            class="flex items-center gap-1.5 text-blue-500 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            Mehr erfahren
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Bottom CTA strip -->
      <div class="mt-16 reveal text-center">
        <p class="text-slate-400 mb-4 text-sm">
          Nicht das Richtige dabei? Wir bieten maßgeschneiderte Lösungen für jedes Projekt.
        </p>
        <a
          href="#kontakt"
          class="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors group"
        >
          Jetzt kostenlos anfragen
          <svg
            class="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const IconBolt = defineComponent({
  render: () =>
    h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13 10V3L4 14h7v7l9-11h-7z' }),
    ]),
})

const IconWrench = defineComponent({
  render: () =>
    h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' }),
    ]),
})

const IconHome = defineComponent({
  render: () =>
    h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      }),
    ]),
})

const IconTool = defineComponent({
  render: () =>
    h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
      }),
    ]),
})

const services = [
  {
    icon: IconBolt,
    title: 'Elektroinstallation',
    description: 'Neuinstallationen, Erweiterungen und komplette Verkabelung für Wohn- und Gewerbegebäude nach DIN VDE.',
    iconBg: 'bg-gradient-to-br from-blue-600 to-blue-500',
    glowColor: 'rgba(59,130,246,0.06)',
    topBar: 'bg-gradient-to-r from-blue-400 to-blue-600',
  },
  {
    icon: IconWrench,
    title: 'Wartung & Prüfung',
    description: 'Regelmäßige Wartung, E-Check und DGUV-Prüfungen für maximale Sicherheit Ihrer elektrischen Anlagen.',
    iconBg: 'bg-gradient-to-br from-slate-600 to-slate-500',
    glowColor: 'rgba(100,116,139,0.04)',
    topBar: 'bg-gradient-to-r from-slate-400 to-slate-600',
  },
  {
    icon: IconHome,
    title: 'Smart Home',
    description: 'Intelligente Haussteuerung, KNX-Systeme, Lichtsteuerung und Energiemanagement für modernes Wohnen.',
    iconBg: 'bg-gradient-to-br from-cyan-600 to-cyan-500',
    glowColor: 'rgba(6,182,212,0.06)',
    topBar: 'bg-gradient-to-r from-cyan-400 to-cyan-600',
  },
  {
    icon: IconTool,
    title: 'Reparaturen',
    description: 'Schnelle und zuverlässige Entstörung und Reparatur – auch als 24h-Notdienst rund um die Uhr verfügbar.',
    iconBg: 'bg-gradient-to-br from-indigo-600 to-indigo-500',
    glowColor: 'rgba(99,102,241,0.06)',
    topBar: 'bg-gradient-to-r from-indigo-400 to-indigo-600',
  },
]
</script>
