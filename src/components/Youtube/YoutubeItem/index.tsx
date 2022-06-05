import styles from './youtubeItem.module.scss'

interface Props {
  videoId: string
  snippet: any
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
          <p className={styles.title}>{snippet.title}</p>
        </div>
      </button>
    </div>
  )
}

export default YoutubeItem
