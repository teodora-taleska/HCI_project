import NavBar from "../components/NavBar"
import GenderIcons from "../components/Education/GenderIcons"
import Lecture2 from "../components/Education/Lecture2"




function Education(){
    return(
        <div>
            <NavBar />
            <div className="content">
                <GenderIcons />
            </div>
        </div>
    )
}

export default Education