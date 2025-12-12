// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemas} from './schemas' 

export default defineConfig({
  name: 'astro-test-blog',
  title: 'astro test blog',
  projectId: 'ufao1yzo',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
})