import Slider from 'react-slick'
import styles from './hobbyList.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from 'components/SliderItem'
import ProductList from '../ProductList'
import Youtube from 'components/Youtube'
import store from 'store'
import { useEffect, useState } from 'react'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
const srcs = [
  'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
  'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
  'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
  'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
  'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
]

const HobbyContent = () => {
  const [favorite, setFavorite] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('favorite')) {
      setFavorite(store.get('favorite'))
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [])

  return (
    <div className={styles.content}>
      <div className={styles.img_container}>
        <Slider {...settings}>
          {srcs.map((value) => {
            return <SliderItem key={value} src={value} />
          })}
        </Slider>
        <ProductList />
        <Youtube />
      </div>
    </div>
  )
}
export default HobbyContent
