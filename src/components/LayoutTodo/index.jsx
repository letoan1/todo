import React from 'react'
import Header from '../Header/Header'
import Input from '../Input/Input'
import Line from '../Line/Line'
import ButtonAdd from '../Button/ButtonAdd'
import List from '../List'
import Panigation from '../Panigation/Panigation'

export default function LayoutTodo() {
	const [task, setTask] = React.useState('')
	const [tasks, setTasks] = React.useState([])
	const [idTask, setIdTask] = React.useState('')
	const [isEdit, setIsEdit] = React.useState(false)
	const [tasksRemaining, setTasksRemaining] = React.useState(0)
	const [currentPage, setCurrentPage] = React.useState(1)
	const [itemsPerPage, setItemsPerPage] = React.useState(5)

	const inputRef = React.useRef()

	React.useEffect(() => {
		setTasksRemaining(tasks.filter(task => task.completed).length)
	})

	const handleAdd = () => {
		if(!task) {
			alert('Please enter a value')
		}else{
			setTasks([ ...tasks, { task, completed: false }])
			setTask("")
			inputRef.current.focus()
		}
	}

	const handleEdit = (value, index) => {
		setIsEdit(!isEdit)
		setTask(value)
		setIdTask(index)
		inputRef.current.focus()
	}

	const handleUpdate = () => {
		setTasks((prev) => {
		  if (tasks.length > 0) {
			prev[idTask] = tasks
		  }
		  return prev
		})
		setIdTask("")
		setTask("")
		setIsEdit(!isEdit)
	}

	const handleCompleted = (index) => {
		const newTasks = [...tasks]
            newTasks[index].completed = true
        setTasks(newTasks)
	}

	const handleDelete = (index) => {
		tasks.splice(index, 1)
		setTasks([...tasks])
	}

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = tasks.task ? tasks.slice(indexOfFirstItem, indexOfLastItem) : []

	return (
		<>
			<Header title={'TO DO LIST APPLICATION'} tasksRemaining={tasksRemaining} />
			<div className="crossbar">
			<Input
				inputRef={inputRef}
				task={task}
				setTask={setTask}
			/>
			<ButtonAdd
				isEdit={isEdit}
				handleAdd={handleAdd}
				handleUpdate={handleUpdate}
			/>
			</div>
			<Line fullWidth />
			<List
				handleDelete={handleDelete}
				tasks={tasks}
				handleEdit={handleEdit}
				handleCompleted={handleCompleted}
			/>
			<Line fullWidth />
			<Panigation
				tasks={tasks}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				itemsPerPage={itemsPerPage}
			/>
		</>
	)
}
