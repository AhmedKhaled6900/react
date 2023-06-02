import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../imgs/logo.svg"
function Footer() {
    return ( 

        <Container fluid className="pt-5 pb-3 footer" >
<Row>
<Col className="col-6 d-flex justify-content-center align-items-center" lg={4}>
<img src={logo} alt="" />
</Col>
<Col className="col-6" lg={4}>
<h4 className="text-center">Follow us</h4>
<div>
<ul className="d-flex gap-1 justify-content-around "  >
    <li><i className="bi bi-whatsapp    "    ></i></li>
    <li><i className="bi bi-facebook"></i></li>
    <li><i className="bi bi-envelope"></i></li>
    <li><i className="bi bi-facebook"></i></li>
</ul>
</div>
</Col>
</Row>


        </Container>
     );
}

export default Footer;