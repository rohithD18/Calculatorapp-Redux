import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../Actions/action';


const TodoItems = ({task}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const textRef = useRef(null);

    function handleEditForm(e){
        e.preventDefault();
        dispatch(updateTodo({ message: textRef.current.value, id: task.id}));
        setIsUpdate(false);
        textRef.current = null;
    }
    // const handleEditChange = (e)=>{
    //     setIsEdit(e.target.value);
    // }
    const renderForm =()=>{
        return(
            <div>
                <form onSubmit={handleEditForm}>
                    <input 
                    style={{height:'36px'}}
                    ref={textRef}
                    type={'text'}
                    defaultValue={task.task} 
                    /> &nbsp;
                    <button type='submit' className='btn btn-success'>Save</button>
                </form>
            </div>
        );
    };

    const renderItem = ()=>{
  return (
    <div className='h4editx'>
        <h4> {task.task}</h4>&nbsp;
       
       <div className='editX'>
       <button onClick={()=>setIsUpdate(true)} >Edit</button> &nbsp;
        <button className='btn btn-danger'
        onClick={()=>dispatch(deleteTodo(task.id))}>X</button>
       </div>
    </div>
  );
    };

    return(
        <>
            <p></p>
           <div>
           {isUpdate ? renderForm() : renderItem()}
           </div>
          
        </>
    );

};

export default TodoItems;