const NavBar=()=>{
    return <header style={{display:"flex",justifyContent:"space-between", fontSize:"20px",}} >
        <div><img src="../public/logo.png" alt="logo" style={{width:"100px",paddingLeft:"50px" }} /></div>
        <div><ul style={{listStyle:"none",display:"flex",gap:"30px"}}>
            <li>Home</li>
            <li>Programs</li>
            <li>Professional Education</li>
            <li>Courses</li>
            <li>Admissions</li>
            <li>Testimonials</li></ul></div>
        <div style={{paddingRight:"50px",display:"flex",alignItems:"center",gap:"20px"}}>Log in 
            <button style={{padding:"8px",borderRadius:"8px",backgroundColor:"#50C878",border:"none",color:"white",fontWeight:"bold"}} type="button">Registration</button>
        </div>
    </header>
}
export default NavBar
