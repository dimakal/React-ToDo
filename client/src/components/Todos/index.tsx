import React from 'react'
import Todo from "../Todo";
import {ITodo} from "../../types";

interface ITodosProps {
    filteredTodos: ITodo[]
}

const Todos = ({filteredTodos}: ITodosProps) => {

    if (!filteredTodos.length) {
        return (
            <div style={
                {fontSize: '24px',
                padding: '15px 0',
                margin: '15px 12px',
                background: '#ff4d4d',
                flex: 1,
                borderRadius: '5px',
                color: 'white'}
            }> Вы еще не создали ни одной задачи :( </div>
        )
    }

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