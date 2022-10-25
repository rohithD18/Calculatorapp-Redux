import React from 'react';
import TodoItems from './addTodoItems';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllTodos } from '../Actions/action';


const TodoList = ({task}) => {
  const dispatch = useDispatch();
    const taskObj = useSelector((state)=> state.Todos.data);
    const taskItems = taskObj.map((task)=>{
        return <TodoItems task={task} key={task.id}  />;
        
    });
  return ( <div> {taskItems} <br />
   <button className='btn btn-danger'
   onClick={()=>dispatch(deleteAllTodos(task))} >DELETE ALL</button>
  </div>);
 
}

export default TodoList;