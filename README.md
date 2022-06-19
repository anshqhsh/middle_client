## MIDDLE

### Introduction
Middle : 내 취향을 추천 관련 제품을 추천 스크랩을 할 수 있고 댓글로 취향에 대해 이야기 할 수 있는 플랫폼

### Deploy
[![Netlify Status](https://api.netlify.com/api/v1/badges/64ce6a32-2368-4e7f-9b47-ed57232852f9/deploy-status)](https://app.netlify.com/sites/middleclient/deploys)
https://middleclient.netlify.app
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

### 작동 화면
| Carousel & 관심상품 | Youtube | 댓글 기능 |
|:---:|:---:|:---:|
|![4](https://user-images.githubusercontent.com/60730765/174062870-f165e9ba-8120-4072-b8f7-1680f977d5b9.gif)|![2](https://user-images.githubusercontent.com/60730765/174062353-435e8688-0a8e-40a1-a5bc-99f9d7d47c4f.gif)|![3](https://user-images.githubusercontent.com/60730765/174062339-cea97e7c-185e-4398-92c6-2c2fb27fab90.gif)

### 실행방법 
```
  git clone https://github.com/anshqhsh/middle_client.git
  .env.copy에 youtubekey값 : AIzaSyDC76DgLDO1ox8xfEpkvztfmI5YNRKrt-k 를 입력하고 .env로 파일명을 변경
  
  yarn & yarn start
```

### 구현 상세
> Carousel

관련 사진을 react-slick을 이용하여 Carousel기능을 구현 

>추천제품

사진에 나온 추천제품을 보여주고 각 아이템을 선택하면 redux-toolkit으로 yotube에서 불러올 데이터를 set하여 Youtube 컴포넌트에서 redux에 저장되어 있는 값을 불러와 React-Query를 이용하여 youtube api를 호출해오고 상품관련 영상에서 불러온 api에서 넘어온 상위 4개의 youtube 영상을 가져옵니다. 

각 아이템에 ⭐️ 모양을 선택 하면 관심상품으로 itemId가 redux에 저장되면서 storejs사용한 localstorage에 key값을 저장하게 됩니다. redux에서 해당 아이템 컴포넌트에 itemId값과 동일한 값이 있다면
⭐️의 아이콘이 변경되어 관심상품에 저장되어 있다는 것을 보여 줍니다. 

>상품관련 영상

추천제품에서 아이템을 선택하여 받아온 값을 이용하여 youtube Api를 react-query로 호출 하면 관련영상 기본적으로 상위 4개의 영상의 썸네일이 보이고 dropdown을 이용하여 영상 갯수를 선택하여 불러올 수 있습니다. reactquery를 이용하여 각 숫자를 클릭했을때 데이터가 캐싱되어 있어 staletime을 이용하여 dropdown 숫자를 바꿀때 마다 호출 하지않고 설정한 staletime 지난 후에 api를 재 호출 합니다. 각 썸네일을 선택하면 하단의 youtube player에서 값이 세팅 되어 재생 가능 합니다. 

>댓글 기능 

서버가 아직 구현 안되어 있어 일단 localstorage를 이용하였습니다.
redux에서 initial 값을 넣어 기본 comment를 redux와 localstorage에 저장해 놓았고, dayjs().diff을 통해 각 comments의 작성 시간을 redux에 저장하고 있습니다. 
hook을 이용하여 userId를 localstorage에 저장 하였고, 저장되어 있는 userId값과 작성자가 동일 하면 
수정, 삭제 버튼이 활성화 되어 수정 삭제된 값이 redux와 localstorage에 저장됩니다. 
수정 버튼을 누르면 컴포넌트화 되어 있는 Input폼으로 변경되어 조건에 따라 값을 update를 할지 put을 할 지 결정하여 데이터를 redux와 localstorage에 저장 하고 있습니다. 

### 배운 점
- redux-toolkit을 처음부터 써본게 처음이라 부족한 점이 있었지만 전역적으로 데이터를 관리하는 것의 장점을 느낄 수 있었습니다. 관심상품의 북마크 기능, youtubeApi를 불러 오기 위한 데이터, 댓글을 전역적으로 관리하여 기존의 부모에서 State를 관리 해야 하는 복잡함에서 벗어나 각 컴포넌트에서 데이터 접근이 쉬웠 던것 같습니다. 또한 redux에서 action을 정의 했기 때문에 원하는 action을 정해서 불러 올 수 있는 것이 좋았 습니다. 
- localstorage를 사용하여 데이터를 관리 하고 있는데 해당 데이터를 어디서 저장을 하고 어디서 불러와야 하는 지 부분에서 어려웠던 점이 있었으나 hook을 적절하게 이용하여 값을 불러 올 수 있었습니다. 
- 처음에 원하던 것은 글 포스팅을 누구나 할 수 있게끔 만들고 싶었는데 Image의 크기가 크면 배포시 image를 불러 올 수 없는 현상을 겪어서 이미지 사이즈 최적화를 진행하여 Image소스를 따로 관리하여 데이터로 뿌려 주었습니다. 차후에 서버를 구축하면 이미지를 어떻게 관리할 지 고민을 해봐야 할 것 같습니다. 

### 아쉬운 점
- UI를 구성하는데 있어서 어려운 점이 있었습니다. 가벼운 UI를 보여주기 위해서 White색을 배경으로 썻더니 완성도면에서 부족해 보이는 문제 점이 있는 것 같습니다. 후에 데이터를 보충해서 더 완성도 있어 보이는 UI로 변경 할 예정입니다. 
- 지금은 데이터를 localstorage에 저장하고 있는데 express로 서버를 구축해서 배포 하는 부분을 찾던 중 아직 어려운 점들이 있어서 서버 제작과 배포를 차 후에 개발하여 연결 할 계획입니다. 
- 로그인 기능이 미구현이라 userId에 따른 댓글 기능이 완성도 면에서 떨어져 보여 로그인 기능도 구현할 예정입니다.
- redux를 혼자서 써본게 처음이라 localstorage와 연동 하는 시점들이 이해 안가거나 어려웠던 점들이 있었습니다. hooks의 기능들과 비동기적가 파악이 좀 어려웠던 것 같습니다. 

### 미 구현 
- 서버 연결 
- Router를 이용한 홈 화면과 각 아이템 소개 페이지 
