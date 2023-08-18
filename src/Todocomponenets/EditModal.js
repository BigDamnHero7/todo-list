import React, { useState } from 'react';
import './modal.css';
import {MdOutlineClose} from 'react-icons/md'; 
import Button from './Button';



function EditModal({editModalOpen,setEditModalOpen,toDoList,setTodoList}) {
  const [title,setTitle]=useState('');
  const [status,setStatus]=useState('incomplete');
  const [uniqueId,setUniqueId]=useState(0);
  const handleSubmit=(e)=>{
    e.preventDefault();
    
  }
  const addTask=()=>{
      const task={
          id: uniqueId,
          taskName: title,
          status:status
      }
      setTodoList([...toDoList,task]);
      setUniqueId(uniqueId+1);
      onclick=setEditModalOpen(false)
      onkeydown=setEditModalOpen(false)
    };
 
  return (
    <div>
        {editModalOpen && (

            <div className='wrapper'>
                <div className='container'>
                    <div className='closeButton'
                    onClick={()=> setEditModalOpen(false)}
                    onKeyDown={()=> setEditModalOpen(false)}
                    tabIndex={0}
                    role='button'>
                        <MdOutlineClose></MdOutlineClose>
                    </div>
                    <form className='form' onSubmit={(e)=>handleSubmit(e)}>
                        <h1 className='formTitle'>Update Task</h1>
                        <label htmlFor="title">
                            Title
                            <input type="text" id='title'  onChange={(e)=>setTitle(e.target.value)}/>
                        </label>
                        <label htmlFor="status">
                            Status
                            <select name="statuss" id="status" onChange={(e)=>setStatus(e.target.value)}>
                                <option value='incomplete'>Incomplete</option>
                                <option value="complete">Complete</option>
                            </select>
                        </label>
                        <div className='buttonContainer'>
                            <Button type='submit' onClick={addTask} >
                                Update Task
                            </Button>
                        </div>
                        <div className='buttonContainer'>
                            <Button type='button' variant='secondary' onClick={()=> setEditModalOpen(false)}
                            onKeyDown={()=> setEditModalOpen(false)}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            
            </div>
        )}
    </div>    
  )
}

export default EditModal
