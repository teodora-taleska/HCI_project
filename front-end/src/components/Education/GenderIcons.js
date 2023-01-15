import "./GenderIcons.css"

function GenderIcons(){
    return(
        <div>
            <h5 id="txtfaqs">Learn</h5>

            <button id="female"><i class="fa fa-venus fa-4x" aria-hidden="true"></i></button>
            <button id="male"><i class="fa fa-mars fa-4x" aria-hidden="true"></i></button>
            <button id="other"><i class="fa fa-transgender fa-4x" aria-hidden="true"></i></button>

            <div className="learnTitle">
                <button><i className="fa fa-arrow-left" hidden={true}></i></button>
                <h3>Learn</h3>
            </div>

            <a id="faqs" href="#">FAQs</a>
        </div>
    )
}


export default GenderIcons