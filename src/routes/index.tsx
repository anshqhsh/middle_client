import Header from 'components/Header'
import Layout from 'components/layout'
import { Routes, Route } from 'react-router-dom'
import { useMount } from 'react-use'
import DetailPage from './DetailPage'
import store from 'store'

const App = () => {
  useMount(() => {
    !store.get('userData') && store.set('userData', { userId: 'kim' })
  })
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path='/' element={<DetailPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Layout>
  )
}

export default App
