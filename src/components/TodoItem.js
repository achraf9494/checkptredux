import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../redux/actions';
import Edit from './Edit';

function TodoItem({ todo }) {
    
    let dispatch = useDispatch();

    return (
        <div>
            <div className="row mx-2 align-items-center">
                <h1>  {todo.name}</h1>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
                <Edit oldTodo={todo}/>
                <button className="btn btn-danger m-2" onClick={()=> dispatch(completeTodo(todo.id)) }>{todo.isDone ? "Undo" : "Complete"}</button>
            </div>
        </div>
    )
}

export default TodoItem