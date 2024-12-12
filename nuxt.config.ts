// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
  tailwindcss: {
    // Options
  },
  fontawesome: {
    icons: {
      solid: ['coffee', 'phone','map-pin', 'bars', 'xmark','quote-left', 'quote-right'],
      regular: ['envelope', 'face-smile-wink','moon','sun'],
    }
  }
})