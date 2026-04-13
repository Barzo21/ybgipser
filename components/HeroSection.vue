<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-white">
    <!-- Animated brush stroke background -->
    <AnimatedWire />

    <!-- Warm glow blobs -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-100/50 rounded-full blur-[100px] pointer-events-none" />

    <!-- Gradient fade bottom -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">

      <!-- Badge -->
      <div class="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-amber-300/60 bg-amber-50 text-amber-700 text-sm font-medium mb-10 animate-float shadow-sm">
        <span class="w-2 h-2 rounded-full bg-amber-500 animate-subtle-pulse" />
        Meisterbetrieb · Y.B. Gipser GmbH
      </div>

      <!-- Headline -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold text-stone-900 mb-6 leading-[1.05] tracking-tight">
        Qualität.
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500">
          Präzision.
        </span>
        <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
          Handwerk.
        </span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
        Ihr Spezialist für Trockenbau, Verputze und Fassadengestaltung –
        <span class="text-stone-700 font-normal">sauber, termingerecht und mit höchstem Anspruch.</span>
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <a
          href="#kontakt"
          class="group w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-2xl hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 animate-glow-pulse text-lg shadow-xl shadow-amber-200/70"
        >
          Angebot anfragen
          <span class="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1.5">→</span>
        </a>
        <a
          href="#leistungen"
          class="group w-full sm:w-auto px-9 py-4 border border-stone-300 text-stone-700 font-semibold rounded-2xl hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-all duration-300 text-lg"
        >
          Unsere Leistungen
        </a>
      </div>

    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 animate-scroll-bounce">
      <span class="text-[10px] uppercase tracking-[0.2em] font-medium">Scrollen</span>
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
