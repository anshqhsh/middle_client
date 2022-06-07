import { FavoriteIcon } from 'assets/svgs'

import styles from './productItem.module.scss'
import store from 'store'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getFavorite, setItemId } from 'states/favorite'
import { useEffect } from 'react'

interface Props {
  itemId: string
  src: string
}

const ProductItem = ({ itemId, src }: Props) => {
  const dispatch = useAppDispatch()
  const favoriteList = [...useAppSelector(getFavorite)]

  const onClickHandller = () => {
    const findIdx = favoriteList.findIndex((e) => e === itemId)

    if (findIdx === -1) {
      dispatch(setItemId([...favoriteList, itemId]))
    } else {
      favoriteList.splice(findIdx, 1)
      dispatch(setItemId(favoriteList))
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
