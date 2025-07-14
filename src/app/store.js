
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todoSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer, // key name: 'todos', value: your reducer
  },
});

export default store;
