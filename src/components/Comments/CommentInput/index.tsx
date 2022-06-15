import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './commentInput.module.scss'

interface Props {
  update: boolean
  text?: string
  createData: any
  updateData?: any
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>
}
const CommentInput = ({ update, text, createData, updateData, setIsEdit }: Props) => {
  const [inputText, setInputText] = useState('')

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (update) {
      updateData(inputText)
    } else {
      createData(inputText)
    }
    setIsEdit && setIsEdit(false)
    setInputText('')
  }
  return (
    <form className={styles.commentInputForm} onSubmit={onSubmit}>
      <textarea onChange={onChange} defaultValue={text} value={inputText} placeholder='내용을 입력하세요' />
      <button className={styles.submitBtn} type='submit'>
        완료
      </button>
    </form>
  )
}

export default CommentInput
