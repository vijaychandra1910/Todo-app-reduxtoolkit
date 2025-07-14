import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {removeTodo} from '../features/todoSlice'
function Todos() {
    const todos=useSelector(state=> state.todos.todos)
    const dispatch = useDispatch();
  return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))} className="ml-2 text-red-500 hover:text-red-700">Delete</button>
        </li>

    ))}
    </>
  )
}

export default Todos