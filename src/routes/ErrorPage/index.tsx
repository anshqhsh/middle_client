import { useNavigate } from 'react-router-dom'
import styles from './errorPage.module.scss'

const ErrorPage = () => {
  const navigate = useNavigate()
  const backHandler = () => {
    navigate('/')
  }
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1>404 에러 페이지</h1>
        <p className={styles.text}>페이지를 찾을 수 없습니다.</p>
        <button className={styles.backBtn} type='button' onClick={backHandler}>
          이전 페이지
        </button>
      </section>
    </div>
  )
}

export default ErrorPage
