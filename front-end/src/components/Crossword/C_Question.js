import NavBar from "../NavBar"
import "./Crossword.css"
import { Link } from "react-router-dom"

function C_Question(){
    return (
        <div>
            <NavBar/>

            <div className="crossword-nav">
                <Link to="/crossword/game"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button></Link>
                <h3 id="learnwbutton"></h3>
                <i class="fa fa-star right" aria-hidden="true">5</i>
            </div>

<div id="submit-game">
                <h5 id="sure">Do you want to submit?</h5>
            <div id="emptySpace"></div>
            <Link to="/crossword/game/feedback"><button id='red'>YES</button></Link>
            <Link to="/crossword/game"><button id="green">NO</button></Link>

</div>
        </div>
    )
}

export default C_Question