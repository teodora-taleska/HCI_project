import NavBar from "../NavBar"
import "./Crossword.css"
import { Link } from "react-router-dom"

function C_Game(){
    return (
        <div>
            <NavBar/>
            <div className="crossword-nav">
                <Link to="/crossword/c_buttons"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button></Link>
                <h3 id="learnwbutton"><b>Diseases</b></h3>
                <i class="fa fa-star right" aria-hidden="true">5</i>
            </div>

        </div>
    )
}

export default C_Game