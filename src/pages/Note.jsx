import React, {useRef,useEffect, useState} from 'react'
import { Form } from 'react-router-dom'
const Note = () => {
  const focusRef= useRef()
  const [formData, setFormData] = useState({});
  useEffect(()=>{
   focusRef.current.focus();
  })

  function handleSubmit(event) {
   
    event.preventDefault();
    
    const data = Object.fromEntries(new FormData(event.target).entries());
    setFormData(data)
  
 
}
  
  
  console.log(formData);
  
  
  

  
  return (
    <div className='note'>
      <h2>Add a Note</h2>
      <Form
        className='form'
        method='post'
        onSubmit={handleSubmit}
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
             Add Note     
        </button>
        </div>
      </Form>
    </div>
  )
}

export default Note