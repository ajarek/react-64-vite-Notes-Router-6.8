import React, { useEffect, useRef } from 'react'

const Search = () => {
  return (
    <div className='search'>
      <input
        type='search'
        name='search'
        id='search'
        placeholder='🔍 type of search'
      />
    </div>
  )
}

export default Search
