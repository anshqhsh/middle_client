import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { creatNewComment, getComments, IComments } from 'states/comments'
import CommentInput from './CommentInput'
import CommentItem from './CommentItem'

import styles from './comments.module.scss'

const CommentsList = () => {
  const comments = useSelector(getComments)
  const dispatch = useAppDispatch()

  const createData = (data: any) => {
    dispatch(creatNewComment(data))
  }

  return (
    <div className={styles.commentContainer}>
      <h2>Review</h2>
      <CommentInput update={false} createData={createData} />
      <ul className='messages'>
        {comments.map((x: IComments) => (
          <CommentItem key={x.id} data={x} createData={createData} />
        ))}
      </ul>
    </div>
  )
}
export default CommentsList
