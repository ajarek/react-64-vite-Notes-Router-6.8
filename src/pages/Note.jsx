import React, { useRef, useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

export async function dashboardAction({request}) {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try{
  localStorage.setItem('notes', JSON.stringify(formData))
  return formData
}
catch(err){
  throw new Error(err.message)
}

}




const Note = () => {
  const focusRef = useRef()
  
  useEffect(() => {
    focusRef.current.focus()
  })

  

  

  return (
    <div className='note'>
      <h2>Add a Note</h2>
      <Form
        className='form'
        method='post'
        // onSubmit={handleSubmit}
      >
        <div className='form-input'>
          <label htmlFor='newTitle'>Title</label>
          <input
            type='text'
            name='newTitle'
            id='newTitle'
            placeholder='e.g.,Title '
            required
            ref={focusRef}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='newDescription'>Description</label>
          <textarea
            name='newDescription'
            id='newDescription'
            placeholder='e.g., Lorem... '
            required
          />
        </div>
        <input
          type='hidden'
          name='id'
          value={uuidv4()}
        />
        <div className='form-input'>
          <button
            type='submit'
            className='btn btn-dark'
          >
            Add Note
          </button>
        </div>
      </Form>
    </div>
  )
}

export default Note
