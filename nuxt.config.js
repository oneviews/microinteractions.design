const config = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mi-museum',
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
      // { href: '/styles/pure-min.css', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css?family=Arbutus+Slab', rel: 'stylesheet' },
    ],
    script: [
      { src: '/js/medium-zoom.min.js', body: true},
    ]
  },
  //css: ['assets/styles/main.scss'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#E50134' },
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
  },
  // router: {
  //   middleware: 'mediumZoom',
  // },
  modules: ['@nuxtjs/markdownit'],
  /*
  ** Plugins
  */
  plugins: [
    //'~/plugins/i18n.js',
    '~/plugins/contentful.js',
    '~/plugins/vue-js-modal.js',
    '~/plugins/global.js',
    //{ src: '~/plugins/medium-zoom.min.js', ssr: false },
  ],
  generate: {
    routes: ['/', '/about'], // these routes will be pre-rendered on "build"
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
  },
  /*
  ** Markdown-it
  */
  markdownit: {
    preset: 'default',
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true, // Autoconvert URL-like text to links
    use: [
      'markdown-it-mark',
      'markdown-it-footnote',
      'markdown-it-smartarrows',
      'markdown-it-hashmention',
      'markdown-it-include',
      'mdfigcaption',
      'markdown-it-attrs',
    ],
  },
}

