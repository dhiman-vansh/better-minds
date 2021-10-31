// import YouTube from '@u-wave/react-youtube';
import { Carousel, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import "./Style.css"
export default function Ytcomp() {
    return(
        <div className="ytcomp">
        <div>
        <img src="https://s3.envato.com/files/273747259/349_T13A4803.jpg"
        className="ytcompimg" />
        </div>
        <div >
        <ReactPlayer controls
        width='370px'
        url="https://www.youtube.com/watch?v=zTitoHKsyJg" />
        </div>
        </div>
    )
}