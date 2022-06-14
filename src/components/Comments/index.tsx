import dayjs, { Dayjs } from 'dayjs'
import { useAppDispatch } from 'hooks'
import { useState, useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { creatNewComment, getComments, IComments } from 'states/comments'
import CommentInput from './CommentInput'
import CommentItem from './CommentItem'

import styles from './comments.module.scss'

const CommentsList = () => {
  const comments = useSelector(getComments)
  const dispatch = useAppDispatch()

  const onCreate = async () => {
    // const newMsg = await fetcher('post', '/messages', { text, userId })
    // if (!newMsg) throw Error('something wrong')
    // setMsgs((msgs) => [newMsg, ...msgs])
  }

  const doneEdit = () => {
    // setEditingId(null)
  }

  const onUpdate = async () => {
    // const newMsg = await fetcher('put', `/messages/${id}`, { text, userId })
    // if (!newMsg) throw Error('something wrong')
    // setMsgs((msgs) => {
    //   const targetIndex = msgs.findIndex((msg) => msg.id === id)
    //   if (targetIndex < 0) return msgs
    //   const newMsgs = [...msgs]
    //   newMsgs.splice(targetIndex, 1, newMsg)
    //   return newMsgs
    // })
    // doneEdit()
  }

  const onDelete = async () => {
    // const receivedId = await fetcher('delete', `/messages/${id}`, {
    //   params: { userId },
    // })
    // setMsgs((msgs) => {
    //   const targetIndex = msgs.findIndex((msg) => msg.id === `${receivedId}`) // json db에서 숫자형과 문자열의 문제
    //   if (targetIndex < 0) return msgs
    //   const newMsg = [...msgs]
    //   newMsg.splice(targetIndex, 1)
    //   return newMsg
    // })
  }
  const updateData = (data: any) => {
    console.log('updateData')
    console.log(data)
  }
  const createData = (data: any) => {
    console.log('createData')
    console.log(data)
    dispatch(creatNewComment(data))
  }
  const deleteData = () => {
    console.log('delete')
  }

  return (
    <div className={styles.commentContainer}>
      <h2>Review</h2>
      <CommentInput update={false} updateData={updateData} createData={createData} />
      <ul className='messages'>
        {comments.map((x: IComments) => (
          <CommentItem key={x.id} data={x} updateData={updateData} createData={createData} deleteData={deleteData} />
        ))}
      </ul>
    </div>
  )
}
export default CommentsList
