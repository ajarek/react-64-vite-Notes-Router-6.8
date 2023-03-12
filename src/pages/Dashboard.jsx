import React, { useEffect, useState, useContext } from 'react'
import { useLoaderData,redirect } from 'react-router-dom'
import { fetchStorage } from '../helpers/localStorage'
import { randomArray } from '../helpers/randomArray'
import { deleteStorage, saveStorage} from '../helpers/localStorage'
import { AppContext } from '../App'
export const dashboardLoader = () => {
  const data = fetchStorage('notes') || []
  return data
}

const Dashboard = () => {
  const data = useLoaderData()
  const [list, setList] = useState([])
  const { searchTerm, setSearchTerm } = useContext(AppContext)
  
  useEffect(() => {
    setList(data);
  }, []);

  const handleDelete = (itemId) => {
    const updatedList = list.filter(item => item.id !== itemId);
    localStorage.setItem('notes', JSON.stringify(updatedList));
    setList(updatedList);
  }

  const filteredItems = list.filter(item => {
    return item.newTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
           item.newDescription.toLowerCase().includes(searchTerm.toLowerCase())
  });


  const colorArray = [
    '#ff7eb9',
    '#ff65a3',
    '#7afcff',
    '#0eeaed',
    '#feff9c',
    '#fff740',
  ]

  return (
    <div className='dashboard'>
      {filteredItems && filteredItems.length > 0 ? (
        filteredItems.sort((a, b) => a.date - b.date).map((note) => {
          return (
            <div
              className='card'
              key={note.id}
              style={{ background: randomArray(colorArray) }}
            >
              <div className='card-body'>
                <h5 className='card-title'>{note.newTitle}</h5>
                <p className='card-text'>{note.newDescription}</p>
              </div>
              <div className='date'>
                <p className='card-date'>{note.date}</p>
                <button onClick={()=>handleDelete(note.id)}>🗑️</button>
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
