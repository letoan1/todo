import React from 'react'
import Header from '../Header/Header'
import Input from '../Input/Input'
import Line from '../Line/Line'
import ButtonAdd from '../Button/ButtonAdd'
import List from '../List'
import Panigation from '../Panigation/Panigation'
import Select from '../Select/Select'

export default function LayoutTodo() {
	const [task, setTask] = React.useState('')
	const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem('todoList')) ?? [])
	const [tasksRemaining, setTasksRemaining] = React.useState(0)
	const [currentPage, setCurrentPage] = React.useState(1)
	const [status, setStatus] = React.useState('all')
	const [filteredTodos, setFilteredTodos] = React.useState([])
	const LIMIT_TASK_IN_PAGE = 5

	const inputRef = React.useRef()

	React.useEffect(() => {
		console.log('asdasd');
		setTasksRemaining(tasks.filter(task => task.completed).length)
		document.title = task
		localStorage.setItem('todoList', JSON.stringify(tasks))
		filterHandler()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tasks, task, status])

	const filterHandler = () => {
		switch(status) {
			case 'completed':
				setFilteredTodos(tasks.filter(task => task.completed === true))
				break
			case 'uncompleted':
				setFilteredTodos(tasks.filter(task => task.completed === false))
				break
			default:
				setFilteredTodos(tasks)
				break
		}
	}

	const statusHandler = (e) => {
		setStatus(e.target.value)
	}

	const handleAdd = () => {
		if(!task.trim()) {
			alert('Please enter a value')
		}else{
			setTasks([{ id: new Date().getTime(), task, completed: false }, ...tasks])
			setTask("")
			inputRef.current.focus()
		}
	}

	const completedTasks = (index) => {
		const newTasks = [...tasks]
        if(!newTasks[index].completed) {
			newTasks[index].completed = true
		}else{
			newTasks[index].completed = false
		}

        setTasks(newTasks)
	}

	const handleDelete = (id) => {
		console.log('Delete', id)
		const deleteTask = tasks.filter(task => task.id !== id)
		setTasks(deleteTask)
	}

	const getTaskInCurrentPage = () => {
		const startIndex = currentPage * LIMIT_TASK_IN_PAGE - LIMIT_TASK_IN_PAGE
		return [...tasks.slice(startIndex, startIndex + LIMIT_TASK_IN_PAGE)]
	}

	const handleSetCurrentPage = (page) => {
		setCurrentPage(page)
	}

	return (
		<>
			<Header
				title={'TO DO LIST APPLICATION'}
				tasksRemaining={tasksRemaining}
			/>
			<div className="crossbar">
			<Input
				inputRef={inputRef}
				task={task}
				setTask={setTask}
				onKeyDown={handleAdd}
			/>
			<ButtonAdd
				handleAdd={handleAdd}
			/>
			<Select
				statusHandler={statusHandler}
			/>
			</div>
			<Line fullWidth />
			<List
				handleDelete={handleDelete}
				// tasks={tasks}
				completedTasks={completedTasks}
				getTaskInCurrentPage={getTaskInCurrentPage()}
				filteredTodos={filteredTodos}
			/>
			<Line fullWidth />
			<Panigation
				currentPage={currentPage}
				tasks={tasks}
				limit={LIMIT_TASK_IN_PAGE}
				handleSetCurrentPage={handleSetCurrentPage}
			/>
			{/* <Form /> */}
		</>
	)
}
