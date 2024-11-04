

import { BrowserRouter, Route, Routes } from "react-router-dom"

import ProfileUpdate from "./ProfileUpdate"
import ProfilePassword from "./ProfilePassword"
import ShopPage from "./Pages/ShopPage"
import CartPage from "./Pages/cartPage"
import Effect from "./Pages/effects"
import Events from "./Pages/events"
import ApiCall from "./Pages/ApiCall"



// import { CounterProvider } from "./Providers/CounterProvider"

const App=()=>{

// const [counter,setCounter]=useState(0)
// const contextValues={
//   counter,setCounter
// }


//   return(
//   <div>
//    <CounterContext.Provider value={contextValues}>

// <Context></Context>
//    </CounterContext.Provider>
//  </div>)

// return(

//    <CounterProvider>
//       <Context></Context>
//    </CounterProvider>


// )

return(
   <BrowserRouter>
   <Routes>
   <Route path="/api" Component={ApiCall}/>
   <Route path="/events" Component={Events}/>
      <Route path="/effect" Component={Effect}/>
   <Route path="/shop" Component={ShopPage}/>
   <Route path="/cart" Component={CartPage}/>
      <Route path="settings"> 
         <Route path="profile">
            <Route path="update" Component={ProfileUpdate}/>
            <Route path="password" Component={ProfilePassword}/>
           
         </Route>
      </Route> 
   </Routes> 
   </BrowserRouter>
  
)

}

export default App
