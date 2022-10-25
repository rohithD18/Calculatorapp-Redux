import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Actions/action';
import cuid from 'cuid';
import { useRef } from 'react';

const AddTodos = ({task}) => {

    const data = useRef(null)
    const [tasks, setTasks] = useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
        data.current.focus();
    },[]);

    function submitHandler(e){
        e.preventDefault();
        dispatch(addTodo({task: tasks, id:cuid()}));
        e.target.input.value = "";
        
    }

    function changeHandler(e){
        setTasks(e.target.value);
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input className='inputform' 
            ref={data}
            type={"text"} 
            name="input" 
            autoComplete='off'
            required
            onChange={(e)=>changeHandler(e)}/> &nbsp;
            <button >Add</button>
            
        </form>
       
    </div>
  )
}

export default AddTodos;