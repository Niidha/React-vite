import { Fragment,useState } from "react"
import { v4 as uuidv4} from "uuid"

import toast from "react-hot-toast";
import TaskList from "./Components/TaskList";
const LearnState=()=>{

 const[todoList,setTodoList]=useState([])
const[todo, setTodo]=useState("")

const HandleAddTask=()=>{

    if (todo==""){
        return toast.error("Task Required")
     }
     const index=todoList.findIndex(element=>element.task.toLowerCase()==todo.toLowerCase())
     if(index> -1){
        return toast.error("Task already exists")
     }
   const currentDate= new Date().toLocaleString("en-IN")
const taskObject={
    id:uuidv4(),
    task:todo,
    status:"Pending",
    createdAt:currentDate,
    updatedAt:currentDate

}
setTodoList([taskObject, ...todoList])
setTodo("")
    
}
const handleStatus= (id)=>{
   const res= todoList.map(todo =>{
    if(todo.id == id){
        return{...todo,status:todo.status=="Pending"?"Completed":"Pending"}
    }
    return todo
   })
   setTodoList(res)
}
const handleChange = (event) => {
  
   setTodo(event.target.value.replace(" ", "_"))
}


const handleRemove=(id)=>{
    const res=todoList.filter(todo=>todo.id != id)
    setTodoList(res)
    return toast.success("Task removed")
}




return <Fragment>
     <div className="d-flex flex-column align-items-center gap-2 mt-3 ">
    
     <input type="text" onChange={handleChange} value={todo} className="p-2 w-50 border-1 border-secondary" placeholder="Enter Task..." style={{outline: 0}} name="todo"/>
     <button onClick={HandleAddTask} className="btn btn-success rounded-0 mt-3 w-25">Add Task</button>
 </div>

<TaskList type={"Pending"} todoList={todoList} handleRemove={handleRemove} handleStatus={handleStatus}/>
<TaskList type={"Completed"} todoList={todoList} handleRemove={handleRemove} handleStatus={handleStatus}/>

</Fragment>
}

export  default LearnState