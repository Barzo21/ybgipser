<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
    <!-- ── Animated wire background ── -->
    <AnimatedWire />

    <!-- ── Radial glow blobs ── -->
    <div
      class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/8 rounded-full blur-[120px] pointer-events-none"
    />
    <div
      class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/6 rounded-full blur-[90px] pointer-events-none"
    />
    <div
      class="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-700/6 rounded-full blur-[80px] pointer-events-none"
    />

    <!-- ── Gradient overlay ── -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950 pointer-events-none"
    />

    <!-- ── Main content ── -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-10 animate-float"
      >
        <span class="w-2 h-2 rounded-full bg-blue-400 animate-electric-pulse" />
        Zertifizierter Elektrofachbetrieb · Meisterbetrieb
      </div>

      <!-- Headline -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
        Strom.
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
          Sicherheit.
        </span>
        <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Zukunft.
        </span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
        Ihr zuverlässiger Partner für professionelle Elektroinstallation,
        Smart Home Lösungen und Wartung –
        <span class="text-slate-300">modern, sicher und mit über 20 Jahren Erfahrung.</span>
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <a
          href="#kontakt"
          class="group w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 animate-glow-pulse text-lg shadow-xl shadow-blue-900/40"
        >
          Kontakt aufnehmen
          <span class="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1.5">→</span>
        </a>
        <a
          href="#leistungen"
          class="group w-full sm:w-auto px-9 py-4 border border-slate-600 text-slate-300 font-semibold rounded-2xl hover:border-blue-500/60 hover:text-blue-300 hover:bg-blue-950/20 transition-all duration-300 text-lg"
        >
          Unsere Leistungen
        </a>
      </div>

      <!-- Stats bar -->
      <div class="inline-flex flex-wrap justify-center gap-0 border border-slate-700/50 bg-slate-900/40 backdrop-blur rounded-2xl overflow-hidden">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="flex flex-col items-center px-8 py-5"
          :class="i < stats.length - 1 ? 'border-r border-slate-700/50' : ''"
        >
          <span class="text-2xl font-bold text-white">{{ stat.value }}</span>
          <span class="text-xs text-slate-500 mt-0.5 whitespace-nowrap">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- ── Scroll indicator ── -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-scroll-bounce">
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
