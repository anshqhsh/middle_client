import Header from '../../components/Header'
import HobbyContent from './HobbyContent'
import styles from './hobbyList.module.scss'

const HobbyList = () => {
  return (
    <div className={styles.hobby_container}>
      <Header />
      <HobbyContent />
    </div>
  )
}

export default HobbyList
