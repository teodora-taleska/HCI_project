import "./Crossword.css"
import { Link } from "react-router-dom"

function C_Home(){
    return (
        <div>
            <div className="learnTitle">
                <Link to="/nav-buttons"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button></Link>
                <h3 id="learnwbutton"><b>Practice</b></h3> 
            </div>
            <h5 id="cat"><b>It is time to practice what you have learned</b></h5>
            <p id='cat' className="cat2">The crossword puzzle will have questions and pictures from the topics on sexual and reproductive care.</p>
            <p id="cat" className="cat2">You are allowed to use hints.</p>
            <p id="cat" className="cat2">After some time from sending the crossword you will receive feedback.</p>
            
            <Link to="c_buttons"><button>Play</button></Link>
        </div>
    )
}

export default C_Home