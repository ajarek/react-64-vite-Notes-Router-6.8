import React, { useEffect, useRef } from 'react'

const Search = () => {
  const inputRef = useRef()
  
  useEffect(()=>{
    inputRef.current.focus();
  })

  return (
    <div className='search'>
      <input
        type='search'
        name='search'
        id='search'
        placeholder='🔍 type of search'
        ref={inputRef}
      />
    </div>
  )
}

export default Search
