<template>
  <ClientOnly>
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
        <div>
          <label class="block text-stone-400 text-xs uppercase tracking-wider mb-2">
            Authenticator-Code
            <span class="text-stone-600 normal-case tracking-normal ml-1">(Google Authenticator / Authy)</span>
          </label>
          <input
            v-model="creds.totpCode"
            type="text"
            inputmode="numeric"
            pattern="[0-9]{6}"
            maxlength="6"
            placeholder="000000"
            autocomplete="one-time-code"
            class="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 transition-colors text-center tracking-[0.4em] font-mono text-lg"
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
          <p class="text-stone-500 text-xs">Aktiv: {{ activeTab === 'messages' ? 'Anfragen' : 'Projekte' }}</p>
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
      
      <!-- Tabs -->
      <nav class="flex gap-4 mb-8 border-b border-stone-800 pb-4">
        <button 
          @click="switchTab('messages')" 
          :class="['px-5 py-2.5 rounded-xl text-sm font-semibold transition-all', activeTab === 'messages' ? 'bg-amber-500 text-stone-900 shadow-md shadow-amber-500/20' : 'text-stone-400 hover:text-white hover:bg-stone-800']"
        >
          Anfragen ({{ messages.length }})
        </button>
        <button 
          @click="switchTab('projects')" 
          :class="['px-5 py-2.5 rounded-xl text-sm font-semibold transition-all', activeTab === 'projects' ? 'bg-amber-500 text-stone-900 shadow-md shadow-amber-500/20' : 'text-stone-400 hover:text-white hover:bg-stone-800']"
        >
          Projekte / Galerie
        </button>
      </nav>

      <!-- TAB: Messages -->
      <div v-if="activeTab === 'messages'">
        <!-- Loading -->
        <div v-if="loading" class="text-center py-24">
          <div class="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
        </div>

        <!-- Empty -->
        <div v-else-if="messages.length === 0" class="text-center py-24">
          <div class="text-5xl mb-4">📭</div>
          <p class="text-stone-400 font-medium">Keine Anfragen vorhanden</p>
        </div>

        <!-- Messages Data -->
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
      </div>

      <!-- TAB: Projects -->
      <div v-if="activeTab === 'projects'">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-white text-xl font-bold">Projekte verwalten</h2>
          <button 
            @click="openProjectModal()" 
            class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 font-semibold rounded-xl text-sm hover:from-amber-400 hover:to-yellow-300 transition-all"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Neues Projekt
          </button>
        </div>

        <!-- Loading Projects -->
        <div v-if="loadingProjects" class="text-center py-24">
          <div class="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
        </div>

        <!-- Projects Grid -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="p in projects" :key="p.id" class="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden group relative">
            <img :src="p.src" class="w-full h-48 object-cover object-center" />
            <div class="p-5">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-4 h-0.5 bg-amber-400 rounded-full" />
                <span class="text-amber-400 text-xs font-semibold uppercase tracking-wider">{{ p.category }}</span>
              </div>
              <h3 class="text-white font-semibold text-sm leading-snug">{{ p.title }}</h3>
            </div>
            
            <!-- Actions overlay -->
            <div class="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
              <button 
                @click="openProjectModal(p)" 
                class="w-8 h-8 flex items-center justify-center bg-stone-800/90 hover:bg-amber-500 text-stone-300 hover:text-stone-900 backdrop-blur rounded-lg transition-colors"
                title="Bearbeiten"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button 
                @click="deleteProject(p.id)" 
                class="w-8 h-8 flex items-center justify-center bg-stone-800/90 hover:bg-red-500 text-stone-300 hover:text-white backdrop-blur rounded-lg transition-colors"
                title="Löschen"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Project Modal -->
        <div v-if="showProjectModal" class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-sm p-4">
          <div class="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <h3 class="text-white text-xl font-bold mb-6 flex items-center gap-2">
              <span class="w-1.5 h-6 bg-amber-500 rounded-full" />
              {{ editingProject ? 'Projekt bearbeiten' : 'Neues Projekt' }}
            </h3>
            
            <div class="space-y-5">
              <div>
                <label class="block text-stone-400 text-xs uppercase tracking-wider mb-2">Titel</label>
                <input 
                  v-model="projectForm.title" 
                  type="text" 
                  class="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="z.B. Innenputz Einfamilienhaus"
                />
              </div>
              <div>
                <label class="block text-stone-400 text-xs uppercase tracking-wider mb-2">Kategorie</label>
                <input 
                  v-model="projectForm.category" 
                  type="text" 
                  class="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="z.B. Verputze"
                />
              </div>
              
              <div v-if="!editingProject">
                <label class="block text-stone-400 text-xs uppercase tracking-wider mb-2">Bild hochladen</label>
                <div class="border-2 border-dashed border-stone-700 rounded-xl p-4 text-center hover:border-amber-500 transition-colors">
                  <input 
                    type="file" 
                    accept="image/*" 
                    @change="onFileChange" 
                    class="block w-full text-sm text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-500/10 file:text-amber-500 hover:file:bg-amber-500/20 transition-colors cursor-pointer"
                  />
                </div>
              </div>

              <p v-if="uploadError" class="text-red-400 text-sm mt-2">{{ uploadError }}</p>
            </div>

            <div class="flex justify-end gap-3 mt-8">
              <button 
                @click="closeProjectModal" 
                class="px-5 py-2.5 rounded-xl text-sm font-medium text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              >
                Abbrechen
              </button>
              <button 
                @click="saveProject" 
                :disabled="isUploading" 
                class="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 rounded-xl text-sm font-semibold hover:from-amber-400 hover:to-yellow-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20"
              >
                {{ isUploading ? 'Wird gespeichert...' : 'Speichern' }}
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
  </ClientOnly>
