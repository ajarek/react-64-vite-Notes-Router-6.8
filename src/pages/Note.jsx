import React, { useRef, useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { saveStorage } from '../helpers'

export const noteAction = async ({ request }) => {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try {
    saveStorage(formData)
    return formData
  } catch (err) {
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
        <input
          type='hidden'
          name='DATE'
          value={new Date()}
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
