<template>
  <div>
    <AppNav />
    <main class="bg-white pt-20">
      <!-- Hero Section -->
      <section class="bg-stone-50 py-16 border-b border-stone-200">
        <div class="max-w-4xl mx-auto px-6">
          <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Ihre Datenschutzrechte</h1>
          <p class="text-stone-600 text-lg">Exportieren oder löschen Sie Ihre Daten (nFDPA)</p>
        </div>
      </section>

      <!-- Content -->
      <section class="max-w-4xl mx-auto px-6 py-16">
        <div class="space-y-12">
          <!-- Introduction -->
          <div class="bg-amber-50 p-8 rounded-2xl border border-amber-200">
            <h2 class="text-2xl font-bold text-amber-900 mb-4">Ihre Rechte gemäß nFDPA</h2>
            <p class="text-amber-800 mb-3">
              Nach dem Bundesgesetz über den Datenschutz (nFDPA) haben Sie das Recht:
            </p>
            <ul class="list-disc list-inside text-amber-800 space-y-2">
              <li><strong>Ihre Daten zu exportieren</strong> - Erhalten Sie eine Kopie aller Ihre Daten in strukturierter Form</li>
              <li><strong>Ihre Daten zu löschen</strong> - Fordern Sie die Löschung Ihrer persönlichen Daten an</li>
              <li><strong>Auskunft zu erhalten</strong> - Erfahren Sie, welche Daten wir über Sie speichern</li>
            </ul>
          </div>

          <!-- Export Section -->
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Export -->
            <div class="border border-stone-200 rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <span class="text-3xl">📤</span> Daten exportieren
              </h3>
              <p class="text-stone-600 mb-6">
                Erhalten Sie alle Ihre persönlichen Daten in einem JSON-Format, das Sie herunterladen können.
              </p>

              <form @submit.prevent="exportData" class="space-y-4">
                <div>
                  <label class="block text-stone-600 font-semibold mb-2">
                    Ihre E-Mail-Adresse oder Telefonnummer
                  </label>
                  <input
                    v-model="exportForm.contact"
                    type="text"
                    placeholder="email@beispiel.ch oder +41 79..."
                    class="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300"
                  />
                  <p class="text-stone-500 text-sm mt-2">
                    Diese Kontaktinformation wird verwendet, um Ihre Datensätze zu identifizieren.
                  </p>
                </div>

                <div v-if="exportMessage" :class="['p-4 rounded-xl text-sm', exportError ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200']">
                  {{ exportMessage }}
                </div>

                <button
                  type="submit"
                  :disabled="exportLoading"
                  class="w-full py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-white font-semibold rounded-xl transition-colors"
                >
                  {{ exportLoading ? 'Wird geladen...' : 'Daten exportieren' }}
                </button>
              </form>
            </div>

            <!-- Delete -->
            <div class="border border-red-200 rounded-2xl p-8 bg-red-50">
              <h3 class="text-2xl font-bold text-red-900 mb-4 flex items-center gap-3">
                <span class="text-3xl">🗑️</span> Daten löschen
              </h3>
              <p class="text-red-800 mb-6">
                Fordern Sie die dauerhafte Löschung aller Ihrer persönlichen Daten an. Diese Aktion kann nicht rückgängig gemacht werden.
              </p>

              <form @submit.prevent="deleteData" class="space-y-4">
                <div>
                  <label class="block text-red-900 font-semibold mb-2">
                    Ihre E-Mail-Adresse oder Telefonnummer
                  </label>
                  <input
                    v-model="deleteForm.contact"
                    type="text"
                    placeholder="email@beispiel.ch oder +41 79..."
                    class="w-full px-4 py-3 border border-red-300 rounded-xl focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-300"
                  />
                </div>

                <div>
                  <label class="block text-red-900 font-semibold mb-2">
                    Grund für die Löschung (optional)
                  </label>
                  <textarea
                    v-model="deleteForm.reason"
                    rows="3"
                    placeholder="Z.B. 'Konto nicht mehr benötigt' oder 'Keine weiteren Dienstleistungen erforderlich'"
                    class="w-full px-4 py-3 border border-red-300 rounded-xl focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-300 resize-none"
                  />
                </div>

                <div class="flex items-start gap-3">
                  <input
                    id="deleteConfirm"
                    v-model="deleteForm.confirmed"
                    type="checkbox"
                    class="mt-1 rounded border-red-300"
                  />
                  <label for="deleteConfirm" class="text-red-900 font-semibold text-sm">
                    Ich bestätige, dass ich alle meine Daten löschen möchte. Diese Aktion kann nicht rückgängig gemacht werden.
                  </label>
                </div>

                <div v-if="deleteMessage" :class="['p-4 rounded-xl text-sm', deleteError ? 'bg-red-100 text-red-800 border border-red-300' : 'bg-green-50 text-green-700 border border-green-200']">
                  {{ deleteMessage }}
                </div>

                <button
                  type="submit"
                  :disabled="deleteLoading || !deleteForm.confirmed"
                  class="w-full py-3 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-xl transition-colors"
                >
                  {{ deleteLoading ? 'Wird gelöscht...' : 'Daten löschen' }}
                </button>
              </form>
            </div>
          </div>

          <!-- Information -->
          <div class="space-y-6">
            <h2 class="text-2xl font-bold text-stone-900">Weitere Informationen</h2>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h4 class="font-bold text-stone-900 mb-3">⏱️ Datenaufbewahrung</h4>
                <ul class="text-stone-700 text-sm space-y-2">
                  <li><strong>Kontaktanfragen:</strong> 24 Monate nach letzter Aktivität</li>
                  <li><strong>Abgeschlossene Projekte:</strong> 7 Jahre (Archivierung & Haftung)</li>
                  <li><strong>Abgelehnte Angebote:</strong> 12 Monate</li>
                </ul>
              </div>

              <div class="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h4 class="font-bold text-stone-900 mb-3">🔒 Datensicherheit</h4>
                <p class="text-stone-700 text-sm mb-2">
                  Ihre Daten werden geschützt durch:
                </p>
                <ul class="text-stone-700 text-sm space-y-1">
                  <li>• HTTPS-Verschlüsselung</li>
                  <li>• Sichere Schweizer Server</li>
                  <li>• Zugriffskontrolle & 2FA</li>
                </ul>
              </div>

              <div class="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h4 class="font-bold text-stone-900 mb-3">📞 Direkter Kontakt</h4>
                <p class="text-stone-700 text-sm mb-2">
                  Sie können Ihre Anfrage auch direkt an uns stellen:
                </p>
                <p class="text-stone-700 text-sm font-semibold">
                  info@ybgipser.ch<br />
                  079 335 78 75
                </p>
              </div>

              <div class="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h4 class="font-bold text-stone-900 mb-3">📋 Dokumentation</h4>
                <p class="text-stone-700 text-sm mb-3">
                  Lesen Sie unsere vollständige
                  <NuxtLink to="/datenschutz" class="text-amber-600 hover:text-amber-700 font-semibold underline">
                    Datenschutzerklärung
                  </NuxtLink>
                  für weitere Details.
                </p>
              </div>
            </div>
          </div>

          <!-- Legal Notice -->
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h4 class="font-bold text-blue-900 mb-3">⚖️ Rechtliche Informationen</h4>
            <p class="text-blue-800 text-sm leading-relaxed">
              Diese Funktionen entsprechen dem Bundesgesetz über den Datenschutz (nFDPA) und gewährleisten Ihre Rechte als Datensubjekt.
              Alle Anfragen werden bearbeitet und innerhalb von 30 Tagen beantwortet, wie gesetzlich vorgeschrieben.
            </p>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const exportForm = reactive({
  contact: '',
})

