import { useState, useEffect, useRef } from 'react'
import Header from '../Header/Header'
import Input from '../Input/Input'
import Line from '../Line/Line'
import ButtonAdd from '../Button/ButtonAdd'
import List from '../List'
import Panigation from '../Panigation/Panigation'
import Select from '../Select/Select'
import { getAllTasks, deleteTaskById, createTask, getTaskById, updateTaskById } from '../../apis/taskApi'

export default function LayoutTodo() {
	const [task, setTask] = useState('')
	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('todoList')) ?? [])
	const [tasksRemaining, setTasksRemaining] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [status, setStatus] = useState('all')
	const [filteredTodos, setFilteredTodos] = useState([])
	const [showGoToTop, setShowGoToTop] = useState(false)
	const LIMIT_TASK_IN_PAGE = 5

	const inputRef = useRef()
	const buttonRef = useRef()

	useEffect(() => {
		console.log('asdasd');
		setTasksRemaining(tasks.filter(task => task.completed).length)
		document.title = task
		localStorage.setItem('todoList', JSON.stringify(tasks))
		filterHandler()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tasks, task, status])

	useEffect(() => {
		const handleScroll = () => {
			if(window.scrollY >= 200) {
				setShowGoToTop(true)
			}else{
				setShowGoToTop(false)
			}
		}
		window.addEventListener('scroll', handleScroll)

		return(() => {
		window.removeEventListener('scroll', handleScroll)
		})
	}, [])

	useEffect(() => {
		handleGetAllTasks()
	}, [])

	const handleGetAllTasks = async () => {
		try {
			const data = await getAllTasks()
			data && setTasks(data)
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	const handleClickGoToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

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

	const handleAdd = async () => {
		if(!task.trim()) {
			alert('Please enter a value')
		}else{
			const newTask = { id: new Date().getTime(), task, completed: false }
			setTasks([ newTask , ...tasks])
			setTask("")
			inputRef.current.focus()

			try {
				await createTask(newTask)
				await handleGetAllTasks()
			} catch (error) {
				console.log(error);
			} finally {
				setTask('')
			}
		}

	}

	const completedTasks = async (id) => {
		try {
			const taskById = await getTaskById(id)
			await updateTaskById(id, { ...taskById, completed: true })
			await handleGetAllTasks()
		} catch (error) {
			console.log(error);
		}
	}

	const handleDelete = async (id) => {
		try {
			await deleteTaskById(id)
			await handleGetAllTasks()
		} catch (error) {
			console.log(error)
		}
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
				buttonRef={buttonRef}
			/>
			<Line fullWidth />
			<Panigation
				currentPage={currentPage}
				tasks={tasks}
				limit={LIMIT_TASK_IN_PAGE}
				handleSetCurrentPage={handleSetCurrentPage}
			/>
			{/* <Form /> */}
			{showGoToTop && (
			  <button
			  	style = {{
					  position: 'fixed',
					  right: 50,
					  bottom: 20,
					  padding: 10,
					  backgroundColor: 'rgb(53, 170, 248)',
					  border: 'none'
				  }}
				  onClick = {() => handleClickGoToTop()}
			  >
				  Go to top
			  </button>
		  )}
		</>
	)
}
