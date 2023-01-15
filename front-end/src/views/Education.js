import "./Education.css"
import NavBar from "../components/NavBar"
import GenderIcons from "../components/Education/GenderIcons"

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