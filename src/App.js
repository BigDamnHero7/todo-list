// import "./App.css";
import {React,createContext,useEffect,useState} from "react";
import Title from "./Todocomponenets/Title";
import './Todocomponenets/app.css';
import AppHeader from "./Todocomponenets/AppHeader";
import AppContent from "./Todocomponenets/AppContent";


function App() {
  const [toDoList, setTodoList]=useState([]);  
  const [filterStatus, setFilterStatus] = useState("all");

  const deleteTaskHandler=(id)=>{
    console.log(id);
    console.log(toDoList);
    setTodoList(toDoList.filter((item)=>item.id!==id))
  }
  let todoFiltered = toDoList;
  if(filterStatus==="complete")
  {
    todoFiltered=toDoList.filter((item)=>{ return item.status==="complete"});
  }
  else if( filterStatus==="incomplete") {
    todoFiltered=toDoList.filter((item)=>{ return item.status==="incomplete" });
  }
  return(
    <div className="Container">
      <Title parameter={"TODO LIST"} />
      <div className="app__wrapper">
        <AppHeader parameter={"HEADER"} setFilterStatus={setFilterStatus} toDoList={toDoList} setTodoList={setTodoList}/>
        {todoFiltered.map((item)=><AppContent key={item.id} item={item} onGetid={deleteTaskHandler} status={item.status}/>)}
      </div>
    </div>
  );
} 



export default App; 
