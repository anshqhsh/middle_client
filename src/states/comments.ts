import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import { RootState } from 'states'
import store from 'store'
import { v4 } from 'uuid'

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
    userId: 'lee',
    timestamp: 1234569630123,
    text: '에어론 앉고 허리 디스크가 나아졌어요!',
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
    text: '데스크 셋업에 관심 많아서 추천제품 즐찾하고 갑니다~',
    comments: [],
  },
  {
    id: '3',
    userId: 'kim',
    timestamp: 1234569510123,
    text: '오디오엔진 가성비👍',
    comments: [],
  },
  {
    id: '4',
    userId: 'lee',
    timestamp: 1234569630123,
    text: '맥북 주는 회사 들어가고 싶어요....',
    comments: [],
  },
]
const INITIAL_STATE = { data: store.get('comments') || commentsInit }

const commentSlice = createSlice({
  name: 'comments',
  initialState: INITIAL_STATE,
  reducers: {
    creatNewComment: (state, action) => {
      const { userId } = store.get('userData')
      const newComment = {
        id: v4(),
        userId,
        timeStamp: dayjs().diff,
        text: action.payload,
        comments: [],
      }
      const newSetComments = [...state.data, newComment]
      store.set('comments', newSetComments)
      state.data = newSetComments
    },
    updateComment: (state, action) => {
      const comments = [...state.data]
      const targetIndex = state.data.findIndex((comment: any) => comment.id === action.payload.id)
      comments[targetIndex].text = action.payload.text
      store.set('comments', comments)
      state.data = comments
    },
    deleteComment: (state, action) => {
      const comments = [...state.data]
      const targetIndex = state.data.findIndex((comment: any) => comment.id === action.payload)
      comments.splice(targetIndex, 1)
      store.set('comments', comments)
      state.data = comments
    },
  },
})

export const { creatNewComment, updateComment, deleteComment } = commentSlice.actions
export default commentSlice.reducer

export const getComments = (state: RootState) => state.comments.data
