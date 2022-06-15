import { FavoriteIcon } from 'assets/svgs'

import styles from './productItem.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getFavorite, setItemId } from 'states/favorite'
import { useEffect, useState } from 'react'
import { setYoutube } from 'states/youtube'
import _ from 'lodash'

interface Props {
  itemId: string
  src: string
}

const ProductItem = ({ itemId, src }: Props) => {
  const [isCheck, setIsCheck] = useState(false)
  const dispatch = useAppDispatch()
  const favoriteList = useAppSelector(getFavorite)

  useEffect(() => {
    favoriteList.includes(itemId) ? setIsCheck(true) : setIsCheck(false)
  }, [favoriteList, itemId])

  const setYtPlayer = () => {
    dispatch(setYoutube({ q: itemId, maxResults: 4 }))
  }
  const onFaboriteHandler = () => {
    const findIdx = favoriteList.findIndex((e) => e === itemId)
    if (findIdx === -1) {
      dispatch(setItemId([...favoriteList, itemId]))
    } else {
      const sliceItem = _.without(favoriteList, itemId)
      dispatch(setItemId(sliceItem))
    }
  }

  return (
    <div className={styles.productWrapper}>
      <div className={styles.imageWrapper} role='presentation' onClick={setYtPlayer}>
        <img className={styles.productImg} src={src} alt='img' />
      </div>
      <div className={styles.infoBox}>
        <p>{itemId}</p>
        <button type='button' onClick={onFaboriteHandler}>
          {isCheck ? (
            <FavoriteIcon fill='black' stroke='black' strokeWidth='20' strokeOpacity='0.8' />
          ) : (
            <FavoriteIcon fill='white' stroke='black' strokeWidth='20' strokeOpacity='0.8' />
          )}
        </button>
      </div>
    </div>
  )
}
export default ProductItem
