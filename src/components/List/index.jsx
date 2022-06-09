import React from 'react'
import ListItem from './ListItem'
import './style.scss'

export default function List({ handleDelete, tasks, handleEdit, handleCompleted }) {

	return (
		<div className="list-wrapper">
			<ListItem
				tasks={tasks}
				handleEdit={handleEdit}
				handleCompleted={handleCompleted}
				handleDelete={handleDelete}
			/>
		</div>
	)
}
