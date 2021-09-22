import axios, {AxiosRequestConfig} from "axios";
import {ITodo} from "../types";

const url = 'http://localhost:3001'

export const fetchTodos = () => axios.get(url)
export const addTodo = (todo: ITodo) => axios.post(`${url}/create`, todo)
export const deleteTodo = (id: ITodo['id']) => axios.delete(`${url}/remove/${id}`)
export const completeTodo = (id: ITodo['id']) => axios.put(`${url}/complete/${id}`)
export const editTodo = (id: ITodo['id'], text: ITodo['text']) => axios.put(`${url}/edit/${id}`, {text})
