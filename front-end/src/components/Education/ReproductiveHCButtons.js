import "./EducationComponents.css"

function ReproductiveHCButtons(){
    return(
        <div>


           <div className="learnTitle">
                <button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button>
                <h3 id="learnwbutton"><b>Learn</b></h3> 
            </div>
            <h5 id="cat">Categories:</h5>
            <div className="reproductive-categories">
                <button className="buttons3">Parts of reproductive organs</button>
                <button className="buttons3">Hormonal cycle</button>
                <button className="buttons3">Health care</button>
            </div>


        </div>
    )
}

export default ReproductiveHCButtons