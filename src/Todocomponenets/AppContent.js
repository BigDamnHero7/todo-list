import React, { useEffect, useState } from 'react'
import AppHeader from './AppHeader.js'
import '../App.js'
import EditModal from './EditModal.js'
import './todoitem.css'
import { MdDelete, MdEdit } from 'react-icons/md'
import Checkbutton from './Checkbutton.js'

function AppContent({item,onGetid,status}) {
  const [checked,setChecked]=useState(false)
  
 
  useEffect(()=>{
    if(item.status==='complete'){
      setChecked(true)
    }else{
      setChecked(false)
    }
  },[item.status])
  const deleteTask=()=>{
    onGetid(item.id)
  }

  

  return (
  <div className='content__wrapper'>

    <div className='item '>
      <div className='todoDetails'>
        <Checkbutton checked={checked} setChecked={setChecked} status={status}/>
        <div className='texts'>
          <p className='todoText' >
            {item.taskName}
          </p>
        </div>
      </div>
      <div className='todoActions'>
        <div className='icon' onClick={deleteTask} onKeyDown={deleteTask} role='button' tabIndex={0}>
          <MdDelete/>
        </div>
        <div className='icon' onClick={()=>EditModal(true)} role='button' tabIndex={0}>
          <MdEdit/>
        </div>
      </div>
      
    </div>
  </div>
  )
}



export default AppContent
