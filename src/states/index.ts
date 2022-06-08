import { configureStore } from '@reduxjs/toolkit'

import system from './system'
import favorite from './favorite'
import youtube from './youtube'

export const store = configureStore({
  reducer: {
    system,
    favorite,
    youtube,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
