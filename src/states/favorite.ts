import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'states'
import store from 'store'

export interface IFavoriteItemKey {
  favoriteItemIds: string[]
}
const INITIAL_STATE: IFavoriteItemKey = { favoriteItemIds: store.get('favorite') || [] }

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: INITIAL_STATE,
  reducers: {
    setItemId: (state, action) => {
      const newSetFavorite = action.payload
      store.set('favorite', newSetFavorite)
      state.favoriteItemIds = newSetFavorite
    },
    resetItemId: (state) => {
      store.remove('favorite')
      state.favoriteItemIds = INITIAL_STATE.favoriteItemIds
    },
  },
})

export const { setItemId, resetItemId } = favoriteSlice.actions
export default favoriteSlice.reducer

export const getFavorite = (state: RootState) => state.favorite.favoriteItemIds
