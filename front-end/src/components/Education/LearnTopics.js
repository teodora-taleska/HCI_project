import NavBar from "../NavBar"
import "./EducationComponents.css"
import { Link } from "react-router-dom"

function LearnTopics(){
    return(
        <div>
            <NavBar />
            <div className="learnTitle">
            <Link to="/education"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i></button></Link>
               <h3 id="learnwbutton"><b>Learn</b></h3>
               <h5 id="cat">Topics:</h5>
            </div>

            <div className="topics">
                <Link to="/education/learnTopics/sexhc"><button className="buttons3">Sexual health care</button></Link>
                <Link to="/education/learnTopics/rephc"><button className="buttons3">Reproductive health care</button></Link>
            </div>
            

        </div>
    )
}

export default LearnTopics