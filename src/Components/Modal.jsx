const Modal=({item,setOpenedModal})=>{
    return <div>
        <div className="position-fixed d-flex align-items-center justify-content-center top-0 start-0 bg-dark bg-opacity-50" style={{height: "100vh", width: "100vw"}}>
            <div className="bg-dark text-light p-2 ">
                <div className="d-flex">
                {item.task} 
                {item.id}
                {item.status}
                {item.createdAt}
                {item.updatedAt}
                <button onClick={()=>setOpenedModal(null)}>Close</button>
                </div>
            </div>
        </div>
    </div>
}
export default Modal