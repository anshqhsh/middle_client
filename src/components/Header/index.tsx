import { FavoriteIcon } from 'assets/svgs'
import Favorite from 'components/favorite'
import { useState } from 'react'

import styles from './header.module.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickOpenHandler = () => {
    setIsOpen((_isOpen) => !_isOpen)
  }

  return (
    <div>
      <div className={styles.headerMain}>
        <div className={styles.headerInner}>
          <h1>MIDDLE</h1>
          <div className={styles.headerCenter}>
            <p>Desk-SetUp</p>
          </div>
          <button type='button' className={styles.headerRight} onClick={onClickOpenHandler}>
            <FavoriteIcon />
            <span>관심상품</span>
          </button>
          {isOpen && <Favorite isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  )
}

export default Header
