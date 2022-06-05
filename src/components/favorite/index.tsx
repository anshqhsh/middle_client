import styles from './favorite.module.scss'

interface Props {
  itemId: string
  src: string
}
const Favorite = (favorite: Array<Props> | []) => {
  const favoriteArr = Object.values(favorite)
  return (
    <div className={styles.favoriteItem}>
      <ul>
        {favoriteArr.length !== 0 ? (
          favoriteArr.map((e: Props) => {
            return (
              <li key={e.itemId}>
                <img className={styles.productImg} src={e.src} alt='img' />
                <h4>{e.itemId}</h4>
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
