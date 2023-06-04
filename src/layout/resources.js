import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Resources() {
    return ( 

        <Container fluid className="pt-5  re-container  animate__animated animate__fadeIn    --animate-duration: 2s">

<Container className="mt-5 pt-5 text-center w-75  "  >
<Row>
<Col>
<h2 className="mt-3"  >Need a super hero?</h2>
<h5 className="mt-3 mb-3"> Do you require some help for your project: Conception workshop,
prototyping, marketing strategy, landing page, Ux/UI?</h5>


<Link to="experts" >

<Button className="mt-3" >
    contact our experts
</Button>
</Link>

</Col>

</Row>
<Outlet></Outlet>
</Container>
        </Container>
   




     );
}

export default Resources;