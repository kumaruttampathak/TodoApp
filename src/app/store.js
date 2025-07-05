import {configureStore} from '@reduxjs/toolkit';
import todoReducter from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducter
})



