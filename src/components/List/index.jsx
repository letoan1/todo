import React from 'react'
import ListItem from './ListItem'
import './style.scss'

export default function List({ handleDelete, completedTasks, getTaskInCurrentPage, filteredTodos }) {

	return (
		<div className="list-wrapper">
			<ListItem
				// tasks={tasks}
				completedTasks={completedTasks}
				handleDelete={handleDelete}
				getTaskInCurrentPage={getTaskInCurrentPage}
				filteredTodos={filteredTodos}
			/>
		</div>
	)
}
