import Section from "./Section";
import { useState,useEffect } from "react";

const TaskDnd = ({tasks,setTasks}) => {
  
  const [todos,setTodos] = useState([]);
  const [inProgress,setInProgress] = useState([]);
  const [closed,setClosed] = useState([]);

  useEffect(()=>{
    const fTodos = tasks.filter(task=> task.status=="todo")  
    const fInProgress = tasks.filter(task=> task.status=="inProgress")  
    const fClosed = tasks.filter(task=> task.status=="closed")  

    setTodos(fTodos)
    setInProgress(fInProgress)
    setClosed(fClosed)

  },[tasks])


  // const array = (JSON.parse(localStorage.getItem('tasks')))

  const statuses = ["todo","inProgress","closed"]

  return (
    <div className="flex flex-row gap-16">
      {statuses.map((status,index)=>(
        <Section 
          status={status} 
          key={index}
          todos = {todos}
          inProgress={inProgress}
          closed={closed}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
     
    </div>
    
  )
}

export default TaskDnd