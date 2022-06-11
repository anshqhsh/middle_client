import { ImgSrcs } from 'assets/image'
import { useState } from 'react'
import { useMount } from 'react-use'
import styles from './favoriteItem.module.scss'

interface Props {
  item: string
}
const FavoriteItem = ({ item }: Props) => {
  // TODO: 대체 이미지 찾기
  const [imgSrc, setImgSrc] = useState(
    'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg'
  )
  useMount(() => {
    ImgSrcs.map((e) => {
      e.itemId === item && setImgSrc(e.src)
    })
  })
  return (
    <li className={styles.productImg}>
      <img src={imgSrc} alt='img' />
      <h4>{item}</h4>
    </li>
  )
}
export default FavoriteItem
