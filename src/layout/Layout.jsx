import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout({ isLoading }) {
  return (
    <div className="relative min-h-screen">
      <div className="bg-green-50 ">
        <Navbar />
        <main className="mx-[15%] py-20">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
