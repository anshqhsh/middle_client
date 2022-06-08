import Slider from 'react-slick'
import styles from './hobbyList.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from 'components/SliderItem'
import ProductList from '../../components/ProductList'
import Youtube from 'components/Youtube'
import store from 'store'
import { useState } from 'react'
import { useMount } from 'react-use'

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
]

const DetailPage = () => {
  const [favorite, setFavorite] = useState([])

  useMount(() => {
    if (localStorage.getItem('favorite')) {
      setFavorite(store.get('favorite'))
      // eslint-disable-next-line no-console
      console.log(favorite)
      // setIsFavorite(true)
    } else {
      // setIsFavorite(false)
    }
  })

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
export default DetailPage
