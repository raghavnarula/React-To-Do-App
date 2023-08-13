import Header from './Header'
import TaskCard from './TaskCard'
import { useDrop } from 'react-dnd'
import toast from 'react-hot-toast';
const Section = ({status,todos,inProgress,closed,setTasks,tasks}) => {
    
    const [ {isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

    let text="Todo"
    let bg="bg-slate-500"

    let tasksToMap = todos

    if(status==='inProgress'){
        text="In Progress"
        bg="bg-purple-500"
        tasksToMap=inProgress
    }

    if(status==='closed'){
        text="Closed"
        bg="bg-green-500"
        tasksToMap=closed
    }
    
    const addItemToSection = (id) => {
        setTasks((prev)=>{
            const mTasks = prev.map(t => {
                if(t.id === id){
                    return {...t,status:status}
                }
                return t
            })
            
            localStorage.setItem("tasks",JSON.stringify(mTasks))

            toast.success("Task Moved")

            return mTasks;
        })
    }


    return (
    <div ref={drop} className={`w-[20vw] rounded-md p-2 ${isOver ? "bg-slate-200":""}`} >
        <Header text={text} bg={bg} count={tasksToMap.length}/>
        {tasksToMap.length > 0 && tasksToMap.map((task)=> 

            <TaskCard key={task.id} 
            tasks={tasks} 
            setTasks={setTasks} 
            task={task} />)}
    </div>
  )
}

export default Section