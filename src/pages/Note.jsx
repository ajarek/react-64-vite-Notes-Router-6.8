import React from 'react'
import { redirect } from 'react-router-dom'
import { saveStorage } from '../helpers/localStorage'
import FormContent from '../components/FormContent'
export const noteAction = async ({ request }) => {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try {
    saveStorage(formData, 'notes')
    return redirect('/')
  } catch (err) {
    throw new Error(err.message)
  }
}

const Note = () => {
  return (
    <FormContent
      headerTitle={'Add a new note'}
      buttonName={'Add Note'}
    />
  )
}

export default Note
