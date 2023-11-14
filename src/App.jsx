import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Error from './pages/Error'
import Home from './pages/Home'
import Coctail from './pages/Coctail'
import About from './pages/About'
import NewsLetter from './pages/NewsLetter'
import { Suspense } from 'react'
import Spinner from './components/Spinner'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/coctail/:id',
        element: <Coctail />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/news',
        element: <NewsLetter />,
      },
    ],
  },
])

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
