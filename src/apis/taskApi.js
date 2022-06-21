import axiosClient from "../utils/axiosClient"

export const getAllTasks = async () => {
	const { data } = await axiosClient.get('tasks', {
		params: {
			_sort: 'id',
			_order: 'desc'
		}
	})

	return data
}

export const deleteTaskById = async (id) => {
	await axiosClient.delete(`tasks/${id}`)
}

export const createTask = async (body) => {
	await axiosClient.post('tasks', {...body})
}

export const getTaskById = async id => {
	const { data } = await axiosClient.get(`tasks/${id}`)
	return data
}

export const updateTaskById = async (id, body) => {
	await axiosClient.put(`tasks/${id}`, {
	  ...body
	})
}