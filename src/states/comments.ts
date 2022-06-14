import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'states'
import store from 'store'

export interface IComments {
  id: string
  userId: string
  timestamp: number
  text: string
  comments: IComment[] | []
}
interface IComment {
  id: string
  userId: string
  timestamp: number
  text: string
  comments: any[]
}

export interface ICommentsInit {
  data: IComments
}
const commentsInit = [
  {
    id: '1',
    userId: 'kim',
    timestamp: 1234569630123,
    text: '1',
    comments: [
      {
        id: '1_1',
        userId: 'kim',
        timestamp: 1234569630123,
        text: '1_1 데이터 확인',
        comments: [],
      },
    ],
  },
  {
    id: '2',
    userId: 'kim',
    timestamp: 1234569570123,
    text: '2',
    comments: [],
  },
  {
    id: '3',
    userId: 'kim',
    timestamp: 1234569510123,
    text: '3',
    comments: [],
  },
  {
    id: '4',
    userId: 'kim',
    timestamp: 1234569630123,
    text: '4',
    comments: [],
  },
]
const INITIAL_STATE = { data: store.get('comments') || commentsInit }

const commentSlice = createSlice({
  name: 'comments',
  initialState: INITIAL_STATE,
  reducers: {
    creatNewComment: (state, action) => {
      const newSetComments = [state, action.payload]
      store.set('comments', newSetComments)
      console.log(state.data)
    },
    deleteComment: () => {
      store.set('comments', INITIAL_STATE)
    },
  },
})

export const { creatNewComment } = commentSlice.actions
export default commentSlice.reducer

export const getComments = (state: RootState) => state.comments.data
