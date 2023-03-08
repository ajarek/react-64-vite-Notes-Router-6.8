import React,{useState} from 'react'

const Nav = ({title}) => {
  const [toggle, setToggle]=useState(false)
  return (
    <div className='nav'>
      <div className="title">
        
        <h1>{title}</h1>
        <img src="/logo.png" alt="" />
      </div>
      <div className="toggle-btn">
        <button onClick={()=>setToggle(!toggle)}>Toggle Mode</button>
      </div>
    </div>
  )
}

export default Nav