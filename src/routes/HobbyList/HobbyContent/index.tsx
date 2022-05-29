import Slider from 'react-slick'
import styles from './hobbyList.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from 'components/SliderItem'
import ProductList from '../ProductList'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

// TODO 이미지 주소 가져오는 API만들어야할듯
// const imgStorage = [<SliderItem src={src} />]

const HobbyContent = () => {
  const srcs = [
    'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
    'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
    'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
    'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
    'https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg',
  ]
  const SliderItems = () => {}
  return (
    <div className={styles.content}>
      <div className={styles.img_container}>
        <img
          src='https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg'
          alt='이미지'
        />
        <Slider {...settings}>
          {srcs.map((value) => {
            return <SliderItem key={value} src={value} />
          })}
        </Slider>
        <ProductList />
      </div>
    </div>
  )
}
export default HobbyContent
