// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  devtools: { enabled: true },
  build: { transpile: ['/vuetify/'] },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config?.plugins.push(vuetify())
      })
    },
  ],
})
