import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../imgs/logo.svg"
function Footer() {
    return ( 

        <Container fluid className="pt-5 pb-3 footer" >
<Row>
<Col className="col d-flex justify-content-center align-items-center mb-3 pt-lg-5" lg={4}>
<img src={logo} alt="" />
</Col>
<Col className="col" lg={4}>
<h4 className="text-center fw-bolder pb-3">Follow us</h4>
<div>
<ul className="d-flex gap-1 justify-content-around p-0 w-50 m-auto"  >
    <li><i className="bi bi-instagram"></i></li>
    <li><i className="bi bi-facebook"></i></li>
    <li><i className="bi bi-envelope"></i></li>
    <li><i className="bi bi-linkedin"></i></li>
</ul>
</div>
</Col>
</Row>


        </Container>
     );
}

export default Footer;