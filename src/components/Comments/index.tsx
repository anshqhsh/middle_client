import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { creatNewComment, getComments, IComments } from 'states/comments'
import CommentInput from './CommentInput'
import CommentItem from './CommentItem'
import { useState } from 'react'
import { useMount } from 'react-use'
import store from 'store'
import styles from './comments.module.scss'

const CommentsList = () => {
  const comments = useSelector(getComments)
  const dispatch = useAppDispatch()
  const [userId, setUserId] = useState('')

  const createData = (data: any) => {
    dispatch(creatNewComment(data))
  }

  useMount(() => {
    !store.get('userData') && store.set('userData', { userId: 'kim' })
    setUserId(store.get('userData').userId)
  })

  return (
    <div className={styles.commentContainer}>
      <h2>Review</h2>
      <CommentInput update={false} createData={createData} />
      <ul className='messages'>
        {comments.map((x: IComments) => (
          <CommentItem key={x.id} data={x} userId={userId} createData={createData} />
        ))}
      </ul>
    </div>
  )
}
export default CommentsList
