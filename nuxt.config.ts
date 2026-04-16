export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    storage: {
      messages: {
        driver: 'fs',
        base: process.env.STORAGE_PATH || './.data/messages',
      },
      projects: {
        driver: 'fs',
        base: process.env.PROJECTS_STORAGE_PATH || './.data/projects',
      },
    },
  },
  app: {
    head: {
      title: 'YBGIBSER',
      htmlAttrs: { lang: 'de' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Y.B. Gipser GmbH – Ihr Spezialist für Trockenbau, Innenputz, Außenputz und Fassadengestaltung. Meisterbetrieb mit höchster Qualität und Präzision.',
        },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/1.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
