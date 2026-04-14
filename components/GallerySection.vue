<template>
  <section id="projekte" class="py-32 bg-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <span class="inline-block text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">
          Referenzen
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-900 mb-5 leading-tight">
          Unsere
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
            Projekte
          </span>
        </h2>
        <p class="text-stone-500 max-w-xl mx-auto text-lg leading-relaxed">
          Qualität, die man sieht – ein Auszug aus unseren abgeschlossenen Arbeiten.
        </p>
      </div>

      <!-- Gallery grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <div
          v-for="(item, index) in projects"
          :key="index"
          class="reveal group relative overflow-hidden rounded-2xl cursor-pointer"
          :class="item.large ? 'row-span-2' : ''"
          :style="{ transitionDelay: `${index * 60}ms`, aspectRatio: item.large ? 'unset' : '4/3' }"
        >
          <!-- Image -->
          <img
            :src="item.src"
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            :style="item.large ? 'height: 100%; min-height: 320px;' : ''"
            loading="lazy"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400"
          />

          <!-- Label -->
          <div
            class="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400"
          >
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-0.5 bg-amber-400 rounded-full" />
              <span class="text-amber-400 text-xs font-semibold uppercase tracking-wider">{{ item.category }}</span>
            </div>
            <h3 class="text-white font-bold text-lg leading-tight">{{ item.title }}</h3>
          </div>

          <!-- Amber corner accent on hover -->
          <div
            class="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-400/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"
          >
            <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 text-center reveal">
        <p class="text-stone-400 text-sm mb-4">Möchten Sie Ihr Projekt realisieren?</p>
        <a
          href="#kontakt"
          class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 shadow-lg shadow-amber-200 group"
        >
          Angebot anfragen
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Kendi proje fotoğraflarını public/projekte/ klasörüne ekleyip
// src değerlerini '/projekte/foto1.jpg' gibi güncelleyebilirsiniz.
const projects = [
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    title: 'Innenputz Einfamilienhaus',
    category: 'Verputze',
    large: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: 'Trockenbau Bürokomplex',
    category: 'Trockenbau',
    large: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80',
    title: 'Fassadensanierung',
    category: 'Fassaden',
    large: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    title: 'Außenputz Mehrfamilienhaus',
    category: 'Fassaden',
    large: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
    title: 'Deckenverkleidung Modern',
    category: 'Trockenbau',
    large: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Glattputz Wohnbereich',
    category: 'Verputze',
    large: false,
  },
]
</script>
