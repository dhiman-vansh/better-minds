import { Carousel, Container } from 'react-bootstrap'
import './Style.css'
export default function Slidecomp() {
  
    return (
        <>
        {/* <Container className="slidercomp"> */}
  <Carousel fade className="slidercomp"> 
  <Carousel.Item interval={500} >
    <img
      className="d-block w-100"
      src="https://www.vedantu.com/cdn/images/new-homepage/12thBoard.jpeg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.vedantu.com/cdn/images/new-homepage/jee/jee-advanced-web1-new.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.vedantu.com/cdn/images/new-homepage/JEE4_Web.jpeg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
{/* </Container> */}
        </>
    )
}