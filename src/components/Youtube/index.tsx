import { useState } from 'react'
import { useQuery } from 'react-query'
import { getYoutubeVideoApi } from 'services/youtube'

import { isAxiosError } from 'utils/axios'
import YoutubeItem from './YoutubeItem'
import YoutubePlayer from './YoutubePlayer'

import styles from './youtube.module.scss'

const Youtube = () => {
  const [videoId, setVideoId] = useState('')
  const maxResults = 4
  const q = '허먼밀러'

  const { data, isLoading } = useQuery(
    ['getYoutubeVideoApi', maxResults, q],
    () => getYoutubeVideoApi({ maxResults, q }).then((res) => res.data.items),
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
      <div className={styles.ytItemContainer}>
        {data.map((item) => {
          return (
            <YoutubeItem
              key={item.id.videoId}
              videoId={item.id.videoId}
              snippet={item.snippet}
              setVideoId={setVideoId}
            />
          )
        })}
      </div>
      {videoId ? <YoutubePlayer videoId={videoId} /> : null}
    </div>
  )
}
export default Youtube
