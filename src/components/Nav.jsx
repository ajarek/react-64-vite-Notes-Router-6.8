import { React, useState, useContext } from 'react'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

const Nav = ({ title }) => {
  const { toggle, setToggle } = useContext(AppContext)
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className='nav'>
      <div className='nav-wrapper'>
        <Link
          to={'/'}
          className={'link'}
        >
          <div className='title'>
            <h1 style={toggle ? { color: 'white' } : {}}>{title}</h1>
            <img
              src='./logo.png'
              alt=''
            />
          </div>
        </Link>
      </div>
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
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
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#f15e50' : '#080808'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav
