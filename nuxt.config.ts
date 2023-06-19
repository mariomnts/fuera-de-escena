export default defineNuxtConfig({
  pages: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "LGTBIQfobia en la adolescencia | FUERA DE ESCENA 🏳️‍🌈",
      htmlAttrs: {
        lang: "es",
      },
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "preconnect", href: "https://www.youtube.com" },
      ],
      meta: [
        {
          name: "og:title",
          content: "LGTBIQfobia en la adolescencia | FUERA DE ESCENA 🏳️‍🌈",
        },
        {
          name: "description",
          content:
            "¿Cómo estuvo presente la LGTBIQfobia durante tu adolescencia?",
        },
        {
          name: "og:description",
          content:
            "¿Cómo estuvo presente la LGTBIQfobia durante tu adolescencia?",
        },
        {
          name: "og:image",
          content: "https://fueradeescena.es/share/fueradeescena.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: "https://fueradeescena.es/share/fueradeescena.png",
        },
        { name: "theme-color", content: "#0025cb" },
      ],
    },
  },
  modules: ["@vueuse/nuxt", "@nuxt/image"],
  nitro: {
    routeRules: {
      "/": { static: true, prerender: true },
      "/todo": { static: true, prerender: true },
    },
    prerender: {
      crawlLinks: true,
    },
  },
  components: {
    dirs: [
      // years components are global so we can dynamically load them
      {
        path: "~/components/years",
        global: true,
      },
      "~/components",
    ],
  },
  css: ["@/assets/styles/main.scss", "@/assets/styles/year.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/tokens.scss";',
        },
      },
    },
  },
});
