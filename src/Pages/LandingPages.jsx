import { Fragment } from "react"
import NavBar from "../Components/Landing/NavBar"
import Hero from "../Components/Landing/Hero"
import Partners from "../Components/Landing/Partners"
import Cards from "../Components/Landing/Cards"

const LandingPage=()=>{
    return <Fragment>
        <NavBar/>
        <Hero/>
        <Partners/>
        <Cards/>
    </Fragment>
}
export default LandingPage