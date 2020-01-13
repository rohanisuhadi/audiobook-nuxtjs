
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'AudioBuku - Learn VueJS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://api.audiobuku.com/api/v2',
  },

  auth: {
    token: {
      property: 'access_token'
    },
    strategies: {
      facebook: {
        client_id: '2667246163362922',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday']
      },
      local: {
        endpoints: {
          login: { url: '/auth', method: 'post'},
          refresh: { url: '/api/auth/refresh', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/users/me', method: 'get', propertyName: '' }
        },
        tokenRequired: true,
        tokenType: 'Bearer',
        refreshToken: true,
        resetOnError: true
      },
    },
    refreshToken: true,
    resetOnError: true,
    localStorage: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  server: {
    port: 9000
  }
}
