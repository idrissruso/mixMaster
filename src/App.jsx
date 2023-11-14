import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { loader as coctailLoader } from './pages/Coctail'
import { Suspense, lazy } from 'react'
import Spinner from './components/Spinner'
import Layout from './layout/Layout'
import Error from './pages/Error'
import { action as homeAction } from './components/SearchBar'

const About = lazy(() => import('./pages/About'))
const NewsLetter = lazy(() => import('./pages/NewsLetter'))
const Home = lazy(() => import('./pages/Home'))
const Coctail = lazy(() => import('./pages/Coctail'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Spinner />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        action: homeAction,
      },
      {
        path: '/coctail/:id',
        element: <Coctail />,
        loader: ({ params }) => coctailLoader({ id: params.id }),
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
  return <RouterProvider router={routes} />
}

export default App
