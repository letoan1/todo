import React from 'react'
import ListItem from './ListItem'
import './style.scss'

export default function List({ handleDelete, completedTasks, getTaskInCurrentPage, filteredTodos,buttonRef }) {

	return (
		<div className="list-wrapper">
			<ListItem
				// tasks={tasks}
				completedTasks={completedTasks}
				handleDelete={handleDelete}
				getTaskInCurrentPage={getTaskInCurrentPage}
				filteredTodos={filteredTodos}
				buttonRef={buttonRef}
			/>
		</div>
	)
}
