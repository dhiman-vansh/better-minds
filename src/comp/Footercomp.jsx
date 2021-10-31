import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './All.css'  
export default function Footercomp() {
    return(
        <>
<MDBFooter color="black" className="font-small pt-4 mt-4" className="footercomp" id='foot'>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Note</h5>
            <p>
              Welcome to Better Minds. Here we provide all the study material you need.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Overview</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#slider">Our results</a>
              </li>
              <li className="list-unstyled">
                <a href="#yt">Youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="#course">Courses</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact Us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#slider">Phone number - 8755381346</a>
              </li>
              <li className="list-unstyled">
                <a href="#yt">Instagram - Better Minds</a>
              </li>
              <li className="list-unstyled">
                <a href="#course">Address - Dehradun</a>
              </li>
            </ul>
          </ MDBCol>
          <MDBCol>
          <h5 className="title">Teams</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#slider">Aman</a>
              </li>
              <li className="list-unstyled">
                <a href="#yt">Ankit</a>
              </li>
              <li className="list-unstyled">
                <a href="#course">Vansh</a>
              </li>
            </ul>
          </ MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
        </>
    )
}