import { ReactNode } from 'react'
import styles from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>{children}</div>
    </div>
  )
}
export default Layout
