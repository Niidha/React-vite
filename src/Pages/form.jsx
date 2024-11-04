import { useEffect, useState } from "react"

let mounted=false
const Form=()=>{

    const[formData,setFormData]=useState({username:"",password:""})
    const[error,setError]=useState("")
 const handleValidation=()=>{
    if(formData.username==""){
        return setError("Username is required!")
    }

   if(formData.password==""){
    return setError("Password is required")
   } 
 }

 useEffect(()=>{
    if(mounted){
        handleValidation()
    }
    else{
        mounted=true
    }
 },[formData])



   const handleFormUpdate=(event)=>{
    // console.log(event.target.name,event.target.value);
    setFormData({...formData,[event.target.name]:event.target.value})
   }

    return <div>
        <input type="text" placeholder="Enter Username" name="username" onChange={handleFormUpdate}
        value={formData.username}></input>
        <input type="password" placeholder="Enter Password" name="password" onChange={handleFormUpdate}
        value={formData.password}></input>
        {error}
    </div>
}
export default Form