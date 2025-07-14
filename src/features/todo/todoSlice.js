import { createSlice, nanoid } from '@reduxjs/toolkit';  // nanoid is used to generate unique ids
const initialState = {
    todos:[{
        id:1,
        text:'Hello world',
    }]
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            todo={
                id:nanoid(),
                text:action.payload
            }   
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }
})

export const {addTodo,removeTodo} = todosSlice.actions;     
export default todosSlice.reducer;   