import { Routes, Route } from 'react-router-dom'
import HobbyMain from './HobbyMain'
import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<HobbyMain />} />
          {/* <Route path='/home' element{<></>} */}
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
