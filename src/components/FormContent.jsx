import React, { useRef, useEffect } from 'react'
import { Form } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
const FormContent = ({ headerTitle, valueTitle, valueArea, buttonName }) => {
  const focusRef = useRef()

  useEffect(() => {
    focusRef.current.focus()
  })
  return (
    <div className='note'>
      <h2>{headerTitle}</h2>
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
            defaultValue={valueTitle}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='newDescription'>Description</label>
          <textarea
            name='newDescription'
            id='newDescription'
            placeholder='e.g., Lorem... '
            required
            defaultValue={valueArea}
          />
        </div>
        <input
          type='hidden'
          name='id'
          value={uuidv4()}
        />
        <input
          type='hidden'
          name='date'
          value={new Date().toLocaleString('pl-PL')}
        />
        <div className='form-input'>
          <button
            type='submit'
            className='btn btn-dark'
          >
            {buttonName}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default FormContent
