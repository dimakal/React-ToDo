import {ADD, COMPLETE, DELETE, EDIT, SET_TODOS} from "../../constants/actionsTypes";
import {ITodo, TodoActionTypes} from "../../types";

const initialState: ITodo[] = []

const todos = (state = initialState, action: TodoActionTypes) => {
    switch (action.type) {
        case SET_TODOS:
            return action.todos
        case ADD:
            return [
                ...state,
                action.todo
            ]
        case COMPLETE:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        case DELETE:
            return state.filter((todo) => todo.id !== action.id)
        case EDIT:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {...todo, text: action.newText}
                }
                return todo
            })
        default:
            return state
    }
}

export default todos