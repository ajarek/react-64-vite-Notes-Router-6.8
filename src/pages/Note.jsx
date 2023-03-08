import React, {useRef} from 'react'
import { Form } from 'react-router-dom'
const Note = () => {
  const focusRef= useRef()
  return (
    <div>
      <h2>Add a Note</h2>
      <Form
        method='post'
        className='form'
        
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
        <input type="hidden" name='_action' value={'createBudget'} />
        <div className='form-input'>
        <button
          type='submit'
          className='btn btn-dark'
        >
                  
        </button>
        </div>
      </Form>
    </div>
  )
}

export default Note