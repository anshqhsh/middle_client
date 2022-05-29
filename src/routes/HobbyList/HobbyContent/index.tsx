import styles from './hobbyList.module.scss'

const HobbyContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.img_container}>
        <img
          src='https://s.pstatic.net/static/newsstand/2022/0526/article_img/new_main/9077/094552_001.jpeg'
          alt='이미지'
        />
      </div>
    </div>
  )
}
export default HobbyContent
