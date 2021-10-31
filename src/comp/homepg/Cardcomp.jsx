import {Card} from 'react-bootstrap'
import './Style.css'
export default function Cardcomp(props) {
    console.log(props);
    return(
        <div >
        <Card className="cardcomp">
        <Card.Img variant="top" src={props.url} style={{height:"15rem"}} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        Here you can explore the content made for {props.title}
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}