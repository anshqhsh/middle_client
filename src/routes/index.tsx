import Header from 'components/Header'
import Layout from 'components/layout'
import { Routes, Route } from 'react-router-dom'

import DetailPage from './DetailPage'
import ErrorPage from './ErrorPage'
import Login from './Login'

const App = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<DetailPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Layout>
  )
}

export default App
