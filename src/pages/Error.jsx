import React from 'react'
import { useRouteError, Link, useNavigate } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  return (
    <div className='error'>
      <h1>Oh oh! We have a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div>
        <button
          className='btn btn-dark'
          onClick={() => navigate(-1)}
          style={{
            border: '2px solid violet',
            marginTop: '1rem',
            padding: '0 1rem',
          }}
        >
          <span>Go Back 🔙</span>
        </button>
        <Link
          to='/'
          className='link'
          style={{
            border: '2px solid black',
            fontSize: '1.3rem',
            fontWeight: '500',
            marginTop: '1rem',
            padding: '0 1rem',
          }}
        >
          <span>Go Home 🏠</span>
        </Link>
      </div>
    </div>
  )
}

export default Error
