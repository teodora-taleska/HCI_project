import NavBar from "../NavBar"
import "./EducationComponents.css"
import { Link } from "react-router-dom"

function ReproductiveHCButtons(){
    return(
        <div>

            <NavBar />
           <div className="learnTitle">
                <Link to="/education/learnTopics"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button></Link>
                <h3 id="learnwbutton"><b>Learn</b></h3> 
            </div>
            <h5 id="cat">Categories:</h5>
            <div className="reproductive-categories">
            <Link to="/education/learnTopics/content">
                <button className="buttons3">Parts of reproductive organs</button>
 
            </Link>
            <Link to="/education/learnTopics/content">
                <button className="buttons3">Hormonal cycle</button>
                
            </Link>
            <Link to="/education/learnTopics/content">
                <button className="buttons3">Health care</button>
            </Link>
            </div>


        </div>
    )
}

export default ReproductiveHCButtons