</template>

<script setup lang="ts">
definePageMeta({ layout: false, ssr: false })

interface Message {
  id: string
  vorname: string
  nachname: string
  kontakt: string
  leistung: string
  beschreibung: string
  createdAt: string
}

interface Project {
  id: string
  src: string
  title: string
  category: string
  order?: number
}

const token = ref<string | null>(null)
const loading = ref(false)
const loginError = ref('')

const messages = ref<Message[]>([])
const activeTab = ref<'messages' | 'projects'>('messages')

// Projects State
const projects = ref<Project[]>([])
const loadingProjects = ref(false)
const showProjectModal = ref(false)
const editingProject = ref<Project | null>(null)
const isUploading = ref(false)
const uploadError = ref('')
const projectForm = reactive({
  title: '',
  category: '',
  file: null as File | null
})

const creds = reactive({ username: '', password: '', totpCode: '' })

onMounted(() => {
  token.value = localStorage.getItem('admin_token')
  if (token.value) {
    fetchMessages()
    fetchProjects()
  }
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
    await fetchProjects()
  } catch (e: any) {
    loginError.value = e?.data?.message || e?.message || 'Anmeldung fehlgeschlagen'
  } finally {
    loading.value = false
  }
}

function switchTab(tab: 'messages' | 'projects') {
  activeTab.value = tab
  if (tab === 'messages') fetchMessages()
  else fetchProjects()
}

// ------ MESSAGES API ------
async function fetchMessages() {
  if (loading.value) return
  loading.value = true
  try {
    messages.value = await $fetch<Message[]>('/api/admin/messages', {
      headers: { authorization: `Bearer ${token.value}` },
    })
  } catch (e: any) {
    if (e?.status === 401 || e?.statusCode === 401) logout()
    else messages.value = []
  } finally {
    loading.value = false
  }
}

async function deleteMessage(id: string) {
  if (!confirm('Anfrage wirklich löschen?')) return
  await $fetch(`/api/admin/messages/${id}`, {
    method: 'DELETE',
    headers: { authorization: `Bearer ${token.value}` },
  })
  messages.value = messages.value.filter((m: Message) => m.id !== id)
}

// ------ PROJECTS API ------
async function fetchProjects() {
  loadingProjects.value = true
  try {
    projects.value = await $fetch<Project[]>('/api/projects')
  } catch (e: any) {
    console.error('Projects Error:', e)
  } finally {
    loadingProjects.value = false
  }
}

function onFileChange(e: any) {
  projectForm.file = e.target.files[0] || null
}

function openProjectModal(p?: Project) {
  uploadError.value = ''
  if (p) {
    editingProject.value = p
    projectForm.title = p.title
    projectForm.category = p.category
    projectForm.file = null
  } else {
    editingProject.value = null
    projectForm.title = ''
    projectForm.category = ''
    projectForm.file = null
  }
  showProjectModal.value = true
}

function closeProjectModal() {
  showProjectModal.value = false
}

async function saveProject() {
  uploadError.value = ''
  if (!projectForm.title || !projectForm.category) {
    uploadError.value = 'Bitte Titel und Kategorie eingeben.'
    return
  }
  if (!editingProject.value && !projectForm.file) {
    uploadError.value = 'Bitte ein Bild format auswählen (JPG/PNG).'
    return
  }

  isUploading.value = true
  try {
    if (editingProject.value) {
      await $fetch(`/api/admin/projects/${editingProject.value.id}`, {
        method: 'PUT',
        headers: { authorization: `Bearer ${token.value}` },
        body: { title: projectForm.title, category: projectForm.category }
      })
    } else {
      const fd = new FormData()
      fd.append('title', projectForm.title)
      fd.append('category', projectForm.category)
      fd.append('file', projectForm.file!)

      await $fetch('/api/admin/projects', {
        method: 'POST',
        headers: { authorization: `Bearer ${token.value}` },
        body: fd
      })
    }
    closeProjectModal()
    await fetchProjects()
  } catch (e: any) {
    uploadError.value = e?.data?.message || e?.message || 'Fehler beim Speichern'
  } finally {
    isUploading.value = false
  }
}

async function deleteProject(id: string) {
  if (!confirm('Projekt inklusive Bild wirklich löschen?')) return
  try {
    await $fetch(`/api/admin/projects/${id}`, {
      method: 'DELETE',
      headers: { authorization: `Bearer ${token.value}` },
    })
    await fetchProjects()
  } catch (e: any) {
    alert(e?.data?.message || e?.message || 'Fehler beim Löschen')
  }
}

function logout() {
  token.value = null
  localStorage.removeItem('admin_token')
  messages.value = []
  projects.value = []
  activeTab.value = 'messages'
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
