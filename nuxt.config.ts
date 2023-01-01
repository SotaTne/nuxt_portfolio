// https://nuxt.com/docs/api/configuration/nuxt-config
//export default defineNuxtConfig({});

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      title: "Motarou's portfolio",
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          name: 'description',
          content:
            '主にwebサイトやスマホアプリの作成などをしているフリーランスのエンジニアのwebサイトです。',
        },
        //{ name: 'robots', content: 'noindex,follow' }, ホーム以外のページのseo対策があまりできていないときに使う

        //ogp
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || '',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: "Motarou's portfolio",
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://motarou-portfoilo.netlify.app/',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Motarou's portfolio",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '主にwebサイトやスマホアプリの作成などをしているフリーランスのエンジニアのwebサイトです。',
        },
        { hid: 'og:image', property: 'og:image', content: '画像のURL' },
        { name: 'twitter:card', content: 'summary' }, // twitterの画像サイズ
      ],
    },
  },
  css: [
    //'vuetify/lib/styles/main.sass',
    //'mdi/css/materialdesignicons.min.css',
    /* add my scss*/ '@/assets/style/main.scss',
  ],
  /*
  build: {
    transpile: ['vuetify'],
  },
  */
  vite: {
    /*
    define: {
      'process.env.DEBUG': false,
    },
    */
  },
})
