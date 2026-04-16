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
useSeoMeta({
  title: 'YBGIBSER',
  description:
    'Y.B. Gipser GmbH – Ihr Spezialist für Trockenbau, Innenputz, Außenputz und Fassadengestaltung. Meisterbetrieb mit höchster Qualität und Präzision.',
  ogTitle: 'YBGIBSER',
  ogDescription: 'Ihr Spezialist für Trockenbau, Innenputz, Außenputz und Fassadengestaltung.',
})

const { initReveal } = useScrollReveal()

onMounted(() => {
  initReveal()
})
</script>
