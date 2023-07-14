import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'

import Dashboard from './pages/Main/Dashboard'
import FoodOrder from './pages/Main/FoodOrder'
import Favorite from './pages/Main/Favorite'
import Message from './pages/Main/Message'
import OrderHistory from './pages/Main/OrderHistory'
import Bills from './pages/Main/Bills'
import Setting from './pages/Main/SettingPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='order' element={<FoodOrder />} />
        <Route path='favorite' element={<Favorite />} />
        <Route path='message' element={<Message />} />
        <Route path='order-history' element={<OrderHistory />} />
        <Route path='bills' element={<Bills />} />
        <Route path='setting' element={<Setting />} />
      </Route>
    </Routes>
  )
}
