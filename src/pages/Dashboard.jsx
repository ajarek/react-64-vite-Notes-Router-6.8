import React, { useEffect, useState, useContext } from 'react'
import { useLoaderData, redirect, useNavigate } from 'react-router-dom'
import { fetchStorage } from '../helpers/localStorage'
import { randomArray } from '../helpers/randomArray'
import { deleteStorage, saveStorage } from '../helpers/localStorage'
import { AppContext } from '../App'
export const dashboardLoader = () => {
  const data = fetchStorage('notes') || []
  return data
}

const Dashboard = () => {
  const data = useLoaderData()

  const { searchTerm, setSearchTerm, list, setList } = useContext(AppContext)
  const navigate = useNavigate()
  useEffect(() => {
    setList(data)
  }, [])

  const handleDelete = (itemId) => {
    const updatedList = list.filter((item) => item.id !== itemId)
    localStorage.setItem('notes', JSON.stringify(updatedList))
    setList(updatedList)
  }

  const filteredItems = list.filter((item) => {
    
    return (
      item.newTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.newDescription.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const colorArray = [
    '#ff7eb9',
    '#ff65a3',
    '#7afcff',
    '#0eeaed',
    '#feff9c',
    '#fff740',
  ]

  const handleEdit = (e, id) => {
    if (e.target.className !== 'edit-button') {
      navigate(`/note-edit/${id}/`)
     
    }
    
  }

  return (
    <div className='dashboard'>
      {filteredItems && filteredItems.length > 0 ? (
        filteredItems
          .sort((a, b) => {
            if (a.date < b.date) return 1
            if (a.date > b.date) return -1
            return 0
          })
          .map((note) => {
            return (
              <div
                className='card'
                key={note.id}
                style={{ background: randomArray(colorArray) }}
                onClick={(e) => handleEdit(e, note.id)}
              >
                <div className='card-body'>
                  <h5 className='card-title'>{note.newTitle}</h5>
                  <p className='card-text'>{note.newDescription}</p>
                </div>
                <div className='date'>
                  <p className='card-date'>{note.date}</p>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className='edit-button'
                  >
                    🗑️
                  </button>
                </div>
              </div>
            )
          })
      ) : (
        <p>No data! ...Add Note</p>
      )}
    </div>
  )
}

export default Dashboard
