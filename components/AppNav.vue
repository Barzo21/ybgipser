<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="
      scrolled
        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-slate-950/50'
        : 'bg-transparent'
    "
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2.5 group">
        <div
          class="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/40 group-hover:shadow-blue-700/60 transition-shadow"
        >
          <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span class="text-white font-bold text-lg tracking-tight">
          Elektro<span class="text-blue-400">Profi</span>
        </span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"
          />
        </a>
      </div>

      <!-- CTA -->
      <a
        href="#kontakt"
        class="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-blue-700/40"
      >
        Kontakt
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)

const navLinks = [
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#warum-wir', label: 'Warum wir?' },
  { href: '#kontakt', label: 'Kontakt' },
]

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 60
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>
