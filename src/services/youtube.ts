import { axios } from 'hooks/worker'
import { IYoutube } from 'types/youtube'

// const config = {
//   method: 'get',
//   url: 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=허먼밀&key=AIzaSyA64j8xdF1Pw-KW8aBRayDMhi-cYfTfP6c',
//   headers: {},
// }

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data))
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

interface Params {
  maxResult: number
  q: string
}
console.log(process.env.REACT_APP_YOUTUBE_API_KEY)

const YOUTUBE_BASE_URL = 'https://youtube.googleapis.com/youtube/v3'
export const getYoutubeVideoApi = (params: Params) =>
  axios.get<IYoutube>(
    `${YOUTUBE_BASE_URL}/search?part=snippet&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    {
      params: {
        ...params,
      },
    }
  )
