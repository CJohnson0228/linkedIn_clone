import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
