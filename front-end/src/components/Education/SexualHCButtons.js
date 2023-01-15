import "./SexualHCButtons.css"

function SexualHCButtons(){
    return(
        <div>
            <div className="learnTitle">
                <button><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                <h3>Learn</h3>
                <div><h5>Categories:</h5></div>
            </div>

            <div className="sex-categories">
                <button>Diseases</button>
                <button>Prevention and treatement</button>
            </div>
        </div>
    )
}

export default SexualHCButtons