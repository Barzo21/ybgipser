<template>
  <footer class="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
    <!-- Wire decoration -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
      <svg class="w-full h-full" viewBox="0 0 1440 300" preserveAspectRatio="xMidYMid slice">
        <path
          class="footer-wire"
          d="M-80,80 C300,40 600,120 900,80 S1200,40 1520,80"
          fill="none"
          stroke="#3b82f6"
          stroke-width="1"
          stroke-dasharray="16 10"
        />
        <path
          class="footer-wire-2"
          d="M-80,160 C200,120 500,200 800,160 S1100,120 1520,160"
          fill="none"
          stroke="#06b6d4"
          stroke-width="0.8"
          stroke-dasharray="12 14"
        />
      </svg>
    </div>

    <div class="relative max-w-6xl mx-auto px-6 py-14">
      <!-- Top row -->
      <div class="grid md:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <a href="#" class="inline-flex items-center gap-2.5 mb-5">
            <div class="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40">
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-white font-bold text-xl tracking-tight">
              Elektro<span class="text-blue-400">Profi</span>
            </span>
          </a>
          <p class="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
            Ihr zertifizierter Elektrofachbetrieb für moderne Lösungen, höchste Qualität
            und persönlichen Service in der Region.
          </p>
          <div class="flex gap-2.5">
            <a
              v-for="social in socials"
              :key="social.label"
              href="#"
              :aria-label="social.label"
              class="w-9 h-9 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200"
            >
              <span class="text-xs font-bold">{{ social.abbr }}</span>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Leistungen</h4>
          <ul class="space-y-2.5">
            <li v-for="link in serviceLinks" :key="link">
              <a href="#leistungen" class="text-slate-500 hover:text-blue-400 transition-colors text-sm">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact quick -->
        <div>
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-2.5 text-sm text-slate-500">
              <span class="mt-0.5 text-base leading-none">📞</span>
              <span>+49 (0) 123 456 789</span>
            </li>
            <li class="flex items-start gap-2.5 text-sm text-slate-500">
              <span class="mt-0.5 text-base leading-none">📧</span>
              <span>info@elektro-profi.de</span>
            </li>
            <li class="flex items-start gap-2.5 text-sm text-slate-500">
              <span class="mt-0.5 text-base leading-none">📍</span>
              <span>Musterstraße 42<br />12345 Musterstadt</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <span class="text-slate-600 text-sm">
          © {{ currentYear }} ElektroProfi. Alle Rechte vorbehalten.
        </span>
        <div class="flex items-center gap-6">
          <a
            v-for="legal in legalLinks"
            :key="legal"
            href="#"
            class="text-slate-600 hover:text-slate-400 transition-colors text-sm"
          >
            {{ legal }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
  { label: 'LinkedIn', abbr: 'in' },
  { label: 'Facebook', abbr: 'f' },
  { label: 'Instagram', abbr: 'ig' },
]

const serviceLinks = ['Elektroinstallation', 'Wartung & Prüfung', 'Smart Home', 'Reparaturen', '24h Notdienst']
const legalLinks = ['Impressum', 'Datenschutz', 'AGB']
</script>

<style scoped>
@keyframes footerFlow {
  from { stroke-dashoffset: 200; }
  to   { stroke-dashoffset: 0; }
}
.footer-wire   { animation: footerFlow 5s linear infinite; }
.footer-wire-2 { animation: footerFlow 7s linear infinite; animation-delay: -2.5s; }
</style>
