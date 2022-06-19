import { useAppDispatch, useAppSelector } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import { getYoutube, setMaxResults } from 'states/youtube'
import styles from './dropdown.module.scss'

// Item setting Number Arr
const setNumArr = [4, 6, 8, 10]

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { maxResults } = useAppSelector(getYoutube)
  const dispatch = useAppDispatch()
  const onOpenClick = () => {
    setIsOpen((_isOpen) => !_isOpen)
  }

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClickOutside = (e: Event) => {
      if (isOpen && !dropdownRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [isOpen, setIsOpen])

  const dropdownMenuClick = (e: any) => {
    dispatch(setMaxResults(e.target.value))
    setIsOpen(false)
  }
  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button className={styles.selectedBtn} type='button' onClick={onOpenClick}>
        {`영상 갯수 ${maxResults}`}
      </button>
      {isOpen ? (
        <div className={styles.dropdownWrap}>
          <ul>
            {setNumArr.map((e) => (
              <li className={styles.dropdownMenu} key={e}>
                <button type='button' onClick={dropdownMenuClick} value={e}>
                  {e}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default DropDown
