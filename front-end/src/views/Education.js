import "./Education.css"
import NavBar from "../components/NavBar"
import GenderIcons from "../components/Education/GenderIcons"
import ContentLectures from "../components/Education/ContentLectures"
import Lecture1 from "../components/Education/Lecture1"
import Lecture2 from "../components/Education/Lecture2"
import ReproductiveHCButtons from "../components/Education/ReproductiveHCButtons"
import SexualHCButtons from "../components/Education/SexualHCButtons"


function Education(){
    return(
        <div>
            <NavBar />
            <div className="content">
                {/* <GenderIcons /> */}
                {/* <ContentLectures /> */}
                {/*<Lecture1 />*/}
            {/*<Lecture2 />*/}
                {/*<ReproductiveHCButtons />*/}
                {/*<SexualHCButtons />*/}
            </div>
        </div>
    )
}

export default Education