import Favorite from 'components/favorite'

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
          <Favorite />
        </div>
      </div>
    </div>
  )
}

export default Header
