<template>
  <!-- Login -->
  <div v-if="!token" class="min-h-screen bg-stone-950 flex items-center justify-center px-4">
    <div class="w-full max-w-sm">
      <div class="text-center mb-8">
        <img src="/1.png" alt="Y.B. Gipser" class="h-16 w-auto mx-auto mb-5 brightness-0 invert" />
        <h1 class="text-white text-2xl font-bold">Admin Panel</h1>
        <p class="text-stone-500 text-sm mt-1">Y.B. Gipser GmbH</p>
      </div>

      <form @submit.prevent="login" class="bg-stone-900 border border-stone-800 rounded-2xl p-8 space-y-5">
        <div>
          <label class="block text-stone-400 text-xs uppercase tracking-wider mb-2">Benutzername</label>
          <input
            v-model="creds.username"
            type="text"
            autocomplete="username"
            class="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
        <div>
          <label class="block text-stone-400 text-xs uppercase tracking-wider mb-2">Passwort</label>
          <input
            v-model="creds.password"
            type="password"
            autocomplete="current-password"
            class="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <p v-if="loginError" class="text-red-400 text-sm text-center">{{ loginError }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-yellow-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Laden...' : 'Anmelden' }}
        </button>
      </form>
    </div>
  </div>

  <!-- Dashboard -->
  <div v-else class="min-h-screen bg-stone-950">
    <!-- Topbar -->
    <header class="bg-stone-900 border-b border-stone-800 px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <img src="/1.png" alt="Y.B. Gipser" class="h-10 w-auto brightness-0 invert" />
        <div>
          <h1 class="text-white font-semibold text-sm">Admin Panel</h1>
          <p class="text-stone-500 text-xs">{{ messages.length }} Anfrage{{ messages.length !== 1 ? 'n' : '' }}</p>
        </div>
      </div>
      <button
        @click="logout"
        class="flex items-center gap-2 px-4 py-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 text-sm transition-all"
      >
        Abmelden
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </header>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-6 py-10">
      <!-- Loading -->
      <div v-if="loading" class="text-center py-24">
        <div class="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
      </div>

      <!-- Empty -->
      <div v-else-if="messages.length === 0" class="text-center py-24">
        <div class="text-5xl mb-4">📭</div>
        <p class="text-stone-400 font-medium">Keine Anfragen vorhanden</p>
        <p class="text-stone-600 text-sm mt-1">Neue Anfragen erscheinen hier automatisch</p>
      </div>

      <!-- Messages -->
      <div v-else class="space-y-3">
        <div
          v-for="msg in messages"
          :key="msg.id"
          class="bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-stone-700 transition-colors group"
        >
          <div class="flex items-start gap-4">
            <!-- Avatar -->
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold text-sm">
              {{ initials(msg.vorname, msg.nachname) }}
            </div>

            <!-- Body -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span class="text-white font-semibold">{{ msg.vorname }} {{ msg.nachname }}</span>
                <span v-if="msg.leistung" class="px-2 py-0.5 bg-amber-500/15 text-amber-400 text-xs rounded-full font-medium border border-amber-500/20">
                  {{ msg.leistung }}
                </span>
              </div>
              <p v-if="msg.kontakt" class="text-stone-400 text-sm mb-2">{{ msg.kontakt }}</p>
              <p v-if="msg.beschreibung" class="text-stone-300 text-sm leading-relaxed border-l-2 border-stone-700 pl-3">
                {{ msg.beschreibung }}
              </p>
            </div>

            <!-- Right -->
            <div class="flex-shrink-0 flex flex-col items-end gap-3">
              <span class="text-stone-600 text-xs whitespace-nowrap">{{ formatDate(msg.createdAt) }}</span>
              <button
                @click="deleteMessage(msg.id)"
                class="w-8 h-8 flex items-center justify-center rounded-lg text-stone-700 hover:text-red-400 hover:bg-red-400/10 transition-all opacity-0 group-hover:opacity-100"
                title="Löschen"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

interface Message {
  id: string
  vorname: string
  nachname: string
  kontakt: string
  leistung: string
  beschreibung: string
  createdAt: string
}

const token = ref<string | null>(null)
const loading = ref(false)
const loginError = ref('')
const messages = ref<Message[]>([])

const creds = reactive({ username: '', password: '' })

onMounted(() => {
  token.value = localStorage.getItem('admin_token')
  if (token.value) fetchMessages()
})

async function login() {
  loading.value = true
  loginError.value = ''
  try {
    const res = await $fetch<{ token: string }>('/api/auth/login', {
      method: 'POST',
      body: creds,
    })
    token.value = res.token
    localStorage.setItem('admin_token', res.token)
    await fetchMessages()
  } catch {
    loginError.value = 'Benutzername oder Passwort falsch'
  } finally {
    loading.value = false
  }
}

async function fetchMessages() {
  loading.value = true
  try {
    messages.value = await $fetch<Message[]>('/api/admin/messages', {
      headers: { authorization: `Bearer ${token.value}` },
    })
  } catch {
    logout()
  } finally {
    loading.value = false
  }
}

async function deleteMessage(id: string) {
  await $fetch(`/api/admin/messages/${id}`, {
    method: 'DELETE',
    headers: { authorization: `Bearer ${token.value}` },
  })
  messages.value = messages.value.filter((m) => m.id !== id)
}

function logout() {
  token.value = null
  localStorage.removeItem('admin_token')
  messages.value = []
}

function initials(v: string, n: string) {
  return [(v || '')[0], (n || '')[0]].filter(Boolean).join('').toUpperCase() || '?'
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('de-CH', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}
</script>
