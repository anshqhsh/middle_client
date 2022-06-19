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

const articlesData = [
  {
    key: 1,
    title: 'DESK-SETUP',
    firstParagraph: '허먼밀러',
    secondParagraph:
      '1994년 처음 등장할 때부터 고급 사무용 의자의 대명사로 취급받고 있는 의자 90년대 중후반의 닷컴 버블 시기에 미국의 스타트업들이 엄청나게 구매하여 IT 기업을 상징하는 아이템으로 여겨지기도 한다. 목받침이 없는 유선형 디자인에 100% 풀 메쉬 디자인이 특징 굉장히 탄탄하면서도 안락한 착석감을 보여 준다. 체형과 앉은 자세에 따라 등판과 좌판이 움직여 피트를 맞춰주는 부분은 가히 예술적일 지경이다.',
    thirdParagraph:
      '하루종일 앉아 있는 개발자에게 필요하다 생각하여 구매한 제품 그동안 앉았던 의자들이 불편하여 허리 통증을 달고 살았으나, 이 의자에 앉고부터 많이 나아졌다. 허리를 소중이 여기는 사람에겐 강추! 꼭 에어론이 아니더라도 다른 의자들도 앉아보고 구매를 하자.',
  },
  {
    key: 2,
    title: '벨킨 부스트업 프로 애플워치 휴대용 고속 충전기 ',
    firstParagraph:
      '애플워치 스탠드로 가장 마음에 드는 제품, 애플워치7의 고속 충전을 지원하여 80%까지 45분이면 충전이 가능',
    secondParagraph:
      '스탠드 자체의 자유도가 돋보임 충전부가 90도로 움직이며, 높낮이 조절이 가능하여 용두 있는 부분으로도 충전이 가능하여 아무렇게나 놓아도 충전이 잘 된다.',
    thirdParagraph: 'usb c타입로 충전이 가능하여 다양한 디바이스에서 충전이 가능한 것도 장점',
  },
  {
    key: 3,
    title: '오디오 엔진 a2 ',
    firstParagraph:
      '내가 샀을땐 이가격에 이만큼 예쁘고 적당한 성능에 pc오디오는 없었으나, 현재는 너무 알려져서 가격이 올라가 좀 아쉬운 pc오디오',
    secondParagraph:
      '탄탄한 기본 성능에 넣거나 뺄 것 없이 군더더기 없는 화이트 디자인을 가진 오디오, 음질이 엄청 뛰어난 건 아니여서 아쉬운 소리를 들려주나 어느 책상과도 잘 어울림',
    thirdParagraph: '가격이 올라 비싼가격이긴 하지만 여전히 어느 데스크 셋업에 들어가도 잘 어울려서 추천!',
  },
  {
    key: 4,
    title: 'dell 3219q',
    firstParagraph:
      '항상 미국 드라마를 보다 보면 모니터 뒤에 적힌 dell이라는 브랜드가 적혀있다. 그만큼 많이 사용하는 모니터 브랜드이다.',
    secondParagraph:
      '3219q는 32인치 4k hdr을 지원하는 모델로 맥북의 화질이 워낙 좋다 보니 그에 맞는 모니터를 물려주고 싶어서 구매했었다.',
    thirdParagraph:
      '아쉬운 점은 맥은 글레어 패널이고 dell은 논 글래어 패널이다 보니 차이가 확실히 있고, 비싼 모니터이긴 하지만 맥에 비해선 아쉽다는 생각이 들었다.',
  },
  {
    key: 5,
    title: 'macbook pro 16 2019',
    firstParagraph:
      '처음 맥은 2017년에 나온 15인치 모델을 사용했었다. 그때 만족감이 좋아서 신형 16인치 i9모델은 얼마나 좋을까 라고 기대하고 구매했던 제품',
    secondParagraph:
      '그런데... i9의 발열과 뽑기의 실패 탓인지 버벅이는 한글 입력, 팬소음으로 아직도 고통받고 있다... 꼭 다음 맥은 더 가볍고 조용한 14인치로....',
  },
]

const DetailPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Slider {...settings}>
          {SliderSrcs.map((value) => {
            return <SliderItem key={value} src={value} />
          })}
        </Slider>
        {articlesData.map((data) => (
          <Article key={data.key} data={data} />
        ))}
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
