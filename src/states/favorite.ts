import { createSlice } from '@reduxjs/toolkit'
import store from 'store'
import { RootState } from 'states'

export interface IFavoriteItemKey {
  favoriteItemIds: string[]
}
const INITIAL_STATE: IFavoriteItemKey = { favoriteItemIds: store.get('favorite') || [] }

// theme: store.get('foundation.theme') || 'light',

const systemSlice = createSlice({
  name: 'favorite',
  initialState: INITIAL_STATE,
  reducers: {
    setItemId: (state, action) => {
      const newSetFavorite = action.payload
      console.log({ newSetFavorite })
      store.set('favorite', newSetFavorite)
      state.favoriteItemIds = newSetFavorite
    },
    resetItemId: (state) => {
      store.remove('favorite')
      state.favoriteItemIds = INITIAL_STATE.favoriteItemIds
    },
  },
})

export const { setItemId } = systemSlice.actions
export default systemSlice.reducer

export const getFavorite = (state: RootState) => state.favorite.favoriteItemIds
