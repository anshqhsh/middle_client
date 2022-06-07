import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'states'

export interface IFavoriteItemKey {
  favorite: {
    itemId: string
  }
}
const INITIAL_STATE = {
  favorite: {
    itemId: '',
  },
}

const systemSlice = createSlice({
  name: 'favorite',
  initialState: INITIAL_STATE as IFavoriteItemKey,
  reducers: {
    setItemId: (state, action) => {
      state.favorite = action.payload
    },
    resetItemId: (state, action) => {
      state.favorite = INITIAL_STATE.favorite
    },
  },
})

export const { setItemId } = systemSlice.actions
export default systemSlice.reducer

export const getFavorite = (state: RootState) => state.favorite.favorite
