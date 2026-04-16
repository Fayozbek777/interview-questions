import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [mkcert(), tailwindcss()],
});
