<template>
  <div>
    <AppNav />
    <main class="bg-white pt-20">
      <!-- Hero Section -->
      <section class="bg-stone-50 py-16 border-b border-stone-200">
        <div class="max-w-4xl mx-auto px-6">
          <h1 class="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Impressum</h1>
          <p class="text-stone-600 text-lg">Rechtliche Angaben – Y.B. Gipser GmbH</p>
        </div>
      </section>

      <!-- Content -->
      <section class="max-w-4xl mx-auto px-6 py-16">
        <div class="prose prose-stone max-w-none space-y-8">
          <!-- Firmeninformation -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Firmeninformation</h2>
            <div class="bg-stone-50 p-8 rounded-xl border border-stone-200 space-y-4">
              <div>
                <p class="text-stone-500 text-sm uppercase tracking-wider font-semibold mb-1">Unternehmensname</p>
                <p class="text-stone-900 text-lg font-semibold">Y.B. Gipser GmbH</p>
              </div>
              <div>
                <p class="text-stone-500 text-sm uppercase tracking-wider font-semibold mb-1">Geschäftsadresse</p>
                <p class="text-stone-900">4310 Rheinfelden</p>
                <p class="text-stone-900">Aargau, Schweiz</p>
              </div>
              <div>
                <p class="text-stone-500 text-sm uppercase tracking-wider font-semibold mb-1">Telefon</p>
                <p class="text-stone-900">079 335 78 75</p>
                <p class="text-stone-900">078 950 92 55</p>
              </div>
              <div>
                <p class="text-stone-500 text-sm uppercase tracking-wider font-semibold mb-1">E-Mail</p>
                <p class="text-stone-900">info@ybgipser.ch</p>
              </div>
              <div>
                <p class="text-stone-500 text-sm uppercase tracking-wider font-semibold mb-1">Geschäftstätigkeit</p>
                <p class="text-stone-900">Trockenbau, Innenputz, Außenputz, Fassadengestaltung, Renovierung und Sanierung</p>
              </div>
            </div>
          </div>

          <!-- Verantwortlichkeit -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Verantwortlich für den Inhalt</h2>
            <p class="text-stone-700 mb-3">
              Verantwortlich für redaktionelle und technische Inhalte dieser Website ist:
            </p>
            <div class="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <p class="text-stone-900 font-semibold">Y.B. Gipser GmbH</p>
              <p class="text-stone-700 text-sm mt-2">4310 Rheinfelden, Schweiz</p>
              <p class="text-stone-700 text-sm">E-Mail: info@ybgipser.ch</p>
            </div>
          </div>

          <!-- Website-Betreiber -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Website-Betreiber und Design</h2>
            <p class="text-stone-700">
              Diese Website wurde mit modernen Webstandards erstellt und ist für alle Geräte optimiert.
            </p>
          </div>

          <!-- Haftungsausschluss -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Haftungsausschluss</h2>
            <h3 class="text-xl font-semibold text-stone-800 mb-3 mt-4">Allgemeiner Haftungsausschluss</h3>
            <p class="text-stone-700 mb-3">
              Y.B. Gipser GmbH bemüht sich, die Informationen auf dieser Website korrekt, vollständig und aktuell 
              zu halten. Wir übernehmen jedoch keine Haftung für:
            </p>
            <ul class="list-disc list-inside text-stone-700 space-y-2 mb-4">
              <li>Fehler oder Auslassungen in den Inhalten</li>
              <li>Unterbrechungen oder Fehler bei der Website-Verfügbarkeit</li>
              <li>Technische Probleme oder Sicherheitslücken</li>
              <li>Verluste durch Nutzung der Website</li>
            </ul>

            <h3 class="text-xl font-semibold text-stone-800 mb-3 mt-4">Externe Links</h3>
            <p class="text-stone-700 mb-3">
              Diese Website kann Links zu externen Websites enthalten. Wir sind nicht verantwortlich für:
            </p>
            <ul class="list-disc list-inside text-stone-700 space-y-2">
              <li>Inhalte von Fremdseiten</li>
              <li>Verfügbarkeit von externen Websites</li>
              <li>Datenschutz auf verlinkten Seiten</li>
            </ul>
          </div>

          <!-- Urheberrecht -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Urheberrecht und Nutzungsrechte</h2>
            <p class="text-stone-700 mb-3">
              © {{ currentYear }} Y.B. Gipser GmbH. Alle Rechte vorbehalten.
            </p>
            <p class="text-stone-700 mb-3">
              Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Videos, etc.) sind geschützt durch:
            </p>
            <ul class="list-disc list-inside text-stone-700 space-y-2 mb-4">
              <li>Schweizer Urheberrecht (URG)</li>
              <li>Internationale Urheberrechtsabkommen</li>
            </ul>
            <p class="text-stone-700">
              Eine Vervielfältigung, Verarbeitung, Verbreitung oder öffentliche Zugänglichmachung ohne ausdrückliche 
              Genehmigung ist untersagt.
            </p>
          </div>

          <!-- Markenrechte -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Markenrechte</h2>
            <p class="text-stone-700">
              Das Firmenlogo „Y.B. Gipser GmbH" und alle auf dieser Website verwendeten Marken und Logos sind 
              Eigentum von Y.B. Gipser GmbH oder deren Lizenzgebern. Eine Nutzung ohne Genehmigung ist nicht gestattet.
            </p>
          </div>

          <!-- Datenschutz -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Datenschutz und Cookies</h2>
            <p class="text-stone-700 mb-3">
              Bitte beachten Sie unsere
              <NuxtLink to="/datenschutz" class="text-amber-600 hover:text-amber-700 font-semibold">
                Datenschutzerklärung
              </NuxtLink>
              für detaillierte Informationen zur Datenverarbeitung und zum Einsatz von Cookies.
            </p>
          </div>

          <!-- Geschäftsbedingungen -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Geschäftsbedingungen</h2>
            <p class="text-stone-700 mb-3">
              Alle Geschäfte unterliegen unseren
              <NuxtLink to="/agb" class="text-amber-600 hover:text-amber-700 font-semibold">
                Allgemeinen Geschäftsbedingungen (AGB)
              </NuxtLink>.
            </p>
          </div>

          <!-- Salvatorische Klausel -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Salvatorische Klausel</h2>
            <p class="text-stone-700">
              Sollten einzelne Teile dieses Impressums unwirksam oder nicht durchsetzbar sein, bleibt die 
              Gültigkeit des restlichen Inhalts unberührt.
            </p>
          </div>

          <!-- Anwendbares Recht -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Anwendbares Recht</h2>
            <p class="text-stone-700 mb-3">
              Dieses Impressum und die Nutzung dieser Website unterliegen Schweizer Recht.
            </p>
            <p class="text-stone-700">
              <strong>Gerichtsstand:</strong> Rheinfelden, Aargau, Schweiz
            </p>
          </div>

          <!-- Kontakt -->
          <div>
            <h2 class="text-2xl font-bold text-stone-900 mb-4">Fragen oder Anliegen?</h2>
            <p class="text-stone-700 mb-4">
              Bei Fragen zum Impressum, zum Urheberrecht oder zu anderen rechtlichen Angelegenheiten, 
              kontaktieren Sie uns bitte:
            </p>
            <div class="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <p class="text-stone-900 font-semibold mb-2">Y.B. Gipser GmbH</p>
              <p class="text-stone-700 text-sm">E-Mail: info@ybgipser.ch</p>
              <p class="text-stone-700 text-sm">Telefon: 079 335 78 75</p>
            </div>
            <p class="text-stone-600 text-sm mt-6">
              <strong>Letzte Aktualisierung:</strong> April 2026
            </p>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

useSeoMeta({
  title: 'Impressum – Y.B. Gipser GmbH',
  description: 'Rechtliche Angaben und Impressum von Y.B. Gipser GmbH - Trockenbau und Verputz',
})
</script>
