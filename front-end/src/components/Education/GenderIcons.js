import "./GenderIcons.css"

function GenderIcons(){
    return(
        <div>
            <div className="learnTitle">
                <button><i className="fa fa-arrow-left" hidden={true}></i></button>
                <h3>Learn</h3>
            </div>
            

            <button ><i className="fa fa-venus" aria-hidden="true"></i></button>
            <button><i className="fa fa-mars" aria-hidden="true"></i></button>
            <button><i className="fa fa-transgender" aria-hidden="true"></i></button>

            <a href="#">FAQs</a>
        </div>
    )
}


export default GenderIcons