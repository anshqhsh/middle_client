import { iteratorSymbol } from 'immer/dist/internal'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getYoutubeVideoApi } from 'services/youtube'

import { isAxiosError } from 'utils/axios'
import YoutubeItem from './YoutubeItem'
import YoutubePlayer from './YoutubePlayer'

const Youtube = () => {
  const [videoId, setVideoId] = useState('')
  const maxResult = 5
  const q = '허먼밀러'

  const { data, isLoading } = useQuery(
    ['getYoutubeVideo5resultApi', maxResult, q],
    () => getYoutubeVideoApi({ maxResult, q }).then((res) => res.data.items),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      useErrorBoundary: true,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )
  if (!data) return null
  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {data.map((item) => {
        return (
          <YoutubeItem key={item.id.videoId} videoId={item.id.videoId} snippet={item.snippet} setVideoId={setVideoId} />
        )
      })}
      {videoId ? <YoutubePlayer videoId={videoId} /> : null}
    </div>
  )
}
export default Youtube
