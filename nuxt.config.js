export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/sass/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["plugins/auth", "plugins/axios", "plugins/my-inject"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://www.npmjs.com/package/@nuxtjs/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://www.npmjs.com/package/@nuxtjs/i18n
    "@nuxtjs/i18n",
  ],

  publicRuntimeConfig: {
    appName: process.env.APP_NAME, // 追加
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "/",
    // クロスドメインで認証情報を共有する
    // origin: "http://localhost:8080",
    credentials: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  vuetify: {
    // 開発環境でcustomVariablesを有効にするフラグ
    // Doc: https://vuetifyjs.com/ja/customization/a-la-carte/
    treeShake: true,
    customVariables: ["~/assets/sass/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: "4080BE",
          info: "4FC1E9",
          success: "44D69E",
          warning: "FEB65E",
          error: "FB8678",
          background: "f6f6f4",
          myblue: "1867C0",
        },
      },
    },
  },

  // Doc: https://nuxt-community.github.io/nuxt-i18n/basic-usage.html#nuxt-link
  i18n: {
    // 対応言語の指定
    locales: ["ja", "en"],
    // デフォルトで使用する言語を指定
    defaultLocale: "ja",
    strategy: "no_prefix",
    // Doc: https://kazupon.github.io/vue-i18n/api/#properties
    vueI18n: {
      // 翻訳対象がない場合に参照される言語
      fallbackLocale: "ja",
      // true => i18nの警告を完全に表示しない(default: false)
      // silentTranslationWarn: true,
      // フォールバック時に警告を発生させる(default: false)
      // true => 警告を発生させない(翻訳のキーが存在しない場合のみ発生)
      silentFallbackWarn: true,
      // 翻訳データを指定
      messages: {
        ja: require("./locales/ja.json"),
        en: require("./locales/en.json"),
      },
    },
  },
};
