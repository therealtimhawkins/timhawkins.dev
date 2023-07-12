// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://unpkg.com/notie/dist/notie.min.css",
        },
      ],
    },
  },
  css: ["assets/styles/main.css"],
})
