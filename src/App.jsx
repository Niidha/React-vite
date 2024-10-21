import ShopPage from "./Pages/ShopPage"
import { CartProvider } from "./Providers/CartProviders"
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
   

      <CartProvider>
      <ShopPage></ShopPage>
   </CartProvider>
   
)

}

export default App
