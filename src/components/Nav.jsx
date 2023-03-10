import { React, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

const Nav = ({ title }) => {
  const { toggle, setToggle } = useContext(AppContext)
  return (
    <div className='nav'>
      <Link
        to={'/'}
        className={'link'}
      >
        <div className='title'>
          <h1 style={toggle ? { color: 'white' } : {}}>{title}</h1>
          <img
            src='/logo.png'
            alt=''
          />
        </div>
      </Link>
      <Link
        to={'/note'}
        className='link'
      >
        <div className='toggle-btn'>
          <button>Add Note ➕</button>
        </div>
      </Link>
      <div className='toggle-btn'>
        <button onClick={() => setToggle(!toggle)}>Toggle Mode</button>
      </div>
    </div>
  )
}

export default Nav
