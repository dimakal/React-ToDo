import {ADD, COMPLETE, DELETE, EDIT, SET_ACTIVE_FILTER, SET_TODOS} from "./constants/actionsTypes";

export interface ITodo {
    id: number
    text: string
    completed: boolean
}

export enum Filters {
    ALL = 'ALL',
    COMPLETED = 'COMPLETED',
    ACTIVE = 'ACTIVE'
}

// actions
export interface ISetTodos {
    type: typeof SET_TODOS,
    todos: ITodo[]
}

export interface IAddTodoAction {
    type: typeof ADD
    todo: ITodo
}

export interface IDeleteTodoAction {
    type: typeof DELETE
    id: number
}

export interface ICompleteTodosAction {
    type: typeof COMPLETE
    id: number
}

export interface IEditTodosAction {
    type: typeof EDIT
    id: number
    newText: string
}

export interface ISetActiveFilter {
    type: typeof SET_ACTIVE_FILTER
    activeFilter: Filters
}

export type TodoActionTypes = ISetTodos | IAddTodoAction | IDeleteTodoAction | ICompleteTodosAction | IEditTodosAction
export type FilterActionTypes = ISetActiveFilter