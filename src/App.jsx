import { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import Main, { mainLoader } from './layouts/Main'
import Dashboard from './pages/Dashboard'
export const AppContext = createContext()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        // loader: dashboardLoader,
        // action: dashboardAction,
        errorElement: <Error />,
      },
     
     
    ],
  },
])
function App() {
  const [toggle, setToggle]=useState(false)

  return (
    <div className="App" style={toggle?{background:'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',color:'white'}:{}}>
        <AppContext.Provider value={{toggle, setToggle}}>
       <RouterProvider router={router} />
       </AppContext.Provider>

    </div>
  )
}

export default App
