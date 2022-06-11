import { useAppDispatch, useAppSelector } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import { getFavorite, setItemId } from 'states/favorite'
import styles from './favorite.module.scss'
import store from 'store'
import FavoriteItem from './favoriteItem'
import { FavoriteIcon } from 'assets/svgs'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Favorite = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickOpenHandler = () => {
    setIsOpen((_isOpen) => !_isOpen)
  }
  const favoriteList = useAppSelector(getFavorite) || []
  const dispatch = useAppDispatch()

  const favoriteRef = useRef<HTMLDivElement>(null)

  const deleteAllFavorite = () => {
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
  }, [isOpen, setIsOpen])
  return (
    <div className={styles.favorite} ref={favoriteRef}>
      <button type='button' className={styles.headerRightBtn} onClick={onClickOpenHandler}>
        <FavoriteIcon />
        <span>관심상품</span>
      </button>

      {isOpen && (
        <div className={styles.favoriteItem}>
          <ul>
            {favoriteList.length ? (
              favoriteList.map((item) => <FavoriteItem key={item} item={item} />)
            ) : (
              <li>Empty Item</li>
            )}
          </ul>
          <button className={styles.deleteBtn} type='button' onClick={deleteAllFavorite}>
            Delete All
          </button>
        </div>
      )}
    </div>
  )
}
export default Favorite
