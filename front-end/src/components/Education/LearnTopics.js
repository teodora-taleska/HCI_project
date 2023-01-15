import "./LearnTopics.css"

function LearnTopics(){
    return(
        <div>
            <div className="learnTitle">
                <button><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                <h3>Learn</h3>
                <div><h5>Topics:</h5></div>
            </div>

            <div className="topics">
                <button>Sexual health care</button>
                <button>Reproductive health care</button>
            </div>
            

        </div>
    )
}

export default LearnTopics