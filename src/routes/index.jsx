import { Routes, Route, useLocation } from 'react-router-dom'
import styles from './Routes.module.scss'

const App = () => {
  // const theme = useAppSelector(getTheme)
  // const { pathname, search } = useLocation()

  // useMount(() => {
  //   initializeGA()
  //   document.documentElement.setAttribute('color-theme', theme)
  // })

  // useEffect(() => {
  //   gaPV(`${pathname}${search}`)
  // }, [gaPV, pathname, search])

  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<div>hi</div>} />
          {/* <Route path='weather' element={<Weather />}>
            <Route path=':city' element={<Weather />} />
          </Route> */}
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
