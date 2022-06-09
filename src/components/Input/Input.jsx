import React from 'react'
import './style.scss'

export default function Input({ inputRef, task, setTask }) {

  return (
    <input
      type="text"
      ref = {inputRef}
      className='add-input'
      placeholder="Add new task in here"
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
  )
}
