import React, { useContext} from 'react'
import { AppContext } from '../App'
const Search = () => {
  
  const { searchTerm, setSearchTerm } = useContext(AppContext)
  return (
    <div className='search'>
     <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

    </div>
  )
}

export default Search
