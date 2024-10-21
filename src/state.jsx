// import { Fragment, useState } from "react"
// import { Stack } from "react-bootstrap"

// const LearnState=()=>{
//     // const [counter,setCounter]=useState({counter1:0,counter2:0})

//     // // const HandleIncrement=()=>{
//     // //     setCounter((state)=>state+1)
//     // // }
//     // // const HandleDecrement=()=>{
//     // //     setCounter((state)=>state-1)
//     // // }

//     // const handleIncrement1=()=>{
//     //     // counter.counter1=counter.couner1+1
//     //     // setCounter({counter1:counter.counter1+1})
//     //     setCounter((counter)=>({counter1:counter.counter1 + 1}))
//     // }
//     // const HandleDecrement1=()=>{
//     //     // counter.counter1=counter.couner1+1
//     //     // setCounter({counter1:counter.counter1+1})
//     //     setCounter((counter)=>({counter1:counter.counter1 - 1}))
//     // }

//     // const HandleIncrement2=()=>{
//     //     // counter.counter1=counter.couner1+1
//     //     // setCounter({counter1:counter.counter1+1})
//     //     setCounter((counter)=>({counter2:counter.counter2 + 1}))
//     // }

//     // const HandleDecrement2=()=>{
//     //     // counter.counter1=counter.couner1+1
//     //     // setCounter({counter1:counter.counter1+1})
//     //     setCounter((counter)=>({counter2:counter.counter2 - 1}))
//     // }




   
//     // return <div className="d-flex flex-column align-items-center justify-content-center mt-5">
//     //     {/* <div>{counter}</div> */}
//     //     <Stack direction="horizontal" gap={5} className="d-flex justify-content-center">
//     //     <button onClick={handleIncrement1} className="btn btn-primary w-25" >Increment {counter.counter1} </button>
//     //     <button onClick={HandleDecrement1} className="btn btn-danger w-25">Decrement {counter.counter1}</button>
//     //     </Stack>
//     //     <Stack direction="horizontal"  gap={5} className="d-flex justify-content-center mt-3">
//     //     <button onClick={HandleIncrement2} className="btn btn-primary w-25" >Increment {counter.counter2} </button>
//     //     <button onClick={HandleDecrement2} className="btn btn-danger w-25">Decrement {counter.counter2}</button>
//     //     </Stack>
//     // </div>
    
// const[todoList,setTodoList]=useState([])
// const[todo, setTodo]=useState("")
// const HandleAddTask=()=>{
//     setTodoList(...todoList,todo)
//     console.log(todo);
    
// }
// return <Fragment>
//     <div className="d-flex flex-column ms-5 align-items-center mt-4 w-25">
//     <input type="text" onChange={(event)=>setTodo(event.target.value)} value={todo}></input>
//     <button onClick={HandleAddTask} className="btn btn-success rounded-0 mt-3">Add Task</button>
// </div>
// {/* <div>
//     {
//         array.map((element,index)=>{
//             return <div>
//                 {element}
//             </div>
//         })
//     }
// </div> */}
// </Fragment>




// }
// export default LearnState