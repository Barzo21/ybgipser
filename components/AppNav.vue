<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="
      scrolled
        ? 'bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-sm shadow-stone-100'
        : 'bg-white/85 backdrop-blur-md'
    "
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <img
          :src="'/ybgicserlogo.jpeg'"
          alt="Y.B. Gipser GmbH Logo"
          class="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
        />
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-stone-500 hover:text-stone-900 text-sm font-medium transition-colors duration-200 relative group"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-full"
          />
        </a>
      </div>

      <!-- Desktop CTA + Mobile hamburger -->
      <div class="flex items-center gap-3">
        <a
          href="#kontakt"
          class="hidden md:block px-5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-sm font-semibold rounded-xl hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 shadow-md shadow-amber-200 hover:shadow-amber-300"
        >
          Angebot anfragen
        </a>

        <!-- Hamburger -->
        <button
          class="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-stone-100 transition-colors"
          :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'"
          @click="menuOpen = !menuOpen"
        >
          <span
            class="block w-5 h-0.5 bg-stone-700 rounded-full transition-all duration-300 origin-center"
            :class="menuOpen ? 'rotate-45 translate-y-[7px]' : ''"
          />
          <span
            class="block w-5 h-0.5 bg-stone-700 rounded-full transition-all duration-300"
            :class="menuOpen ? 'opacity-0 scale-x-0' : ''"
          />
          <span
            class="block w-5 h-0.5 bg-stone-700 rounded-full transition-all duration-300 origin-center"
            :class="menuOpen ? '-rotate-45 -translate-y-[7px]' : ''"
          />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="md:hidden bg-white border-t border-stone-100 shadow-lg">
        <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-4 py-3 text-stone-700 font-medium text-sm rounded-xl hover:bg-amber-50 hover:text-amber-700 transition-colors"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
          <div class="mt-2 pt-3 border-t border-stone-100">
            <a
              href="#kontakt"
              class="block w-full text-center px-5 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-sm font-semibold rounded-xl hover:from-amber-400 hover:to-yellow-300 transition-all duration-300 shadow-md shadow-amber-200"
              @click="menuOpen = false"
            >
              Kostenloses Angebot anfordern
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#warum-wir', label: 'Warum wir?' },
  { href: '#kontakt', label: 'Kontakt' },
]

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.mobile-menu-enter-active { transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
.mobile-menu-leave-active { transition: all 0.2s ease-in; }
.mobile-menu-enter-from,
.mobile-menu-leave-to    { opacity: 0; transform: translateY(-10px); }
</style>
