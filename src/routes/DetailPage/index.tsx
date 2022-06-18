import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Suspense } from 'react'

import SliderItem from 'components/SliderItem'
import ProductList from 'components/ProductList'
import Youtube from 'components/Youtube'
import LoadingSpiner from 'components/LoadingSpiner/LodingSpiner'
import CommentsList from 'components/Comments'
import Article from 'components/ArticleLayout'

import styles from './hobbyList.module.scss'

import { SliderSrcs } from 'assets/image'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
const paragraphData = {
  title: 'DESK-SETUP',
  firstParagraph: '허먼밀러',
  secondParagraph:
    '1994년 처음 등장할 때부터 고급 사무용 의자의 대명사로 취급받고 있는 의자 </br> 90년대 중후반의 닷컴 버블 시기에 미국의 스타트업들이 엄청나게 구매하여 IT 기업을 상징하는 아이템으로 여겨지기도 한다. </br> 목받침이 없는 유선형 디자인에 100% 풀 메쉬 디자인이 특징</br>굉장히 탄탄하면서도 안락한 착석감을 보여 준다. </br> 체형과 앉은 자세에 따라 등판과 좌판이 움직여 피트를 맞춰주는 부분은 가히 예술적일 지경이다. ',
}

const DetailPage = () => {
  const { title, firstParagraph, secondParagraph } = paragraphData
  return (
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Slider {...settings}>
          {SliderSrcs.map((value) => {
            return <SliderItem key={value} src={value} />
          })}
        </Slider>
        <Article title={title} firstParagraph={firstParagraph} secondParagraph={secondParagraph} />
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
