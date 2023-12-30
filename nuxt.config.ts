// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt'
  ],
  typescript: {
    shim: false
  },
  runtimeConfig: {},
  colorMode: {
    classSuffix: ''
  }
})
