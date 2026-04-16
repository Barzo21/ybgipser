<template>
  <div class="min-h-screen bg-stone-950 flex items-center justify-center px-4">
    <div class="w-full max-w-sm">
      <div class="text-center mb-8">
        <img src="/1.png" alt="Y.B. Gipser" class="h-14 w-auto mx-auto mb-5 brightness-0 invert" />
        <h1 class="text-white text-xl font-bold">2FA Einrichtung</h1>
        <p class="text-stone-500 text-sm mt-1">Google Authenticator / Authy</p>
      </div>

      <!-- Step 1: credentials -->
      <div v-if="!qrData" class="bg-stone-900 border border-stone-800 rounded-2xl p-7 space-y-5">
        <p class="text-stone-400 text-sm">Bitte melden Sie sich an, um den QR-Code zu erhalten.</p>

        <div>
          <label class="block text-stone-400 text-xs uppercase tracking-wider mb-2">Benutzername</label>
          <input v-model="creds.username" type="text"
            class="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 transition-colors" />
        </div>
        <div>
          <label class="block text-stone-400 text-xs uppercase tracking-wider mb-2">Passwort</label>
          <input v-model="creds.password" type="password"
            class="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 transition-colors" />
        </div>

        <p v-if="error" class="text-red-400 text-sm text-center">{{ error }}</p>

        <button @click="loadQR" :disabled="loading"
          class="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-yellow-300 transition-all disabled:opacity-50">
          {{ loading ? 'Laden...' : 'QR-Code anzeigen' }}
        </button>
      </div>

      <!-- Step 2: QR code -->
      <div v-else class="bg-stone-900 border border-stone-800 rounded-2xl p-7 space-y-5 text-center">
        <p class="text-stone-300 text-sm">
          Scannen Sie diesen QR-Code mit
          <span class="text-amber-400 font-semibold">Google Authenticator</span> oder
          <span class="text-amber-400 font-semibold">Authy</span>.
        </p>

        <div class="flex justify-center">
          <div class="bg-white p-3 rounded-2xl inline-block">
            <img :src="qrData.qrDataUrl" alt="QR Code" class="w-48 h-48" />
          </div>
        </div>

        <div class="bg-stone-800 rounded-xl p-4">
          <p class="text-stone-500 text-xs uppercase tracking-wider mb-2">Manuell eingeben</p>
          <p class="text-amber-400 font-mono text-sm break-all select-all">{{ manualCode }}</p>
        </div>

        <p class="text-stone-500 text-xs">
          Nach dem Scan erscheint ein 6-stelliger Code in der App.<br />
          Verwenden Sie diesen Code beim nächsten Login.
        </p>

        <a href="/admin"
          class="block w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-yellow-300 transition-all text-sm">
          Zum Login →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const creds = reactive({ username: '', password: '' })
const qrData = ref<{ qrDataUrl: string; uri: string } | null>(null)
const loading = ref(false)
const error = ref('')

const manualCode = computed(() => {
  if (!qrData.value) return ''
  const match = qrData.value.uri.match(/secret=([A-Z2-7]+)/i)
  return match ? match[1] : ''
})

async function loadQR() {
  loading.value = true
  error.value = ''
  try {
    const params = new URLSearchParams({
      username: creds.username,
      password: creds.password,
    })
    qrData.value = await $fetch<{ qrDataUrl: string; uri: string }>(
      `/api/admin/qr?${params}`
    )
  } catch {
    error.value = 'Benutzername oder Passwort falsch'
  } finally {
    loading.value = false
  }
}
</script>
