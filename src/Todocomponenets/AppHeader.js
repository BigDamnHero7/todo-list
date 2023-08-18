import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import './app.css'; 
import TodoModal from './TodoModal';
import EditModal from './EditModal';

export default function AppHeader({toDoList, setTodoList, filterStatus, setFilterStatus}) {
  const [modalOpen,setModalOpen]=useState(false);
  const [editModalOpen,setEditModalOpen]=useState(false);
  
  const updateFilter=(event)=>{
    setFilterStatus(event.target.value);
  }

  return (
    <div className='appHeader'>
      <Button variant='primary' onClick={()=>setModalOpen(true)}>Add Task</Button>
      <SelectButton id='status' value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}  toDoList={toDoList} setTodoList={setTodoList}/>
      <EditModal editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} toDoList={toDoList} setTodoList={setTodoList}/>
    </div>
  )
}
