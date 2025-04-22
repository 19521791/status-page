import { Outlet } from 'react-router-dom'
import Header from '@components/layout/Header'
import Sidebar from '@components/layout/SideBar'
import Footer from '@components/layout/Footer'

const Content = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row overflow-hidden">
        <Sidebar />
        <div
          className="flex-1 overflow-auto scroll-smooth"
          style={{
            color: 'var(--mui-palette-text-primary)',
            backgroundColor: 'var(--mui-palette-background-default)',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Content