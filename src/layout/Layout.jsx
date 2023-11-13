import Navbar from '../components/Navbar'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar />
      <main className="mx-[15%] py-20">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
