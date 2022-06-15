import { useState } from 'react'
import { useQuery } from 'react-query'
import { getYoutubeVideoApi } from 'services/youtube'

import { isAxiosError } from 'utils/axios'
import YoutubeItem from './YoutubeItem'
import YoutubePlayer from './YoutubePlayer'

import styles from './youtube.module.scss'
import { useAppSelector } from 'hooks'
import { getYoutube } from 'states/youtube'

const Youtube = () => {
  const [videoId, setVideoId] = useState('')

  const { maxResults, q } = useAppSelector(getYoutube)
  const { data, isLoading, error } = useQuery(
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
  if (error) return <div>error</div>
  return (
    <div className={styles.youtubeContainer}>
      <h2 className={styles.ytItemTitle}>상품관련 영상</h2>
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
      <div className={styles.ytPlayerContainer}>
        {videoId ? <YoutubePlayer videoId={videoId} /> : <div className={styles.initPlayer}>영상을 선택해주세요</div>}
      </div>
    </div>
  )
}
export default Youtube
