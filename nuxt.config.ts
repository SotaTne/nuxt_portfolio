// https://nuxt.com/docs/api/configuration/nuxt-config
//export default defineNuxtConfig({});

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "Motarou's portfolio",
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        { name: 'description', content: '' },
      ],
    },
  },
  css: [
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css',
    /* add my scss*/ '@/assets/style/main.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