const deleteForm = reactive({
  contact: '',
  reason: '',
  confirmed: false,
})

const exportMessage = ref('')
const exportError = ref(false)
const exportLoading = ref(false)

const deleteMessage = ref('')
const deleteError = ref(false)
const deleteLoading = ref(false)

async function exportData() {
  if (!exportForm.contact.trim()) {
    exportMessage.value = 'Bitte geben Sie Ihre E-Mail-Adresse oder Telefonnummer ein'
    exportError.value = true
    return
  }

  exportLoading.value = true
  exportError.value = false
  exportMessage.value = ''

  try {
    const response = await $fetch('/api/data/export', {
      query: {
        email: exportForm.contact.includes('@') ? exportForm.contact : undefined,
        phone: !exportForm.contact.includes('@') ? exportForm.contact : undefined,
      },
    })

    // Download JSON file
    const dataStr = JSON.stringify(response, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `personliche-daten-${Date.now()}.json`
    link.click()
    URL.revokeObjectURL(url)

    exportMessage.value = `✓ Ihre Daten wurden erfolgreich exportiert! ${response.data?.length || 0} Datensatz(e) wurden gefunden.`
    exportError.value = false
  } catch (error: any) {
    exportMessage.value = error.data?.message || 'Fehler beim Exportieren. Bitte versuchen Sie es später erneut.'
    exportError.value = true
  } finally {
    exportLoading.value = false
  }
}

async function deleteData() {
  if (!deleteForm.contact.trim()) {
    deleteMessage.value = 'Bitte geben Sie Ihre E-Mail-Adresse oder Telefonnummer ein'
    deleteError.value = true
    return
  }

  if (!deleteForm.confirmed) {
    deleteMessage.value = 'Bitte bestätigen Sie die Löschung'
    deleteError.value = true
    return
  }

  deleteLoading.value = true
  deleteError.value = false
  deleteMessage.value = ''

  try {
    const response = await $fetch('/api/data/delete', {
      method: 'DELETE',
      body: {
        email: deleteForm.contact.includes('@') ? deleteForm.contact : undefined,
        phone: !deleteForm.contact.includes('@') ? deleteForm.contact : undefined,
        reason: deleteForm.reason || 'Nutzer-Anfrage zur Datenlöschung',
      },
    })

    if (response.deletedCount > 0) {
      deleteMessage.value = `✓ ${response.message} Insgesamt ${response.deletedCount} Datensatz(e) gelöscht.`
      deleteError.value = false
      deleteForm.contact = ''
      deleteForm.reason = ''
      deleteForm.confirmed = false
    } else {
      deleteMessage.value = response.message
      deleteError.value = true
    }
  } catch (error: any) {
    deleteMessage.value = error.data?.message || 'Fehler beim Löschen. Bitte versuchen Sie es später erneut.'
    deleteError.value = true
  } finally {
    deleteLoading.value = false
  }
}

useSeoMeta({
  title: 'Datenschutzrechte',
  description: 'Ihre Datenschutzrechte gemäß nFDPA – Daten exportieren oder löschen.',
  robots: 'noindex, nofollow',
})
</script>
