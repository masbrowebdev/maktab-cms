import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
// import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  css: {
    postcss: {
      // plugins: [tailwindcss, autoprefixer],
      plugins: [autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths(), netlifyPlugin(), tailwindcss()],
});
