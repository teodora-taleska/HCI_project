import "./HomeButtons.css"
import { Link } from "react-router-dom"

function HomeButtons(){
    return(
        <div>
            <Link to="/sign-in"><button className="buttons3 home-button1">Sign in</button></Link><br></br>
            <Link to="/sign-up"><button className=" buttons3 home-button2">Sign up</button></Link>
        </div>
    )
}

export default HomeButtons