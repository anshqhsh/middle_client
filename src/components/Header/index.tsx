import { FavoriteIcon } from 'assets/svgs'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div>
      <div className={styles.headerMain}>
        <div className={styles.headerInner}>
          <h1>MIDDLE</h1>
          <div className={styles.headerCenter}>
            <p>Desk-SetUp</p>
          </div>
          <div className={styles.headerRight}>
            <FavoriteIcon />
            <span>관심상품</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
