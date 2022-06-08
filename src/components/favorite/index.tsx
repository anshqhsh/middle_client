import { useAppSelector } from 'hooks'
import { useDispatch } from 'react-redux'
import favorite, { getFavorite } from 'states/favorite'
import styles from './favorite.module.scss'

const Favorite = () => {
  const favoriteList = useAppSelector(getFavorite) || []
  console.log(favoriteList)
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
    </div>
  )
}
export default Favorite
