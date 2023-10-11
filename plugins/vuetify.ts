import '@mdi/font/css/materialdesignicons.css'
import { defineNuxtPlugin } from 'nuxt/app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    components,
    directives,
  })
  app.vueApp.use(vuetify)
})
