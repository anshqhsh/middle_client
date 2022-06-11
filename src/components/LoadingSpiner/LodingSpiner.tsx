import styles from './loadingSpiner.module.scss'

const LoadingSpiner = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.fist} />
      <span className={styles.second} />
      <span className={styles.third} />
      <span className={styles.forth} />
    </div>
  )
}

export default LoadingSpiner
