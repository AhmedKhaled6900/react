import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../imgs/marketing01.png"
import img2 from "../imgs/marketing02.png"
import img3 from "../imgs/marketing03.png"
import { Link, Outlet } from "react-router-dom";
import Ceo from "./uiux";
function Experts() {
    return ( 

<Container fluid className=" animate__animated animate__fadeIn  --animate-duration: 2s mt-5">

<Row>

    <Col lg={4}>
    <Card className="card mb-3" >

        <img src={img1} alt="" />
        <div className="card-layout pt-2" >
<Link to="uiux">
<h5> 
Ui/UX Specialist
</h5>
</Link>

</div>
    </Card>
    </Col>
    <Col lg={4}>
    <Card className="card  mb-3" >

        <img src={img2} alt="" />
        <div className="card-layout pt-2 " >

            <Link to="frontend">
            <h5>
Frontend Developer
</h5>
            </Link>

</div>
    </Card>

    </Col>
    <Col lg={4}>
    <Card className="card  mb-3" >

        <img src={img3} alt="" />
        <div className="card-layout pt-2" >
<Link to="backend">

<h3>
Backend Developer
</h3>
</Link>

</div>
    </Card>
    </Col>
  
</Row>
<Outlet></Outlet>
</Container>


     );
}

export default Experts;