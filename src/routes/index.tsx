import { Routes, Route } from 'react-router-dom'
import HobbyList from './HobbyList'
import styles from './routes.module.scss'

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
          <Route path='/' element={<HobbyList />} />
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
