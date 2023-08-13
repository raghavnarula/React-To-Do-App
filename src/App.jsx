import { useEffect, useState } from 'react'
import CreateTask from './components/CreateTask'
import TaskDnd from './components/TaskDnd'
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [tasks,setTasks] = useState([])
  useEffect(()=>{
    setTasks(JSON.parse(localStorage.getItem("tasks")))
  },[])
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='relative flex flex-col items-center mt-[20vh] gap-16'>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <TaskDnd tasks={tasks} setTasks={setTasks}/>
      </div>
      <Toaster />
    </DndProvider>
  )
} 

export default App
