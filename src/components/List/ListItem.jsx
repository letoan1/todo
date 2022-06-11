import React from 'react'
import ListContent from './ListContent'
import ButtonSpecial from '../Button/ButtonSpecial'
import ButtonRemove from '../Button/ButtonRemove'
import Line from '../Line/Line'
import '../Button/style.scss'

export default function ListItem({ handleDelete, completedTasks, getTaskInCurrentPage, filteredTodos }) {
	return (
		<div>
			{filteredTodos.map((task, index) => (
				<div key={index} className="utilities" >
					<div className="list-item">
						<div style={{width: '450px'}} className={task.completed ? 'line-through' : ''}>
							<ListContent content = {task.task} />
						</div>
						<div className={task.id} style = {{ display: 'flex', padding: '20px 0'}}>
							<ButtonSpecial completed={task.completed} completedTasks={() => completedTasks(index)} />
							<ButtonRemove handleDelete = {() => handleDelete(task.id)} />
						</div>
					</div>
					<Line />
				</div>
			))}
		</div>
	)}