// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  modules: ['nuxt-directus', '@nuxtjs/tailwindcss'],
  pages: true,
});
