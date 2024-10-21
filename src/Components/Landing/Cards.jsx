import { Fragment } from "react"

const Cards=()=>{
    return   <Fragment >
      <div style={{ fontSize:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"30px", marginInline:"50px"}}>
      <div style={{border: '1px solid #ccc',padding: '20px',borderRadius: '5px'}}>
            <h3>Finance for Non-Financial Managers</h3>
            <p>$350</p>
            <button style={{backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}}>Join Now</button>
          </div>
          <div style={{border: '1px solid #ccc',padding: '20px',borderRadius: '5px'}}>
          <h3>How to start processing of user experience</h3>
          <p>$250</p>
            <button style={{backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}}>Join Now</button>
          </div>
          <div style={{border: '1px solid #ccc',padding: '20px',borderRadius: '5px'}}>
          <h3>Stakeholder Management & Psychology</h3>
          <p>$150 </p>
            <button style={{backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}}>Join Now</button>
          </div>
    </div>
    <div style={{fontSize:"20px" ,display:"flex",flexDirection:"row",justifyContent:"space-between",marginInline:"50px", marginTop:"30px"}}>
    <div style={{ border: '1px solid #ccc',padding: '20px',borderRadius: '5px',}}>
            <h3>Developing Good Employee Relations</h3>
            <p>$130</p>
            <button style={{backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}}>Join Now</button>
          </div>
          <div style={{border: '1px solid #ccc',padding: '20px',borderRadius: '5px',backgroundColor:"#5c6ca4",color:"white"}}>
          <h3>Warehouse and Stock Practitioner Certification</h3>
          <p>$100 </p>
            <button style={{backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}}>Join Now</button>
          </div>
          <div style={{border: '1px solid #ccc',padding: '20px',borderRadius: '5px'}}>
          <h3>Introduction to Emotional Intelligence</h3>
          <p>$80</p>
            <button style={{backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}}>Join Now</button>
          </div>
    </div>
    </Fragment>
      
    
}
export default Cards

