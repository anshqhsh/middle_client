import { useAppDispatch, useAppSelector } from 'hooks'
import { useEffect, useRef } from 'react'
import { getFavorite, setItemId } from 'states/favorite'
import styles from './favorite.module.scss'
import store from 'store'
import FavoriteItem from './favoriteItem'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Favorite = ({ isOpen, setIsOpen }: Props) => {
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
    <div className={styles.favoriteItem} ref={favoriteRef}>
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
  )
}
export default Favorite
