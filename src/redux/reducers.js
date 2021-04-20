import { ADD_TODO, COMPLETE_TODO, DELETE_TODO,EDIT_TODO } from './actions';


const todos = [
    {
        id:1,
        name: "One",
        isDone : "false",
    },
    {
        id:2,
        name: "Two",
        isDone : "false",
    },
    {
        id:3,
        name: "Three",
        isDone : "true",
    },
]


export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            return [...state,action.payload]
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
        case EDIT_TODO:
            newTodos = [...state];
            newTodos =newTodos.map(el => el.id === action.payload.id ? action.payload:el)
            return newTodos
        case COMPLETE_TODO:
                newTodos = [...state];
                newTodos = newTodos.map(el => el.id === action.payload ? {...el,isDone: !el.isDone}: el);
                return newTodos;    
        
        

    }
    return state;
}