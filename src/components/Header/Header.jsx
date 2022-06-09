import React from 'react'

export default function Header({ title, tasksRemaining }) {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <h4 style={{ textAlign: 'center', color: '#7cd411' }}>Task completed ({tasksRemaining})</h4>
    </>
  )
}
