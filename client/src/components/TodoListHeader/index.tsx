import React from 'react'
import Filter from "../Filter";

interface ITodoListHeaderProps {
    count: number
}

const TodoListHeader = ({count}: ITodoListHeaderProps) => {
    return (
        <div className={'d-flex justify-content-between align-items-center mb-3'}>
            <span> Total: {count} </span>
            <Filter />
        </div>
    )
};

export default TodoListHeader