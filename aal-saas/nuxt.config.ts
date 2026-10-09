// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/logo/logo.png" }],
    },
  },

  // Prevents vue-bundle-renderer from choking on Vite sourcemap resolution in Node 22
  vite: {
    build: {
      manifest: true,
      ssrManifest: true,
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

  // Inlines runtime server renderer dependencies
  nitro: {
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/],
    },
  },
});
