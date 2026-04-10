<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
    <!-- ── Animated wire background ── -->
    <AnimatedWire />

    <!-- ── Radial glow blobs ── -->
    <div
      class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none"
    />
    <div
      class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-100/50 rounded-full blur-[90px] pointer-events-none"
    />

    <!-- ── Gradient overlay ── -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"
    />

    <!-- ── Main content ── -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium mb-10 animate-float shadow-sm"
      >
        <span class="w-2 h-2 rounded-full bg-blue-500 animate-electric-pulse" />
        Zertifizierter Elektrofachbetrieb · Meisterbetrieb
      </div>

      <!-- Headline -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight">
        Strom.
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
          Sicherheit.
        </span>
        <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
          Zukunft.
        </span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
        Ihr zuverlässiger Partner für professionelle Elektroinstallation,
        Smart Home Lösungen und Wartung –
        <span class="text-slate-700 font-normal">modern, sicher und mit über 20 Jahren Erfahrung.</span>
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <a
          href="#kontakt"
          class="group w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 animate-glow-pulse text-lg shadow-xl shadow-blue-200"
        >
          Kontakt aufnehmen
          <span class="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1.5">→</span>
        </a>
        <a
          href="#leistungen"
          class="group w-full sm:w-auto px-9 py-4 border border-slate-300 text-slate-700 font-semibold rounded-2xl hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-lg"
        >
          Unsere Leistungen
        </a>
      </div>

      <!-- Stats bar -->
      <div class="inline-flex flex-wrap justify-center gap-0 border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="flex flex-col items-center px-8 py-5"
          :class="i < stats.length - 1 ? 'border-r border-slate-200' : ''"
        >
          <span class="text-2xl font-bold text-slate-900">{{ stat.value }}</span>
          <span class="text-xs text-slate-400 mt-0.5 whitespace-nowrap">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- ── Scroll indicator ── -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-scroll-bounce">
      <span class="text-[10px] uppercase tracking-[0.2em] font-medium">Scrollen</span>
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '20+', label: 'Jahre Erfahrung' },
  { value: '1.200+', label: 'Abgeschlossene Projekte' },
  { value: '98%', label: 'Weiterempfehlung' },
  { value: '24h', label: 'Notdienst' },
]
</script>
