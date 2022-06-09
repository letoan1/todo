import React from 'react'
import ListContent from './ListContent'
import ButtonSpecial from '../Button/ButtonSpecial'
import ButtonRemove from '../Button/ButtonRemove'
import ButtonEdit from '../Button/ButtonEdit'
import Line from '../Line/Line'
import '../Button/style.scss'

export default function ListItem({ handleDelete, tasks , handleEdit, handleCompleted }) {
	return (
		<div>
			{tasks.map((task, index) => (
				<div key={index} className="utilities" >
					<ButtonSpecial index={index} handleCompleted={handleCompleted} />
					<div className="list-item">
						<div className={task.completed === true ? 'line-through' : ''}>
							<ListContent content = {task.task} />
						</div>
						<div style = {{ display: 'flex', padding: '20px 0'}}>
							<ButtonEdit handleEdit={() => handleEdit(task.task, index)}/>
							<ButtonRemove handleDelete = {() => handleDelete(index)} />
						</div>
					</div>
					<Line />
				</div>
			))}

		</div>
	)
}