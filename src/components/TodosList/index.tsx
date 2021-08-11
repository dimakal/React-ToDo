import React, {FC} from 'react';
import Filter from "../Filter";
import AddTodoField from "../AddTodoField";
import {RootStateOrAny, useSelector} from "react-redux";
import Todo from "../Todo";
import {filterTodos} from "../../utils/filterTodos";
import TodoListHeader from "../TodoListHeader";
import Todos from "../Todos";

const TodosList: FC = () => {
    const todos = useSelector((state: RootStateOrAny) => state.todos)
    const activeFilter = useSelector((state: RootStateOrAny) => state.filter)

    const filteredTodos = filterTodos(todos, activeFilter)

    return (
        <div className={'row bg-light py-3 rounded shadow'}>
            <AddTodoField/>
            <TodoListHeader count={filteredTodos.length}/>
            <Todos filteredTodos={filteredTodos} />
        </div>
    )
}

export default TodosList;