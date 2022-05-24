export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Digital Ecommerce",
    titleTemplate: "Digital Ecommerce | %s",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "It's simple, choose a design you love, download it and contact a professional car wrapper."
      }
    ],
    head: {
      script: []
    },
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/app.scss"],

  // Customize the progress-bar color
  loading: {
    color: "#1dbf73"
  },
  // Routes Global Configuration
  router: {
    middleware: ["clearValidationErrors"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/vue-video-background",
      ssr: false
    },
    "~/plugins/axios.js",
    "~/plugins/filters.js",
    "~/plugins/mixins/global.js",
    "~/plugins/components.js",
    "~/plugins/pretty-checkbox.js",
    "~/plugins/vue-infinite-loading.js",
    "~/plugins/vue-pagination.js",
    {
      src: "~/plugins/splide",
      ssr: false
    },
    {
      src: "~/plugins/range-slider.js",
      ssr: false
    },

    {
      src: "~/plugins/paypal.js",
      ssr: false
    },
    {
      src: "~/plugins/vue-stripe.js",
      ssr: false
    },
    {
      src: "~/plugins/vue-social.js",
      ssr: false
    },
    {
      src: "~/plugins/tawk-to.js",
      ssr: false
    },
    {
      src: "~/plugins/vue-google-map.js",
      ssr: false
    },
    { src: "~/plugins/vue-html2pdf", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    'cookie-universal-nuxt',
    // You can also pass plugin options
    [
      "vue-toastification/nuxt",
      {
        timeout: 2000,
        draggable: false,
        bodyClassName: "z-index: 20000"
      }
    ],
    "vue-social-sharing/nuxt"
  ],

  // Bootstrap vue config
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // Authentication strategies
  auth: {
    strategies: {
      local: {
        token: {
          property: "access_token"
        },
        user: {
          property: "data"
        },
        endpoints: {
          login: {
            url: "/login",
            method: "post"
          },
          logout: {
            url: "/logout",
            method: "post"
          },
          user: {
            url: "/profile",
            method: "get"
          }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
