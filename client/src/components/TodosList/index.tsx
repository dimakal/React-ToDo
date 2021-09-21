import React, {FC, useEffect} from 'react';
import Filter from "../Filter";
import AddTodoField from "../AddTodoField";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {filterTodos} from "../../utils/filterTodos";
import TodoListHeader from "../TodoListHeader";
import Todos from "../Todos";
import {getTodos} from "../../redux/actions/todos";
import {ITodo} from "../../types";

const TodosList: FC = () => {
    let todos: ITodo[] = useSelector((state: RootStateOrAny) => state.todos)
    const dispatch = useDispatch()
    const activeFilter = useSelector((state: RootStateOrAny) => state.filter)

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

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