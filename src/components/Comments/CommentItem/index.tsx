import { IComments } from 'states/comments'
import dayjs from 'dayjs'
import { useState } from 'react'

import styles from './commentItem.module.scss'
import CommentInput from '../CommentInput'

interface Props {
  data: IComments
  updateData: any
  createData: any
  deleteData: any
}
const CommentItem = ({ data, updateData, createData, deleteData }: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const editHandller = () => {
    setIsEdit(true)
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
          <div className={styles.messagesBtn}>
            <button onClick={editHandller} type='button'>
              수정
            </button>
            <button onClick={deleteData} type='button'>
              삭제
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default CommentItem
