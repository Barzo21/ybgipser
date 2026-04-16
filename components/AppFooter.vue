<template>
  <footer class="bg-stone-900 border-t border-stone-800 relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

    <!-- Brush stroke decoration -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      <svg class="w-full h-full" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMid slice">
        <path class="footer-stroke-1"
          d="M-80,80 C300,40 600,120 900,80 S1200,40 1520,80"
          fill="none" stroke="#F59E0B" stroke-width="30" stroke-linecap="round" stroke-dasharray="500 400" />
        <path class="footer-stroke-2"
          d="M-80,180 C200,140 500,220 800,180 S1100,140 1520,180"
          fill="none" stroke="#EAB308" stroke-width="20" stroke-linecap="round" stroke-dasharray="400 500" />
      </svg>
    </div>

    <div class="relative max-w-6xl mx-auto px-6 py-14">
      <div class="grid md:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <a href="#" class="inline-block mb-5 group">
            <img
              :src="logoSrc"
              alt="Y.B. Gipser GmbH"
              class="h-16 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-70 transition-opacity"
            />
          </a>
          <p class="text-stone-400 text-sm leading-relaxed max-w-xs mb-6">
            Ihr Meisterbetrieb für professionellen Trockenbau, Verputze und
            Fassadengestaltung – Qualität, die man sieht.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Leistungen</h4>
          <ul class="space-y-2.5">
            <li v-for="link in serviceLinks" :key="link">
              <a href="#leistungen" class="text-stone-500 hover:text-amber-400 transition-colors text-sm">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-2.5 text-sm text-stone-500">
              <span class="mt-0.5 text-base leading-none">📞</span>
              <span>079 335 78 75</span>
            </li>
            <li class="flex items-start gap-2.5 text-sm text-stone-500">
              <span class="mt-0.5 text-base leading-none">📞</span>
              <span>078 950 92 55</span>
            </li>
            <li class="flex items-start gap-2.5 text-sm text-stone-500">
              <span class="mt-0.5 text-base leading-none">📧</span>
              <span>info@ybgipser.ch</span>
            </li>
            <li class="flex items-start gap-2.5 text-sm text-stone-500">
              <span class="mt-0.5 text-base leading-none">📍</span>
              <span>4310 Rheinfelden</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <span class="text-stone-600 text-sm">
          © {{ currentYear }} Y.B. Gipser GmbH. Alle Rechte vorbehalten.
        </span>
        <div class="flex items-center gap-6">
          <a v-for="legal in legalLinks" :key="legal" href="#"
            class="text-stone-600 hover:text-stone-400 transition-colors text-sm">
            {{ legal }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
const logoSrc = '/1.png'
const serviceLinks = ['Trockenbau', 'Innenputz / Verputze', 'Fassaden', 'Renovierung', 'Kostenlose Beratung']
const legalLinks = ['Impressum', 'Datenschutz', 'AGB']
</script>

<style scoped>
@keyframes footerStroke {
  from { stroke-dashoffset: 900; }
  to   { stroke-dashoffset: 0; }
}
.footer-stroke-1 { animation: footerStroke 6s linear infinite; }
.footer-stroke-2 { animation: footerStroke 9s linear infinite; animation-delay: -3s; }
</style>
