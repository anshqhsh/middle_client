import { useAppSelector } from 'hooks'
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
                {/* <img className={styles.productImg} src={e.src} alt='img' /> */}
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
