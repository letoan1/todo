import React from 'react'
import './style.scss'

export default function Select({ statusHandler }) {
  return (
	<div className="select">
		<select onChange={statusHandler} name="todos" className="filter-todo">
		<option value="all">All</option>
		<option value="completed">Completed</option>
		<option value="uncompleted">Uncompleted</option>
		</select>
  	</div>
  )
}
