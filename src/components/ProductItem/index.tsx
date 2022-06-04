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
    if (getLocalStorage) {
      store.set('favorite', [...getLocalStorage, { itemId, src }])
    } else {
      store.set('favorite', [{ itemId, src }])
    }
  }
  return (
    <div className={styles.productWrapper}>
      <img className={styles.productImg} src={src} alt='img' />
      <div className={styles.infoBox}>
        <p>허먼밀러</p>
        <p>에어론</p>
        <p>1,000,000</p>
        <button type='button' onClick={onClickHandller}>
          <FavoriteIcon />
        </button>
      </div>
    </div>
  )
}

export default ProductItem
