import styles from './header.module.scss'

const Header = () => {
  return (
    <div>
      <div className={styles.header_main}>
        <div className={styles.header_inner}>
          <h1>MIDDLE</h1>
          <div className={styles.header_center}>
            <p>Desk-SetUp</p>
          </div>
          <div className={styles.header_right}>favorite</div>
        </div>
      </div>
    </div>
  )
}

export default Header
