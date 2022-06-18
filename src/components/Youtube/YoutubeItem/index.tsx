import { ISnippet } from 'types/youtube'
import styles from './youtubeItem.module.scss'

interface Props {
  videoId: string
  snippet: ISnippet
  setVideoId: React.Dispatch<React.SetStateAction<string>>
}
const YoutubeItem = ({ videoId, snippet, setVideoId }: Props) => {
  const onClickHandler = () => {
    setVideoId(videoId)
  }

  return (
    <div className={styles.container}>
      <button type='button' className={styles.video} onClick={onClickHandler}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='video thumbnail' />
        <div className={styles.metadata}>
          <p className={styles.title}>
            {snippet.title} <strong>- {snippet.channelTitle}</strong>
          </p>
        </div>
      </button>
    </div>
  )
}

export default YoutubeItem
