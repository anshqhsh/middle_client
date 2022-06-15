## MIDDLE

### Introduction
Middle : 내 취향을 추천 관련 제품을 추천 스크랩을 할 수 있고 댓글로 취향에 대해 이야기 할 수 있는 플랫폼

### Deploy
[![Netlify Status](https://api.netlify.com/api/v1/badges/64ce6a32-2368-4e7f-9b47-ed57232852f9/deploy-status)](https://app.netlify.com/sites/middleclient/deploys)

### 폴더구조

```
middle_client
├─ src
│  ├─ assets
│  │  ├─ image
│  │  │  ├─ index.js
│  │  │  ├─ itemImage
│  │  │  └─ slideImage
│  │  └─ svgs
│  ├─ components
│  │  ├─ Button
│  │  ├─ Comments
│  │  │  ├─ CommentInput
│  │  │  ├─ CommentItem
│  │  ├─ Header
│  │  ├─ LoadingSpiner
│  │  ├─ ProductList
│  │  │  ├─ ProductItem
│  │  ├─ SliderItem
│  │  ├─ Youtube
│  │  │  ├─ YoutubeItem
│  │  │  ├─ YoutubePlayer
│  │  ├─ favorite
│  │  │  ├─ favoriteItem
│  │  └─ layout
│  ├─ hooks
│  │  └─ worker
│  ├─ routes
│  │  ├─ DetailPage
│  │  ├─ Home
│  ├─ services
│  ├─ states
│  ├─ styles
│  │  ├─ base
│  │  ├─ constants
│  │  └─ mixins
│  ├─ types
│  └─ utils
├─ tsconfig.json
└─ yarn.lock

```

### 기술 Stack

- TypeScript
- React
- redux-toolkit
- React Router
- React-query
- Axios
- react-slick
- storejs
- dayjs
- YoutubeAPi
- SCSS
- esLint

### 구현 기능
- react-slick으로 Carousel 구현
- store를 활용한 관심상품 구현
- ReactQuery를 이용하여 Youtube API를 받아와 관련상품 유튜브에서 검색 최상위 4개 영상을 list에 보여줌(갯수 기능 추가 예정)
- 각 영상 썸네일을 선택하면 하단에 youtube영상 출력 
- 각 아이템 선택시 해당 아이템 관련 영상 API 호출
- 관심상품 데이터를 localstorage로 관리
- 댓글 기능 

### 미 구현 
- 서버 연결 
- Router를 이용한 홈 화면과 각 아이템 소개 페이지 
