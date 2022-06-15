import { configureStore } from '@reduxjs/toolkit'

import favorite from './favorite'
import youtube from './youtube'
import comments from './comments'

export const store = configureStore({
  reducer: {
    favorite,
    youtube,
    comments,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
