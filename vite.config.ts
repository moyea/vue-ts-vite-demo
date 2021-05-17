import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteVue from '@vitejs/plugin-vue'
import { injectHtml } from 'vite-plugin-html'


export default defineConfig({
  plugins: [
    tsConfigPaths(),
    vueJsx(),
    viteVue(),
    injectHtml({
      injectData:{
        title: 'Vue + Typescript + vite'
      }
    })
  ]
})