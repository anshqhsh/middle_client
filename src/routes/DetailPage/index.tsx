import Slider from 'react-slick'
import styles from './hobbyList.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from 'components/SliderItem'
import ProductList from '../../components/ProductList'
import Youtube from 'components/Youtube'

import { Suspense } from 'react'

import { SliderSrcs } from 'assets/image'
import LoadingSpiner from 'components/LoadingSpiner/LodingSpiner'
import CommentsList from 'components/Comments'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const DetailPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Slider {...settings}>
          {SliderSrcs.map((value) => {
            return <SliderItem key={value} src={value} />
          })}
        </Slider>
        <ProductList />
        <Suspense fallback={<LoadingSpiner />}>
          <Youtube />
        </Suspense>
        <CommentsList />
      </div>
    </div>
  )
}
export default DetailPage
