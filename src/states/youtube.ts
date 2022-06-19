import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'states'

export interface IYoutube {
  q: string
  maxResults: number
}
const INITIAL_STATE: IYoutube = { q: '허먼밀러', maxResults: 10 }

const youtubeSlice = createSlice({
  name: 'youtube',
  initialState: INITIAL_STATE,
  reducers: {
    setYoutube: (state, action) => {
      const newQuery = action.payload
      state.q = newQuery.q
      state.maxResults = newQuery.maxResults
    },
    setMaxResults: (state, action) => {
      state.maxResults = action.payload
    },
  },
})

export const { setYoutube, setMaxResults } = youtubeSlice.actions
export default youtubeSlice.reducer

export const getYoutube = (state: RootState) => state.youtube
