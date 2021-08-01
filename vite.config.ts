import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

const config = defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess()
    })
  ]
})

export default config
