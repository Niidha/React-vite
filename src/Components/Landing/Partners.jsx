import { Fragment } from "react"

const Partners=()=>{
    return( <Fragment>
        <div style={{ borderTop: '1px solid gray', borderBottom: '1px solid gray' ,backgroundColor:"white", display:"flex",flexDirection:"row",justifyContent:"space-between", marginTop:"50px", marginInline:"50px"}}>
            
            <img src="./public/udem.png" alt="image1"  style={{width:"150px", backgroundColor:"white", height:"100px"}} />
            <img src="./public/khan.png" alt="image2"  style={{width:"150px", backgroundColor:"white", height:"100px"}}/>
             <img src="./public/urs.png" alt="image3" style={{width:"150px", backgroundColor:"white", height:"100px"}} />
            <img src="./public/uda.png" alt="image4" style={{width:"150px", backgroundColor:"white", height:"100px"}} />
            <img src="./public/kad.png" alt="image5" style={{width:"150px", backgroundColor:"white", height:"100px"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"50px", fontSize:"30px", marginInline:"50px"}}>
            <input type="search" name="" id="" placeholder="Course Name" style={{borderRadius:"5px"}}/>
            <label>Tutor Name</label>
            <button type="button" style={{backgroundColor:"#50C878",border:"none",color:"white",borderRadius:"8px",fontSize:"bold",paddingInline:"20px",fontWeight:"bold", paddingBlock:"5px"}}>Search</button>
            <select name="courses" id="" placeholder="Popular Courses"  style={{borderRadius:"5px",paddingRight:"100px",}}>
            <option value="1" >Popular Courses</option>
            <option value="1" >Popular Courses2</option>

            
            </select>
        </div>
        </Fragment>
    )
} 
export default Partners