import Slider from 'react-slick'
import styles from './hobbyList.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from 'components/SliderItem'
import ProductList from '../ProductList'
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
  'https://lh4.googleusercontent.com/jGAm8iui7CMm4TExoMKjYRVJocA-TQ0g_hrrShAwnzGJ1ER8HzJb8Kf9Rah2_5NUTPx1tA0KGE14bzrz4CfH=w2216-h2488-rw',
  'https://lh4.googleusercontent.com/sXygbp6zljaouICyZEEILTr9kwD6c271Xpc4g2UigWHJINisSFHlpWVWxkRYQipJtmX20vAGNQpfgz3Zfmo4=w2216-h2488-rw',
  'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
  'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
  'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
]

const HobbyContent = () => {
  const [favorite, setFavorite] = useState([])
  // const [isFavorite, setIsFavorite] = useState(false)

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
export default HobbyContent
