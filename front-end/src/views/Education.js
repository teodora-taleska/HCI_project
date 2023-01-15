import "./Education.css"
import NavBar from "../components/NavBar"
import GenderIcons from "../components/Education/GenderIcons"
import ContentLectures from "../components/Education/ContentLectures"
import Lecture1 from "../components/Education/Lecture1"

function Education(){
    return(
        <div>
            <NavBar />
            <div className="content">
                {/* <GenderIcons /> */}
                {/* <ContentLectures /> */}
                <Lecture1 />
            </div>
        </div>
    )
}

export default Education