import NavBar from "../NavBar"
import "./Crossword.css"
import { Link } from "react-router-dom"

function C_Question(){
    return (
        <div>
            <NavBar/>
            <div id="emptySpace"></div>
            <div id="emptySpace"></div>
            <div id="emptySpace"></div>

            <h5 id="sure">Do you want to submit?</h5>
            <div id="emptySpace"></div>
            <Link to="/crossword/game/feedback"><button>YES</button></Link>
            <Link to="/crossword/game"><button>NO</button></Link>
        </div>
    )
}

export default C_Question