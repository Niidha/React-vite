const B=({counter,handleData})=>{

    return(
        <div className="d-flex align-items-center justify-content-center gap-1">
            <button onClick={()=>handleData("Data from child")}>Click</button>
            Component B[{counter}]
        </div>
    )
}
export default B