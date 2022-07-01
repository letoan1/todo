import { ADD_TODO, UPDATE_TODO, DELETE_TODO, SEARCH_FILTER_CHANGE, GET_TASK_BY_ID } from './actionTypes';

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload: {
        id: new Date().getTime().toString(),
        ...payload,
    },
});

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
});

export const updateTodo = (id, payload) => ({
    type: UPDATE_TODO,
    id,
    payload,
});
export const searchFilterChange = (text) => ({
    type: SEARCH_FILTER_CHANGE,
    payload: text,
});

export const actGetTaskById = (id) => ({
    type: GET_TASK_BY_ID,
    payload: id,
});
