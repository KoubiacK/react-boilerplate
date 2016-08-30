let loadedStore = null

loadedStore = process.env.NODE_ENV === 'production' ?
 require('./configureStore.prod') :
 require('./configureStore.dev')

export const configureStore = loadedStore
