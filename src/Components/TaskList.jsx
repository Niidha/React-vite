import { FaCircleCheck } from "react-icons/fa6"
import { FaEye, FaTrash } from "react-icons/fa"
import { useState } from "react"
import Modal from "./Modal"

const TaskList=({type,todoList,handleStatus,handleRemove})=>{
    const [openedModal,setOpenedModal]=useState(null)

return    (
    <div className="d-flex flex-column align-items-center gap-2 mt-3">
         {openedModal ? <Modal item={openedModal} setOpenedModal={setOpenedModal} /> : null}
    <h2>{type} Tasks ({todoList.filter(todo=>todo.status==type).length}) </h2>
    {
       todoList.filter(todo=> todo.status==type).map((todo)=>{
          return  <div key={todo.id} className="p-2 text-start w-25 text-light bg-secondary d-flex mt-3 justify-content-between">
            <div>
               
                <div>TASK:{todo.task}</div>
                <div>STATUS:{todo.status}</div>
              
            </div>
            <div className="d-flex flex-column justify-content-end gap-2">
            <FaCircleCheck cursor={"pointer"} onClick={()=> handleStatus(todo.id)} />
            <FaTrash cursor={"pointer"} onClick={()=>handleRemove(todo.id)}  />
                <FaEye cursor={"pointer"} onClick={()=>setOpenedModal(todo)}></FaEye>
           

            </div>
          </div> 
                })
    }
 </div>

)
}
export default TaskList