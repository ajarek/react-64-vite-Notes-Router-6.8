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
        >
          <span>Go Back</span>
        </button>
        <Link
          to='/'
          className='btn btn-dark'
        >
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Error
