import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import ViteSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    ViteSitemap({
      hostname: 'https://www.seniorkoster.com.br',
      routes: [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/produtos', changefreq: 'weekly', priority: 0.9 },
        { url: '/sobre', changefreq: 'monthly', priority: 0.8 },
        { url: '/reservas', changefreq: 'weekly', priority: 0.9 },
        { url: '/encomendas', changefreq: 'weekly', priority: 0.9 },
        { url: '/contato', changefreq: 'monthly', priority: 0.7 },
      ],
    }),
  ],
})
