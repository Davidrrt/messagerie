
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [],
  build: {
    transpile: ['@babel/runtime', 'lodash-es']
  },
  modules: [
    [ 
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  imports: {
    dirs: ['stores'],
  },
  css: ['~/assets/style/sb-admin-2.min.css','~/assets/style/main.css'],
  components: {
    dirs: [
      '~/pages',
      { prefix: 'a', extensions: ['vue', 'ts', 'js'], path: '~/node_modules/ant-design-vue/es' },
      'node_modules/@ant-design/icons-vue/es'
    ]
  },
  plugins: [],
  vite: {
    ssr: {
      noExternal: ['ant-design-vue/es', 'lodash-es', /vue-i18n/]
    },
    optimizeDeps: {
      include: ['@babel/runtime/regenerator'],
    },
    plugins: []
  },
  typescript: {
    strict: true
  }
});
