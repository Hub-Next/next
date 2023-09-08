
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import project from '@/sanity/schemas/schema'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

const config = defineConfig({

  projectId: '3od3avz3',
  dataset: 'production',
  title: 'new blog',
  apiVersion: '2022-03-10',
  basePath: '/admin',

  plugins: [deskTool()],
  schema: {
    types: [project]
  }

})
export default config