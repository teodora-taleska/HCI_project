import "./ContentLectures.css"

function ContentLectures(){
    return(
        <div>
            <div className="learnTitle">
                <button><i className="fa fa-arrow-left" hidden={true}></i></button>
                <h3>Learn</h3>
            </div>

            <div>
            <div className="Lectures">

                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle">Lecture 1. What goes on during your monthly cycle?</p>
                    </div>
                    <div className="divLectureTime">
                        <p className="lectureTime">5:35 mins reading</p>
                    </div>
                    <div className="divLectureButton">
                        <button type="button" className="readLectureButton">  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle">Lecture 2. Week 1: Estrogen rises</p>
                    </div>
                    <div className="divLectureTime">
                        <p className="lectureTime">15:37 mins reading</p>
                    </div>
                    <div className="divLectureButton">
                        <button type="text" className="readLectureButton">  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle">Lecture 3. Week 1: Estrogen rises</p>
                    </div>
                    <div className="divLectureTime">
                        <p className="lectureTime">15:37 mins reading</p>
                    </div>
                    <div className="divLectureButton">
                        <button type="text" className="readLectureButton">  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle">Lecture 4. Week 1: Estrogen rises</p>
                    </div>
                    <div className="divLectureTime">
                        <p className="lectureTime">15:37 mins reading</p>
                    </div>
                    <div className="divLectureButton">
                        <button type="text" className="readLectureButton"> <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div className="Lecture">
                    <div className="divLectureTitle">
                        <p className="lectureTitle">Lecture 5. Week 1: Estrogen rises</p>
                    </div>
                    <div className="divLectureTime">
                        <p className="lectureTime">15:37 mins reading</p>
                    </div>
                    <div className="divLectureButton">
                        <button type="text" className="readLectureButton">  <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ContentLectures