import vuetify from "vite-plugin-vuetify";

const projectName = "App Name";
const projectImage = "/logo.png";

export default defineNuxtConfig({
  typescript: { shim: false },
  css: ["vuetify/lib/styles/main.sass", "@/assets/scss/main.scss"],
  app: {
    head: {
      title: "",
      titleTemplate: "%s | TITLE",
      link: [{ rel: "icon", type: "images/x-icon", href: "/favicon.ico" }],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "omsapplication-tap-highlight", content: "no" },

        { name: "twitter:title", content: "" },
        { name: "twitter:image", content: projectImage },
        { name: "twitter:image:alt", content: projectName },
        { name: "twitter:description", content: "" },

        { property: "keyword", content: "" },
        { property: "og:title", content: "" },
        { property: "og:keyword", content: "" },
        { name: "description", content: "" },
        { name: "og:description", content: "" },
        { name: "og:image", content: projectImage },
        { name: "og:image:secure_url", content: projectImage },
        { property: "og:image", content: projectImage },
        { property: "og:type", content: "website" },
        { property: "og:name", content: projectName },
        { property: "og:site_name", content: projectName },

        { property: "HandheldFriendly", content: "true" },
        { property: "format-detection", content: "telephone=no" },

        { name: "theme-color", content: "#000" },

        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-touch-fullscreen", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },

        { name: "apple-mobile-web-app-title", content: projectName },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },

        { name: "msapplication-TileImage", content: projectImage },
        { name: "omsapplication-tap-highlight", content: "no" },
        { name: "msapplication-TileColor", content: "#000" },
        { name: "msapplication-navbutton-color", content: "#000" },
      ],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify()),
      );
    },
  ],
});
