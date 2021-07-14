import { addLibrary } from './utils'
import { libraryTypes } from './typings/types'

const library: Array<libraryTypes> = ['vue-router']


library.forEach(async (item: libraryTypes) => {
  await addLibrary(item,  'project')
})
