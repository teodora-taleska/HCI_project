import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div id="navbardiv">
            <Link to="/nav-buttons"><i className="fa fa-home fa-2x" aria-hidden="true"></i></Link>
        <div id="right-icons">
            <Link to="/crossword"><i className="rf fa fa-th fa-2x" aria-hidden="true"></i></Link>
            <Link to="/map"><i className="rf fa fa-map-marker fa-2x" aria-hidden="true"></i></Link>
            <Link to="/education"><i className="rf fa fa-book fa-2x" aria-hidden="true"></i></Link>
            <Link to="/"><i className="rf fa fa-user fa-2x" aria-hidden="true"></i></Link>
        </div>
        </div>
    )
}

export default NavBar