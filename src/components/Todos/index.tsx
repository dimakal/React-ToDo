import React from 'react'
import Todo from "../Todo";
import {ITodo} from "../../types";

interface ITodosProps {
    filteredTodos: ITodo[]
}

const Todos = ({filteredTodos}: ITodosProps) => {

    return (
        <div className="Todos">
            {
                filteredTodos.map( (item) => {
                    return <Todo todo={item} key={item.id} />
                })
            }
        </div>
    )
};

export default Todos