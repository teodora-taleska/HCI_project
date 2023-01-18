import NavBar from "../NavBar"
import "./Crossword.css"
import { Link } from "react-router-dom"

function C_Feedback(){
    return (
        <div>
            <NavBar/>
            <div className="crossword-nav">
                <Link to="/crossword/game"><button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button></Link>
                <h3 id="learnwbutton"><b>Feedback</b></h3>
                <i class="fa fa-star right" aria-hidden="true">5</i>
            </div>
            
            <div id="content-feedback">
                <div id="title">
                     <h3 id="blue"><b>GOOD JOB!</b></h3>                
                     <h5 className="cat2" id="PracticeTitle"><b>Final score: 47/100</b></h5>

                </div>
               
                <div id="feedback">

               
                <p><b>Topics you succeeded:</b></p>
                <p>1. Excepteur sing occaecat.</p>
                <p>2. Uis autre sing occaecat.</p>
                <p>3. Lorem impsum sing occaecat.</p>
                <br />

                <p><b>Topics worth repeating:</b></p>
                <div className="inline">
                    <p>1. Uis aute.</p>
                    <Link to="/education/learnTopics/content/Lecture1"><button id="link-to-lecture">Go to lecture 1</button></Link>
                </div>
                <div className="inline">
                    <p>1. Ut enim adn exepteur.</p>
                    <Link to="/education/learnTopics/content/Lecture2"><button id="link-to-lecture">Go to lecture 2</button></Link>
                </div>
                
                </div>
                <Link to="/crossword/c_buttons"><button>PLAY AGAIN</button></Link>
            </div>
         </div>
    )
}

export default C_Feedback