import "./EducationComponents.css"

function SexualHCButtons(){
    return(
        <div>


           <div className="learnTitle">
                <button id="arrowbutton"><i class="fa fa-arrow-left" aria-hidden="true"></i> </button>
                <h3 id="learnwbutton"><b>Learn</b></h3> 
            </div>
            <h5 id="cat">Categories:</h5>

            <div className="reproductive-categories">
                <button className="buttons3">Diseases</button>
                <button className="buttons3">Hormonal cycle</button>
                <button className="buttons3">Prevention and treatement</button>
            </div>


        </div>

    )
}

export default SexualHCButtons