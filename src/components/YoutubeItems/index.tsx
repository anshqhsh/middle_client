import { useQuery } from 'react-query'
import { getYoutubeVideoApi } from 'services/youtube'

import { isAxiosError } from 'utils/axios'

const YoutubeItems = () => {
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
  console.log(data)
  if (!data) return null
  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      <h1>YoutubeItems</h1>
      {data.map((item) => {
        return <div key={item.id.videoId}>{item.snippet.title}</div>
      })}
    </div>
  )
}
export default YoutubeItems
