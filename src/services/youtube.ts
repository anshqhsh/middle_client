import { axios } from 'hooks/worker'
import { IYoutube } from 'types/youtube'

interface Params {
  maxResults: number
  q: string
}

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
