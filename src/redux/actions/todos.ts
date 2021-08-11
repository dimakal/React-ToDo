import {ADD, COMPLETE, DELETE, EDIT} from "../../constants/actionsTypes";
import {ITodo, TodoActionTypes} from "../../types";

export const addTodo = (todo: ITodo): TodoActionTypes => ({type: ADD, todo})
export const deleteTodo = (id: ITodo["id"]): TodoActionTypes => ({type: DELETE, id})
export const toggleTodo = (id: ITodo["id"]): TodoActionTypes => ({type: COMPLETE, id})
export const editTodo = (id: ITodo["id"], newText: string): TodoActionTypes => ({type: EDIT, id, newText})