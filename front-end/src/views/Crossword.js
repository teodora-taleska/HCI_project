import NavBar from "../components/NavBar"
import C_Home from "../components/Crossword/C_Home"

function Crossword(){
    return(
        <div>
            <NavBar />
            <div className="content">
                <C_Home />
            </div>
        </div>
    )
}

export default Crossword