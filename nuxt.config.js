//const contentful = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Microinteractions',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Museum of Microinteractions',
      },
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'robots', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      // { rel: 'alternate', hreflang: 'de', href: 'https://www.my-url.com/' },
      // { rel: 'alternate', hreflang: 'en', href: 'https://www.my-url.com/en' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //{ href: 'https://fonts.googleapis.com/css?family=Bitter:400,400i,700', rel: 'stylesheet' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Alegreya:500,500i,900,900i|Material+Icons',
        rel: 'stylesheet',
      },
      // {
      //   href: '/styles/vuetify.min.css',
      //   rel: 'stylesheet',
      // },
    ],
    script: [
      { src: '/js/medium-zoom.min.js', defer: true },
      { src: '/js/smoothscroll.js', defer: true },
    ],
  },
  //css: ['assets/styles/main.scss'],
  //css: ['node_modules/vuetify/dist/vuetify.min.css'],
  css: ['assets/styles/vuetify-custom/main.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1E8A08' },
  /*
  ** Build configuration
  */
  build: {
    // postcss: [
    //   require('postcss-cssnext')(),
    //   // require('autoprefixer')({
    //   //   browsers: ['> 5%'],
    //   // }),
    // ],
    /*
    ** Run ESLint on save
    */
    // extend(config, ctx)
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       // loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //     })
    //   }
    // },
    // vendor: ['vue-i18n'],
    vendor: ['vuetify'],
  },
  router: {
    // middleware: 'mediumZoom',
    scrollBehavior: function(to, from, savedPosition) {
      // delay scrolling to top after page change to match fade-out time
      return new Promise((resolve, reject) => {
        if (window.location.hash) {
          // do nothing if the link is a page-internal anchor
        } else {
          setTimeout(() => {
            resolve({ x: 0, y: 0 })
          }, 250)
        }
      })
    },
  },
  transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      //console.log('route change imminent')
    },
  },
  modules: ['@nuxtjs/markdownit'],
  loaders: [
    { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
  ],
  /*
  ** Plugins
  */
  plugins: [
    //'~/plugins/contentful.js',
    '~/plugins/vuetify.js',
    '~/plugins/global.js',
    //{ src: '~/plugins/medium-zoom.min.js', ssr: false },
  ],
  generate: {
    routes: ['/', '/about'], // these routes will be pre-rendered on "build"
  },
  env: {
    // CTF_SPACE_ID: contentful.CTF_SPACE_ID,
    // CTF_CDA_ACCESS_TOKEN: contentful.CTF_CDA_ACCESS_TOKEN,
    // CTF_BLOG_POST_TYPE_ID: contentful.CTF_BLOG_POST_TYPE_ID,
  },
  /*
  ** Markdown-it
  */
  markdownit: {
    preset: 'default',
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true, // Autoconvert URL-like text to links
    use: [
      'markdown-it-footnote',
      //'markdown-it-include',
      'markdown-it-container',
      'markdown-it-attrs',
      ['markdown-it-implicit-figures', { figcaption: true }],
      'markdown-it-mark',
      'markdown-it-smartarrows',
      ['markdown-it-container', 'spoiler'], // makes container .spoiler available
      //'markdown-it-hashmention',
    ],
  },
}
