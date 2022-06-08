import { useAppDispatch, useAppSelector } from 'hooks'
import { useDispatch } from 'react-redux'
import favorite, { getFavorite, setItemId } from 'states/favorite'
import styles from './favorite.module.scss'
import store from 'store'

const Favorite = () => {
  const favoriteList = useAppSelector(getFavorite) || []
  const dispatch = useAppDispatch()

  const deleteFavoriteHandler = () => {
    dispatch(setItemId([]))
    store.set('favorite', [])

    // eslint-disable-next-line no-alert
    alert('관심상품이 없습니다.')
  }
  return (
    <div className={styles.favoriteItem}>
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
      <button className={styles.deleteBtn} type='button' onClick={deleteFavoriteHandler}>
        Delete All
      </button>
    </div>
  )
}
export default Favorite
