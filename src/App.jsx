import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Index from '@pages/dashboard/Index'
import Home from '@pages/Home'
import ServiceDetail from '@pages/ServiceDetail'
import PublicStatus from '@pages/PublicStatus'
import ServiceManagement from '@pages/ServiceManagement'
import MainLayout from './MainLayout'
import PublicLayout from './PublicLayout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/service-status' element={<Index />} />
          <Route path='/service-management' element={<ServiceManagement />} />
          <Route path='/service-management/:uuid' element={<ServiceDetail />} />
        </Route>

        <Route
          path='/status/:slug'
          element={
            <PublicLayout>
              <PublicStatus />
            </PublicLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
