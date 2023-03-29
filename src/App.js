import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import { AppRoutes } from './utils/Routes'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path={AppRoutes.home} element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
