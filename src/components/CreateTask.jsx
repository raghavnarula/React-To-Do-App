import { useState } from "react"
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';

const CreateTask = ({tasks,setTasks}) => {
    const[task,setTask] = useState({
        'id':"",
        'name':"",
        'status':"todo" // can also be in-progress or closed
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.name.length < 3) return toast.error("must be more than 3 characters")

        setTasks(()=>{
            const list = [...tasks,task];
            localStorage.setItem('tasks', JSON.stringify(list));
            return list
        })

        toast.success("Task Created")

        setTask({
            'id':"abc",
            'name':"",
            'status':"todo" 
        })

    }
    return (
    <div className="">
        <form onSubmit={handleSubmit}>
            <input type="text" className="border-2 rounded-md px-2 w-[20vw] max-w-[300px]"
                    value={task.name}
                    onChange={(e)=>{setTask({...task,id:uuidv4(), name:e.target.value} )}
            }></input>
            <button className="text-sm ml-[10px] text-white bg-cyan-500 p-1 rounded-md" onClick={()=>{}}>Create</button>
        </form>
    </div>
  )
}

export default CreateTask