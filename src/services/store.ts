import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { collectionApi } from './baseApi'

const rootReducer = combineReducers({
  [collectionApi.reducerPath]: collectionApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(collectionApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']