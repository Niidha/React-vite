import { useEffect, useState } from "react"

const Effect=()=>{
    const [counter,setCounter]=useState(0)
    const [count,setCount]=useState(0)

    useEffect(()=>{
        // console.log("Mounting...");

        const interval=setInterval(()=>{
            setCounter(prevCounter=>prevCounter+1)
        },1000);
        return()=>{
            // console.log("hello");
            clearInterval(interval)
            
        }
        
    },[count])

    return <div>
    <div>{counter}</div>
    <div>Count:{count}</div>
    <div>
        <button onClick={()=>{
            setCount((counter)=>counter+1)
            // setCounter((counter)=>counter+1)
            // setCounter((counter)=>counter+1)
            // setCounter((counter)=>counter+1)
            // setCounter((counter)=>counter+1)
        }}>Update</button>
    </div>
    </div>
}


export default Effect