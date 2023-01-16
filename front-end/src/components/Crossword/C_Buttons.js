import NavBar from "../NavBar"
import "./Crossword.css"
import { Link } from "react-router-dom"

function C_Buttons(){
    return (
        <div>
            <NavBar />
            <div className="crossword-nav">
                <Link to="/crossword"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button></Link>
                <h3 id="learnwbutton"><b>Crossword</b></h3>
                <i class="fa fa-star right" aria-hidden="true">5</i>
            </div>
            <div id="c-b">
                <Link to="/crossword/easy"><button className="c-buttons">EASY</button></Link>
                <Link to="/crossword/normal"><button className="c-buttons">NORMAL</button></Link>
                <Link to="/crossword/hard"><button className="c-buttons">HARD</button></Link>
                <Link to="/crossword/themed"><button className="c-buttons">THEMED</button></Link>

            </div>
        </div>
    )
}

export default C_Buttons