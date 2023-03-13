import React, { useRef, useEffect, useState, useContext } from 'react'
import { Form, redirect, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { saveStorage } from '../helpers/localStorage'
import FormContent from '../components/FormContent'
import { AppContext } from '../App'
let idItems=[]

const deleteItem = (itemId) => {
  const arrayString = localStorage.getItem('notes');
 const myArray = JSON.parse(arrayString);
  const updatedList = myArray.filter((item) => item.id !== itemId)
  localStorage.setItem('notes', JSON.stringify(updatedList))
}


export const noteEditAction = async ({ request }) => {
  
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  
  try {
    saveStorage(formData, 'notes')
    deleteItem(idItems[0])
    return redirect('/')
  } catch (err) {
    throw new Error(err.message)
  }finally{
    
  }
}

const NoteEdit = () => {
  const { searchTerm, setSearchTerm, list, setList } = useContext(AppContext)
  let { id } = useParams()
  const item = list.find((el) => el.id === id)
  idItems.splice(0, idItems.length, id);
  return item ? (
    <FormContent
      headerTitle={'Note Edit'}
      valueTitle={item.newTitle}
      valueArea={item.newDescription}
      buttonName={'Save Note'}
    />
  ) : null
}

export default NoteEdit
