import NavBar from "../NavBar"
import "./Crossword.css"
import { Link } from "react-router-dom"

function C_Feedback(){
    return (
        <div>
            <NavBar/>
                        <div id="emptySpace"></div>
                                    <div id="emptySpace"></div>
            <h5 className="cat2" id="PracticeTitle"><b>Your final score is 47/100</b></h5>
            <p  className="cat2">These are the topics where further practice is needed.</p>
            <p  className="cat2">- Lecture 1</p>
            <div id="emptySpace"></div>
            <Link to="/education/learnTopics/content/Lecture1"><button>Learn More</button></Link>
        </div>
    )
}

export default C_Feedback