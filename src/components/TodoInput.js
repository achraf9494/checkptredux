import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput({handleFilter , filter}) {
    let [name, setName] = useState('');
    let dispatch = useDispatch();
    return (
        <div>
            <div className="row m-2">
                <input
                
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" className="col form-control"/>
                <button
                
                onClick={()=>{
                       dispatch(  addTodo({
                        id: uuid(),
                        name: name , 
                        isDone: 'false',
                    }));
                        setName('');
                    }}
                className="btn btn-primary mx-2">Add</button>
                <button className="btn btn-primary mx-2" onClick={handleFilter} >{filter ? "filter" : "All" }</button>
            </div>
        </div>
    )
}

export default TodoInput