<template>
  <div>
    <AppNav />
    <main>
      <HeroSection />
      <GallerySection />
      <ServicesSection />
      <FeaturesSection />
      <ContactSection />
      <AppFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
const SITE_URL = 'https://www.ybgipser.ch'

// ── Meta tags ──────────────────────────────────────────────
useSeoMeta({
  title: 'Gipser Basel & Rheinfelden – Trockenbau, Verputze & Fassaden',
  description: 'Y.B. Gipser GmbH – Meisterbetrieb für Trockenbau, Innenputz, Außenputz und Fassadengestaltung in Basel und Rheinfelden. Kostenlose Offerte in 48h. ☎ 079 335 78 75',
  ogTitle: 'Y.B. Gipser GmbH – Trockenbau & Verputze Basel',
  ogDescription: 'Meisterbetrieb für Trockenbau, Verputze und Fassaden in der Region Basel. Kostenlose Offerte in 48 Stunden.',
  ogUrl: SITE_URL,
  ogImage: `${SITE_URL}/og-image.jpg`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Y.B. Gipser GmbH – Trockenbau & Verputze Basel',
  twitterDescription: 'Meisterbetrieb für Trockenbau, Verputze und Fassaden in der Region Basel.',
  twitterImage: `${SITE_URL}/og-image.jpg`,
})

useHead({
  link: [{ rel: 'canonical', href: SITE_URL }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
            '@id': `${SITE_URL}/#business`,
            name: 'Y.B. Gipser GmbH',
            description: 'Meisterbetrieb für Trockenbau, Innenputz, Außenputz und Fassadengestaltung in der Region Basel.',
            url: SITE_URL,
            telephone: '+41793357875',
            email: 'info@ybgipser.ch',
            image: `${SITE_URL}/og-image.jpg`,
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/1.png` },
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Rheinfelden',
              postalCode: '4310',
              addressRegion: 'Aargau',
              addressCountry: 'CH',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 47.5556,
              longitude: 7.7955,
            },
            areaServed: [
              { '@type': 'City', name: 'Basel' },
              { '@type': 'City', name: 'Rheinfelden' },
              { '@type': 'City', name: 'Möhlin' },
              { '@type': 'City', name: 'Kaiseraugst' },
              { '@type': 'City', name: 'Frick' },
              { '@type': 'AdministrativeArea', name: 'Basel-Stadt' },
              { '@type': 'AdministrativeArea', name: 'Basel-Landschaft' },
              { '@type': 'AdministrativeArea', name: 'Aargau' },
            ],
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '18:00',
              },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Gipserarbeiten Basel',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Trockenbau Basel', description: 'Wände, Decken und Ständerwerk für Wohn- und Gewerberäume in Basel und Rheinfelden.' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Verputze & Innenputz Basel', description: 'Glattputz, Maschinenputz und dekorative Putze für Innenräume.' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Fassaden & Außenputz Basel', description: 'Außenputz, WDVS und Fassadengestaltung in der Nordwestschweiz.' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Renovierung & Sanierung', description: 'Altbausanierung, Rissausbesserung und Fassadenerneuerung.' },
                },
              ],
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+41793357875',
              contactType: 'customer service',
              availableLanguage: 'German',
            },
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'Y.B. Gipser GmbH',
            inLanguage: 'de-CH',
            publisher: { '@id': `${SITE_URL}/#business` },
          },
          {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/#webpage`,
            url: SITE_URL,
            name: 'Gipser Basel & Rheinfelden – Trockenbau, Verputze & Fassaden',
            isPartOf: { '@id': `${SITE_URL}/#website` },
            about: { '@id': `${SITE_URL}/#business` },
            inLanguage: 'de-CH',
          },
        ],
      }),
    },
  ],
})

// ── Scroll reveal ───────────────────────────────────────────
const { initReveal } = useScrollReveal()
onMounted(() => { initReveal() })
</script>
