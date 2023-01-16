import NavBar from "../NavBar"
import "./Crossword.css"
import { Link } from "react-router-dom"

function C_Feedback(){
    return (
        <div>
            <NavBar/>
            <div className="crossword-nav">
                <Link to="/crossword/game"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button></Link>
                <h3 id="learnwbutton"><b>Feedback</b></h3>
                <i class="fa fa-star right" aria-hidden="true">5</i>
            </div>
        </div>
    )
}

export default C_Feedback