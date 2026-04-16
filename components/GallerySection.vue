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

      <!-- Before / After showcase -->
      <div class="mb-16 reveal">
        <div class="flex items-center gap-3 mb-5">
          <span class="w-8 h-0.5 bg-amber-400 rounded-full" />
          <span class="text-amber-600 text-sm font-semibold uppercase tracking-widest">Vorher · Nachher</span>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl shadow-stone-200 ring-1 ring-stone-100">
          <BeforeAfterSlider
            before="/projekte/10.jpeg"
            after="/projekte/11.jpeg"
          />
        </div>
        <p class="mt-4 text-stone-400 text-sm text-center">
          Schieber ziehen um Vorher &amp; Nachher zu vergleichen
        </p>
      </div>

      <!-- Gallery grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <div
          v-for="(item, index) in projects"
          :key="index"
          class="reveal group relative overflow-hidden rounded-2xl cursor-zoom-in"
          :style="{ transitionDelay: `${index * 60}ms`, aspectRatio: '4/3' }"
          @click="openLightbox(index)"
        >
          <img
            :src="item.src"
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

          <!-- Label -->
          <div class="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-0.5 bg-amber-400 rounded-full" />
              <span class="text-amber-400 text-xs font-semibold uppercase tracking-wider">{{ item.category }}</span>
            </div>
            <h3 class="text-white font-bold text-lg leading-tight">{{ item.title }}</h3>
          </div>

          <!-- Zoom icon -->
          <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-400/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
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

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lb">
        <div
          v-if="lightboxIndex !== null"
          class="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          @click.self="closeLightbox"
          @keydown.esc="closeLightbox"
        >
          <!-- Close -->
          <button
            class="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            @click="closeLightbox"
            aria-label="Schließen"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Prev -->
          <button
            class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 text-white transition-colors"
            @click="prevImage"
            aria-label="Zurück"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Image -->
          <div class="max-w-5xl w-full mx-16 flex flex-col items-center gap-4">
            <Transition name="lb-img" mode="out-in">
              <img
                :key="lightboxIndex"
                :src="projects[lightboxIndex!].src"
                :alt="projects[lightboxIndex!].title"
                class="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
              />
            </Transition>
            <div class="text-center">
              <span class="text-amber-400 text-xs font-semibold uppercase tracking-widest">{{ projects[lightboxIndex!].category }}</span>
              <p class="text-white font-semibold text-lg mt-1">{{ projects[lightboxIndex!].title }}</p>
              <p class="text-stone-400 text-sm mt-1">{{ lightboxIndex! + 1 }} / {{ projects.length }}</p>
            </div>
          </div>

          <!-- Next -->
          <button
            class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 text-white transition-colors"
            @click="nextImage"
            aria-label="Weiter"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const { data: fetchProjects } = await useFetch<any[]>('/api/projects')
const projects = computed(() => fetchProjects.value || [])

const lightboxIndex = ref<number | null>(null)

function openLightbox(index: number) {
  lightboxIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxIndex.value = null
  document.body.style.overflow = ''
}

function prevImage() {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value - 1 + projects.length) % projects.length
}

function nextImage() {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value + 1) % projects.length
}

onMounted(() => {
  const onKey = (e: KeyboardEvent) => {
    if (lightboxIndex.value === null) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'ArrowRight') nextImage()
  }
  window.addEventListener('keydown', onKey)
  onUnmounted(() => window.removeEventListener('keydown', onKey))
})
</script>

<style scoped>
.lb-enter-active, .lb-leave-active { transition: opacity 0.25s ease; }
.lb-enter-from, .lb-leave-to { opacity: 0; }

.lb-img-enter-active, .lb-img-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.lb-img-enter-from { opacity: 0; transform: scale(0.97); }
.lb-img-leave-to   { opacity: 0; transform: scale(1.03); }
</style>
