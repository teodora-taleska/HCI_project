import { Link } from "react-router-dom"
import "./HomeButtons.css"

function NavigationButtons(){
    return(
        <div>
            <img src="logo.svg" />
            <Link to="/education"><button className="home-button3 buttons3">LEARN</button></Link>
            <Link to="/map"><button className="home-button4 buttons3">NEAR ME</button></Link>
            <Link to="/crossword"><button className="home-button5 buttons3">PRACTICE</button></Link>
        </div>
    )
}

export default NavigationButtons

