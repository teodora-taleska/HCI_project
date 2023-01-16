import "./EducationComponents.css"
import { Link } from "react-router-dom"

function GenderIcons(){
    return(
        <div>
            <p id="txtfaqs"><b>Learn</b></p>

            <Link to="/education/learnTopics"><button id="female"><i class="fa fa-venus fa-4x" aria-hidden="true"></i></button></Link>
            <Link to="/education/learnTopics"><button id="male"><i class="fa fa-mars fa-4x" aria-hidden="true"></i></button></Link>
            <Link to="/education/learnTopics"><button id="other"><i class="fa fa-transgender fa-4x" aria-hidden="true"></i></button></Link>
            <div id="faqslink">
                <a id="faqslink2" href="#">FAQs</a>
            </div>
        </div>
    )
}


export default GenderIcons