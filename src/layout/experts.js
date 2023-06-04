import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../imgs/marketing01.png"
import img2 from "../imgs/marketing02.png"
import img3 from "../imgs/marketing03.png"
function Experts() {
    return ( 

<Container className=" animate__animated animate__fadeIn  --animate-duration: 2s mt-5">
<Row>

    <Col lg={4}>
    <Card className="card" >

        <img src={img1} alt="" />
        <div className="card-layout" >

<h3>
Increasing Prosperity With Positive Thinking
</h3>
</div>
    </Card>
    </Col>
    <Col lg={4}>
    <Card className="card" >

        <img src={img2} alt="" />
        <div className="card-layout" >
<h3>
Increasing Prosperity With Positive Thinking
</h3>
</div>
    </Card>

    </Col>
    <Col lg={4}>
    <Card className="card" >

        <img src={img3} alt="" />
        <div className="card-layout" >

<h3>
Increasing Prosperity With Positive Thinking
</h3>
</div>
    </Card>
    </Col>
  
</Row>
</Container>
     );
}

export default Experts;