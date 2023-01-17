import "./Crossword.css"
import NavBar from "../NavBar"
import { Link } from "react-router-dom"
function C_Levels_themed(){
    return (
        <div>
            <NavBar/>
            <div className="crossword-nav">
                <Link to="/crossword/c_buttons"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button></Link>
                <h3 id="learnwbutton"><b>Themed</b></h3>
                <i class="fa fa-star right" aria-hidden="true">5</i>
            </div>
            <div id="all-puzzles">
                   <p className="PuzzleSub">All puzzles</p> 
                   <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
            </div>
            <div id="levels">


            <Link to="/crossword/game"><button className="game-button-active">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button></Link>

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>

 

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>



                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>

                <button className="game-button-passive">
                    <i class="fa fa-table " aria-hidden="true"></i>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <h6>Diseases 0/19</h6>
                </button>



            </div>
        </div>
    )
}

export default C_Levels_themed