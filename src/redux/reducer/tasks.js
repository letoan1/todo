import { ADD_TODO, UPDATE_TODO, DELETE_TODO, SEARCH_FILTER_CHANGE, GET_TASK_BY_ID } from '../actionTypes';

export const initialState = {
    filters: {
        search: '',
    },
    tasks: [],
    taskDetail: {},
};

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTask = { ...action.payload, status: 'New' };
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            };
        case SEARCH_FILTER_CHANGE:
            return {
                ...state,
                filters: {
                    ...state.tasks,
                    search: action.payload,
                },
            };
        case GET_TASK_BY_ID:
            const id = action.payload;
            const taskDetail = state.tasks.find((task) => task?.id === id);
            return { ...state, taskDetail: taskDetail };
        case DELETE_TODO:
            const idTask = action.payload;
            const deleteTask = state.tasks.filter((task) => task?.id !== idTask);
            return {
                ...state,
                tasks: deleteTask,
            };
        case UPDATE_TODO:
            const updateTask = [...state.tasks];
            updateTask[action.id] = action.payload;
            return {
                ...state,
                tasks: updateTask,
            };
        default:
            return state;
    }
}
