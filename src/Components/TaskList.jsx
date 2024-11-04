import { FaCircleCheck } from "react-icons/fa6"
import { FaEye, FaPen, FaTrash } from "react-icons/fa"
import { Fragment, useState } from "react"
import Modal from "./Modal"
import toast from "react-hot-toast"

const TaskList=({type,todoList,setTodoList,handleStatus,handleRemove})=>{
    const [openedModal,setOpenedModal]=useState(null)

    const[editText,setEditText]=useState()
    const[editableItem,setEditableItem]=useState("")
const handleEdit=(item)=>{
    setEditText(item.task)
    setEditableItem(item)
}

const handleUpdate=(item)=>{
    if (editText=="") {
        return toast.error("Task cannot be empty");
    }
    const exist=todoList.find(todo=>editText.trim()==todo.task && todo.id != item.id)
    if(exist){
        return toast.error("Already exist")
    }
    const res=todoList.map(todo=>{
        if(todo.id==item.id){
            return{ ...todo,task:editText.trim()}
        }
        return todo
    })
    setTodoList(res)
    setEditText("")
    setEditableItem("")
}
return    (
    <div className="d-flex flex-column align-items-center gap-2 mt-3">
         {openedModal ? <Modal item={openedModal} setOpenedModal={setOpenedModal} /> : null}
    <h2>{type} Tasks ({todoList.filter(todo=>todo.status==type).length}) </h2>
    {
       todoList.filter(todo=> todo.status==type).map((todo)=>{
          return  <div key={todo.id} className="p-2 text-start w-25 text-light bg-secondary d-flex mt-3 justify-content-between">
            <div>
               
               
                {/* <div>ID:{todo.id}</div> */}
                <div>TASK: { editableItem.id==todo.id ? <Fragment>
                 <input className="text1 ms-1 rounded ps-1 border-0" type="text" value={editText} onChange={(event)=>setEditText(event.target.value)} />
                 <button className="btn btn-success ms-2" onClick={()=>handleUpdate(todo)}>Update</button>
                </Fragment> :todo.task}</div>
                <div>STATUS: {todo.status}</div>
                {/* <div>CREATED:{todo.updatedAt}</div>
                <div>UPDATED:{todo.createdAt}</div> */}
                
              
            </div>
            <div className="d-flex flex-column justify-content-end gap-2">
            <FaCircleCheck className="text-info" cursor={"pointer"} onClick={()=> handleStatus(todo.id)} />
            <FaTrash  className="text-danger" cursor={"pointer"} onClick={()=>handleRemove(todo.id)}  />
            <FaEye  className="text-primary" cursor={"pointer"} onClick={()=>setOpenedModal(todo)}></FaEye>
            <FaPen  className="text-warning"cursor={"pointer"} onClick={()=>handleEdit(todo)}/>
           

            </div>
          </div> 
                })
    }
 </div>

)
}
export default TaskList