/* eslint-disable react/destructuring-assignment */
import { JSXElementConstructor, Key, ReactElement, ReactFragment, useEffect, useState } from 'react'
import { useMount } from 'react-use'
import store from 'store'
import styles from './favorite.module.scss'

interface Props {
  itemId: string
  src: string
}
const Favorite = (favorite: Array<Props> | []) => {
  const favoriteArr = Object.values(favorite)
  console.log(favoriteArr)
  return (
    <div className={styles.favoriteItem}>
      <h3>관심 상품</h3>
      <ul>
        {favoriteArr ? (
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
