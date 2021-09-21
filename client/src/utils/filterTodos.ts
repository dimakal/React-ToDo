import {Filters, ITodo} from "../types";

export const filterTodos = (todos: ITodo[], activeFilter: Filters): ITodo[] => {
    switch (activeFilter) {
        case Filters.COMPLETED:
            return todos.filter((todo) => todo.completed)
        case Filters.ACTIVE:
            return todos.filter((todo) => !todo.completed)
        default:
            return todos
    }
}