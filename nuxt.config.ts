export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
  ],

  // nuxt-site-config — tüm SEO modülleri bu değeri kullanır
  // @ts-ignore — types .nuxt/prepare sonrası oluşur
  site: {
    url: 'https://www.ybgipser.ch',
    name: 'Y.B. Gipser GmbH',
    description: 'Meisterbetrieb für Trockenbau, Verputze und Fassaden in der Region Basel',
    defaultLocale: 'de-CH',
  },

  robots: {
    disallow: ['/admin/', '/api/', '/datenschutz-rechte'],
  },

  sitemap: {
    urls: [
      { loc: '/',              priority: 1.0, changefreq: 'weekly'  },
      { loc: '/impressum',     priority: 0.3, changefreq: 'yearly'  },
      { loc: '/datenschutz',   priority: 0.3, changefreq: 'yearly'  },
      { loc: '/agb',           priority: 0.3, changefreq: 'yearly'  },
    ],
    exclude: ['/admin/**', '/datenschutz-rechte'],
  },

  colorMode: { preference: 'light', fallback: 'light' },
  css: ['~/assets/css/main.css'],

  nitro: {
    storage: {
      messages: { driver: 'fs', base: process.env.STORAGE_PATH || './.data/messages' },
      projects: { driver: 'fs', base: process.env.PROJECTS_STORAGE_PATH || './.data/projects' },
    },
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
      },
    },
    '/projekte/**': { headers: { 'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600' } },
    '/_nuxt/**':     { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/*.png':        { headers: { 'Cache-Control': 'public, max-age=86400' } },
    '/*.jpg':        { headers: { 'Cache-Control': 'public, max-age=86400' } },
    '/*.jpeg':       { headers: { 'Cache-Control': 'public, max-age=86400' } },
    '/api/**':       { headers: { 'Cache-Control': 'no-store' } },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'de-CH' },
      titleTemplate: '%s | Y.B. Gipser GmbH',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f59e0b' },
        { name: 'geo.region',    content: 'CH-AG' },
        { name: 'geo.placename', content: 'Rheinfelden, Basel' },
        { name: 'geo.position',  content: '47.5556;7.7955' },
        { name: 'ICBM',          content: '47.5556, 7.7955' },
        { property: 'og:site_name', content: 'Y.B. Gipser GmbH' },
        { property: 'og:locale',    content: 'de_CH' },
        { property: 'og:image',        content: 'https://www.ybgipser.ch/og-image.jpg' },
        { property: 'og:image:width',  content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt',    content: 'Y.B. Gipser GmbH – Trockenbau & Verputze Basel' },
        { name: 'twitter:card',  content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://www.ybgipser.ch/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/1.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  ui: { global: true },
})
