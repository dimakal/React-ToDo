import React, {ChangeEvent, useState, KeyboardEvent, FC, useRef, useEffect} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {addTodo, createTodo} from "../../redux/actions/todos";

const AddTodoField: FC = () => {
    const todos = useSelector((state: RootStateOrAny) => state.todos)
    const [todoText, setTodoText] = useState<string>('')
    const dispatch = useDispatch()
    const inputEl = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputEl && inputEl.current) inputEl.current.focus()
    }, [])

    const onAddTodo = (): void => {
        if (!todoText) return

        dispatch(createTodo({
            id: todos.length + 1,
            text: todoText,
            completed: false
        }))
        // dispatch(addTodo({
        //     id: todos.length + 1,
        //     text: todoText,
        //     completed: false
        // }))
        setTodoText('')
    }

    const handlePressEnter = (e: KeyboardEvent): void => {
        if (!todoText) return

        if (e.key === 'Enter') {
            dispatch(addTodo({
                id: todos.length + 1,
                text: todoText,
                completed: false
            }))
            setTodoText('')
        }
        return
    }

    const onClear = (): void => {
        setTodoText('')
    }

    const changeTodoText = (e: ChangeEvent<HTMLInputElement>): void => {
        setTodoText(e.target.value)
    }

    return (
        <div className="col-12 d-flex mb-3">
            <input className="form-control form-control-lg rounded-0 rounded-start"
                   ref={inputEl}
                   type="text" placeholder="Add new .."
                   onChange={changeTodoText}
                   onKeyDown={handlePressEnter}
                   value={todoText}
            />
            <button type="button"
                    className="btn btn-primary rounded-0 outline-"
                    onClick={onAddTodo}
            >Add</button>
            <button type="button"
                    className="btn btn-secondary rounded-0 rounded-end"
                    onClick={onClear}
            >✖</button>
        </div>
    );
};

export default AddTodoField;