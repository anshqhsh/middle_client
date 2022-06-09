import { useAppDispatch, useAppSelector } from 'hooks'
import { useEffect, useRef } from 'react'
import { useMount } from 'react-use'
import { getFavorite, setItemId } from 'states/favorite'
import styles from './favorite.module.scss'
import store from 'store'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Favorite = ({ isOpen, setIsOpen }: Props) => {
  const favoriteList = useAppSelector(getFavorite) || []
  const dispatch = useAppDispatch()

  const favoriteRef = useRef<HTMLDivElement>(null)

  const deleteFavorite = () => {
    dispatch(setItemId([]))
    store.set('favorite', [])
  }

  useEffect(() => {
    const onClickOutside = (e: Event) => {
      if (isOpen && !favoriteRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [isOpen])
  return (
    <div className={styles.favoriteItem} ref={favoriteRef}>
      <ul>
        {favoriteList.length !== 0 ? (
          favoriteList.map((e) => {
            return (
              <li key={e}>
                <img
                  className={styles.productImg}
                  src='https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg'
                  alt='img'
                />
                <h4>{e}</h4>
              </li>
            )
          })
        ) : (
          <li>Empty Item</li>
        )}
      </ul>
      <button className={styles.deleteBtn} type='button' onClick={deleteFavorite}>
        Delete All
      </button>
    </div>
  )
}
export default Favorite
