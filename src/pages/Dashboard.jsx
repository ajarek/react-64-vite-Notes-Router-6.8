import React from 'react'
import { fetchStorage } from '../helpers/localStorage'
import { randomArray } from '../helpers/randomArray'

const Dashboard = () => {
  const data = fetchStorage('notes') || []
  const colorArray=['#ff7eb9','#ff65a3','#7afcff','#0eeaed','#feff9c','#fff740']
  return (
    <div className='dashboard'>
      {data && data.length > 0 ? (
        data.map((note) => {
          return (
            <div
              className='card'
              key={note.id}
              style={{background:randomArray(colorArray)}}
            >
              <div className='card-body'>
                <h5 className='card-title'>{note.newTitle}</h5>
                <p className='card-text'>{note.newDescription}</p>
              </div>
              <div className='date'>
                <p className='card-date'>{note.date}</p>
                <button>🗑️</button>
              </div>
            </div>
          )
        })
      ) : (
        <p>no data</p>
      )}
    </div>
  )
}

export default Dashboard
