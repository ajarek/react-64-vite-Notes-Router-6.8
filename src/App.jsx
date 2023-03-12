import { createContext, useState,useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/Error'
import Main, { mainLoader } from './layouts/Main'
import Dashboard, { dashboardLoader } from './pages/Dashboard'
import Note, { noteAction } from './pages/Note'
import NoteEdit, { noteEditAction } from './pages/NoteEdit'
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
        loader: dashboardLoader,
        // action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: 'note',
        element: <Note />,
        action: noteAction,
        errorElement: <Error />,
      },
      {
        path: 'note-edit',
        
        
        errorElement: <Error />,
        children: [
          {
            path: ":id",
            action: noteEditAction,
            element: <NoteEdit />,
            errorElement: <Error />,
          },
          
        ],
      },
    ],
  },
])
function App() {
  const [toggle, setToggle] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([])
 
  return (
    <div
      className='App'
      style={
        toggle
          ? {
              background:
                'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
              color: 'white',
            }
          : {}
      }
    >
      <AppContext.Provider value={{ toggle, setToggle, searchTerm, setSearchTerm,list, setList }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
