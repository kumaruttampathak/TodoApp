import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id:1,
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) 
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, todo:action.payload.todo, isCompleted: action.payload.isCompleted}: todo)
        },
        // toggleTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id === action ? {...todo, completed: !todo.completed} : todo))
        // }
    }

})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer