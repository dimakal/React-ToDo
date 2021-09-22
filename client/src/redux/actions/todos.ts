import {ADD, COMPLETE, DELETE, EDIT, SET_TODOS} from "../../constants/actionsTypes";
import {ITodo, TodoActionTypes} from "../../types";
import * as api from '../../api'
import {Dispatch} from "redux";

export const setTodos = (todos: ITodo[]):  TodoActionTypes => ({type: SET_TODOS, todos})
export const addTodo = (todo: ITodo): TodoActionTypes => ({type: ADD, todo})
export const deleteTodo = (id: ITodo["id"]): TodoActionTypes => ({type: DELETE, id})
export const toggleTodo = (id: ITodo["id"]): TodoActionTypes => ({type: COMPLETE, id})
export const editTodo = (id: ITodo["id"], newText: string): TodoActionTypes => ({type: EDIT, id, newText})

export const getTodos = () => async (dispatch: Dispatch) => {
    try {
        let {data}: any = await api.fetchTodos()

        dispatch(setTodos(data))
    } catch (err) {
        console.log(err)
    }
}

export const createTodo = (todo: ITodo) => async (dispatch: Dispatch) => {
    try {
        await api.addTodo(todo)

        dispatch(addTodo(todo))
    } catch (err) {
        console.log(err)
    }
}

export const removeTodo = (id: ITodo['id']) => async (dispatch: Dispatch) => {
    // debugger
    try {
        // debugger
        await api.deleteTodo(id)
        // debugger

        dispatch(deleteTodo(id))
    } catch (err) {
        debugger
        console.log(err)
    }
}

export const completeTodo = (id: ITodo['id']) => async (dispatch: Dispatch) => {
    try {
        await api.completeTodo(id)
        
        dispatch(toggleTodo(id))
    } catch (err) {
        console.log(err)}
}

export const changeTodo = (id: ITodo['id'], newText: ITodo['text']) => async (dispatch: Dispatch) => {
    try {
        await api.editTodo(id, newText)

        dispatch(editTodo(id, newText))
    } catch (err) {
        console.log(err)}
}