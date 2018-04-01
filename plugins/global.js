import Vue from 'vue'

// disable "development mode" warning (not working)
Vue.config.productionTip = false

/*
 * Global Vue components
 */

// makes a elements scroll, but always stay in viewport [UNUSED]
// import VueAffix from 'vue-affix'
// Vue.use(VueAffix)

// highlights subnav links and make links in subnav scroll smooth to respective anchor [UNUSED]
// import VueScrollactive from 'vue-scrollactive'
// Vue.use(VueScrollactive)

// vue-lazyload
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)

// various scroll-related tools
// import ScrollView from 'vue-scrollview'
// Vue.use(ScrollView)

/**
 * initialize DOM-dependent plugins after page change
 */
const initAfterMount = () => {
  mediumZoom('.page img:not(.medium-zoom-image)')
  initSmoothScroll(scrollLinkHandler)
}

Vue.mixin({
  mounted: function() {
    // this will be called when any component is mounted!
    initAfterMount()
  },
})
