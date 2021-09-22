import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import './Todo.scss'
import deleteIcon from '../../assets/icons/trash.svg'
import editIcon from '../../assets/icons/pencil.svg'
import confirmIcon from '../../assets/icons/tick.svg'
import {useDispatch} from "react-redux";
import {changeTodo, completeTodo, deleteTodo, editTodo, removeTodo, toggleTodo} from "../../redux/actions/todos";
import {ITodo} from "../../types";

interface ITodoProps {
    todo: ITodo
}

const Todo = ({todo}: ITodoProps) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [todoText, setTodoText] = useState<string>(todo.text)
    const dispatch = useDispatch()
    const todoInputEl = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (todoText.trim() !== todo.text.trim()) {
            dispatch(editTodo(todo.id, todoText))
        }
    }, [editMode])

    const onEditTodo = (): void => {
        if (todo.completed) return


        if (todoInputEl && todoInputEl.current && !editMode) todoInputEl.current.focus()

    setEditMode((prevState) => {
        if (prevState) {
            dispatch(changeTodo(todo.id, todoText))
        }
        return !prevState
    })
        // setEditMode((prevState => !prevState))
    }

    const onDeleteTodo = (): void => {
        dispatch(removeTodo((todo.id)))
    }

    const onToggleTodo = (): void => {
        if (editMode) return alert("You can't complete the Todo while editting ")
        dispatch(completeTodo(todo.id))
    }

    const onChangeTodoText = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value)
    }

    return (
            <div className={`col-12 todo d-flex align-items-center mb-2 ${todo.completed ? 'completed' : ''}`}>
                <input
                    className="form-check-input border-primary border-2 mx-2"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={onToggleTodo}
                />
                <input type="text"
                       ref={todoInputEl}
                       className={`form-control form-control-lg rounded-0 rounded-start todo-input ${editMode ? 'editable' : 'readOnly'}`}
                       readOnly={!editMode}
                       title={todo.text}
                       value={todoText}
                       disabled={todo.completed}
                       onChange={onChangeTodoText}
                />
                <button
                    className={`btn ${editMode ? 'btn-success' : 'btn-dark'} todo-button edit-todo rounded-0`}
                    style={{backgroundImage: `url(${editMode ? confirmIcon : editIcon})`}}
                    onClick={onEditTodo}
                > </button>
                <button
                    className="btn btn-danger delete-todo todo-button rounded-0 rounded-end"
                    style={{backgroundImage: `url(${deleteIcon})`}}
                    onClick={onDeleteTodo}
                > </button>

            </div>
    );
};

export default Todo;