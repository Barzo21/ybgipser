<template>
  <div>
    <AppNav />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ContactSection />
      <AppFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'ElektroProfi – Ihr Elektrofachbetrieb',
  description:
    'Professionelle Elektroinstallation, Wartung, Smart Home und Reparaturen. Ihr zertifizierter Elektrofachbetrieb – schnell, zuverlässig, modern.',
  ogTitle: 'ElektroProfi – Ihr Elektrofachbetrieb',
  ogDescription: 'Ihr zertifizierter Partner für alle Elektroarbeiten – von der Installation bis zum Smart Home.',
})

const { initReveal } = useScrollReveal()

onMounted(() => {
  initReveal()
})
</script>
