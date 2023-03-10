import { Outlet, useLoaderData } from 'react-router-dom'
import Nav from '../components/Nav'
import Search from '../components/Search'

export const mainLoader = () => {
  const title = 'Notes'
  return title
}

const Main = () => {
  const title = useLoaderData()
  return (
    <div className='main-layout'>
      <Nav title={title} />
      <Search />
      <Outlet />
    </div>
  )
}

export default Main
