import styles from './youtubePlayer.module.scss'

interface Props {
  videoId: string
}

const YoutubePlayer = ({ videoId }: Props) => {
  return (
    <div>
      <section className={styles.videoContainer}>
        <iframe
          className={styles.video}
          id='ytplayer'
          // type='text/html'
          title='youtube video'
          width='100%'
          height='800'
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder='0'
          allowFullScreen
        />
      </section>
    </div>
  )
}
export default YoutubePlayer
