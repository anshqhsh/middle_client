import { FavoriteIcon } from 'assets/svgs'

import styles from './productItem.module.scss'
import store from 'store'

interface Props {
  itemId: string
  src: string
}

const ProductItem = ({ itemId, src }: Props) => {
  const onClickHandller = () => {
    const getLocalStorage = store.get('favorite')
    if (!getLocalStorage) {
      store.set('favorite', [{ itemId, src }])
    } else {
      const idx = getLocalStorage.findIndex((e: Props) => e.itemId === itemId)
      if (idx === -1) {
        store.set('favorite', [...getLocalStorage, { itemId, src }])
      } else {
        getLocalStorage.splice(idx, 1)
        store.set('favorite', getLocalStorage)
      }
    }
  }

  return (
    <div className={styles.productWrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.productImg} src={src} alt='img' />
      </div>
      <div className={styles.infoBox}>
        <p>{itemId}</p>
        <button type='button' onClick={onClickHandller}>
          <FavoriteIcon />
        </button>
      </div>
    </div>
  )
}
export default ProductItem
