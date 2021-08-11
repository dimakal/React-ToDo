import {ADD, COMPLETE, DELETE, EDIT} from "../../constants/actionsTypes";
import {TodoActionTypes} from "../../types";

const initialState = [
    {id: 1, text: 'Something 1', completed: false},
    {id: 2, text: 'Something 2', completed: true},
    {id: 3, text: 'Something 3', completed: false},
]

const todos = (state = initialState, action: TodoActionTypes) => {
    switch (action.type) {
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