import { Col, Container, Row } from "react-bootstrap";
import uiux from "../imgs/Web-design-vs-web-de.avif"
function Uiux() {
    return (  
<Container fluid className="seo">
<Row>
<Col lg={6}>
<h1>
User Interface (UI)
</h1>
<h5>
A specialization of web design that deals with the controls people use to interact with a website or app, including button displays and gesture controls

</h5>
</Col>
<Col>
<img className="img-fluid" src={uiux} alt="" />
</Col>
</Row>
<Row>
<Col lg={6}>
<h1>
User Interface (UI)
</h1>
<h5>
A specialization of web design that deals with the controls people use to interact with a website or app, including button displays and gesture controls

</h5>
</Col>
<Col>
<img className="img-fluid" src={uiux} alt="" />
</Col>
</Row>


</Container>
     );
}

export default Uiux;