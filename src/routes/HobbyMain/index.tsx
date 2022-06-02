import Header from '../../components/Header'
import HobbyContent from './HobbyContent'
import styles from './hobbyList.module.scss'

const HobbyMain = () => {
  return (
    <div className={styles.hobby_container}>
      <Header />
      <HobbyContent />
    </div>
  )
}

export default HobbyMain
