import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import TodoInput from './TodoInput'

function TodoList() {
    const todos = useSelector(state => state)
    const [filter, setFilter] = useState(false)
    const handleFilter = () => setFilter(!filter)
    return (
        <div className="my-4">
            <TodoInput handleFilter={handleFilter} filter={filter}/>
            {filter ?
            todos.filter(el => el.isDone).map((todo) =>
            <TodoItem key={todo.id} todo={todo} />
        )
            :todos.map((todo) =>
                <TodoItem key={todo.id} todo={todo} />
            )}
        </div>
    )
}

export default TodoList