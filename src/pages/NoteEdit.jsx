import React, { useRef, useEffect, useState,useContext } from 'react'
import { Form, redirect,useParams  } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { saveStorage } from '../helpers/localStorage'
import FormContent from '../components/FormContent'
import { AppContext } from '../App'



export const noteEditAction = async ({ request }) => {
  
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  console.log(data);
  try {
    saveStorage(formData, 'notes')
    
    return redirect('/')
   
  } catch (err) {
    throw new Error(err.message)
  }
}

const NoteEdit = () => {
  const { searchTerm, setSearchTerm,list, setList } = useContext(AppContext)
  let { id } = useParams();
 const item= list.find(el=>el.id === id)
 

 
 
 


 
  return (
    item?
    <FormContent
    headerTitle={'Note Edit'}
    valueTitle={item.newTitle}
    valueArea={item.newDescription}
    buttonName={'Save Note'}
    />
    :null
  )
}

export default NoteEdit
