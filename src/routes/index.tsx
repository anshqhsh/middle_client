import Header from 'components/Header'
import { Routes, Route } from 'react-router-dom'
import DetailPage from './DetailPage'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/' element={<DetailPage />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
