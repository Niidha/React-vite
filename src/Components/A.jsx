import { useState } from "react"
import B from "./B"

const A=()=>{
    const [counter,setCounter]=useState(10)
    const handleData=(data)=>{
        console.log(data);
        

    }
    return(
        <div className="d-flex align-items-center justify-content-center flex-column">
            Component A
          <B counter={counter} handleData={handleData}></B>
        </div>
    )
}
export default A