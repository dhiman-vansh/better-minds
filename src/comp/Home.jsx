import Slidecomp from "./homepg/Slidecomp";
import Ytcomp from "./homepg/Ytcomp";
import Coursecomp from "./homepg/Coursecomp";
import "./All.css"
import Why from "./homepg/Why";


export default function Home() {
    return(
        <div id="home">
        <h2 className="headingsbtw" id="slider">Our Results</h2>
        <Slidecomp />
        <h2 className="headingsbtw" id="yt">Youtube Channel</h2>
        <Ytcomp />
        <h2 className="headingsbtw" id="course">Courses</h2>
        <Coursecomp />  
        <h2 className="headingsbtw" id="yt">Why Us ?</h2>
        <Why />
        </div>
    )
}