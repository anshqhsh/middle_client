import { deleteComment, IComments, updateComment } from 'states/comments'
import dayjs from 'dayjs'
import { useState } from 'react'
import styles from './commentItem.module.scss'
import CommentInput from '../CommentInput'
import { useAppDispatch } from 'hooks'

interface Props {
  data: IComments
  userId: string
  createData: any
}
const CommentItem = ({ data, userId, createData }: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useAppDispatch()

  const editHandller = () => {
    setIsEdit(true)
  }

  const deleteData = () => {
    dispatch(deleteComment(data.id))
  }
  const updateData = (text: string) => {
    dispatch(updateComment({ id: data.id, text }))
  }

  return (
    <li className={styles.commentItem}>
      {isEdit ? (
        <CommentInput update text={data.text} updateData={updateData} createData={createData} setIsEdit={setIsEdit} />
      ) : (
        <div className={styles.inputWrap}>
          <div className={styles.textWrap}>
            {data.text}
            <div className={styles.idTimeWrap}>
              <strong>{data.userId}</strong>
              <sub>{dayjs(data.timestamp).format('YYYY-MM-DD ddd HH:mm')}</sub>
            </div>
          </div>
          {userId === data.userId && (
            <div className={styles.messagesBtn}>
              <button onClick={editHandller} type='button'>
                수정
              </button>
              <button onClick={deleteData} type='button'>
                삭제
              </button>
            </div>
          )}
        </div>
      )}
    </li>
  )
}

export default CommentItem
