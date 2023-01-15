import "./EducationComponents.css"

function ReproductiveHCButtons(){
    return(
        <div>
            <div>
            <div className="learnTitle">
                <button><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                <h3>Learn</h3>
                <div><h5>Categories:</h5></div>
            </div>

            <div className="reproductive-categories">
                <button>Parts of reproductive organs</button>
                <button>Hormonal cycle</button>
                <button>Health care</button>
            </div>
        </div>
        </div>
    )
}

export default ReproductiveHCButtons