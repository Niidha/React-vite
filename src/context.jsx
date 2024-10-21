// import { useContext } from "react"
// import { CounterContext } from "./App"
import { useCounter } from "./Providers/CounterProvider"


// const Context=()=>{
//     const {counter,setCounter }=useContext(CounterContext)

//     return(
//         <div className="d-flex justify-content-center mt-4">
//             <div className="pe-3">{counter}</div>
            
//             <button className="w-25 bg-danger" onClick={()=>setCounter(counter+1)}>Increment</button>
//         </div>
//     )

// }

const Context = () => {

    const { counter, setCounter } = useCounter()

    return (
        <div className="d-flex align-items-center gap-3 mt-5 flex-column">
            <div>{counter}</div>
            <div className="d-flex gap-3 justify-content-center">
                <button onClick={() => setCounter(counter + 1)} className="btn btn-primary rounded">Increment</button>
                <button onClick={() => setCounter(counter - 1)} className="btn btn-danger rounded">Decrement</button>
            </div>
        </div>
    )
}
export default Context