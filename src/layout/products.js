import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import valimg from "../imgs/validation.png"
import managerimg from "../imgs/manager.png"
import tick from "../imgs/tick.png"
import marketer from "../imgs/marketer.png"
function Products() {
    return ( 
<Container className="mt-5 pt-5  animate__animated animate__fadeIn    --animate-duration: 2s;">
    <Container>
    <Row>
        <Col lg={6}>
        <h1 className="mt-3">
            Design Professionals
            </h1>
        <div className="text-con mt-3">
            <h3 className="mt-3">
            Effortless Validation for
            </h3>
            <h6 className="mt-3 pb-3">
            The Myspace page defines the individual,his or her characteristics, traits, personal choices and the overall
personality of the person.
            </h6>
        </div>
        <div className="text-con mt-3">
            <h3>
            Effortless Validation for
            </h3>
            <h6 className="pb-3"> 
            The Myspace page defines the individual,his or her characteristics, traits, personal choices and the overall
personality of the person.
            </h6>
        </div>
        <div className="text-con mt-3">
            <h3>
            Effortless Validation for
            </h3>
            <h6 className="pb-3">
            The Myspace page defines the individual,his or her characteristics, traits, personal choices and the overall
personality of the person.
            </h6>
        </div>
        <div className="text-con mt-3">
            <h3>
            Effortless Validation for
            </h3>
            <h6 className="pb-3">
            The Myspace page defines the individual,his or her characteristics, traits, personal choices and the overall
personality of the person.
            </h6>
        </div>
        </Col>
        <Col>
        <img className="img-fluid mt-3" src={valimg} alt="" />
        </Col>
    </Row>
    </Container>
    <Container>
    <Row className="mt-5 pt-5" >
        <Col lg={6}>
        <h1 className="mt-3">
        Marketers
            </h1>
        <div className="text-con mt-3">
            <h3 className="mt-3">
            Effortless Validation for
            </h3>
            <h6 className="mt-3 pb-3">
            Few would argue that, despite the advancements of
feminism over the past three decades, women still face a
double standard when it comes to their behavior.
            </h6>
        </div>
        <div className="text-con mt-3">
            <h3>
            Accessory makers
            </h3>
            <h6 className="pb-3"> 
            While most people enjoy casino gambling, sports betting,
lottery and bingo playing for the fun
            </h6>
        </div>
        <div className="text-con mt-3">
            <h3>
            Alterationists
            </h3>
            <h6 className="pb-3">
            If you are looking for a new way to promote your business
that won't cost you money,
            </h6>
        </div>
        <div className="text-con mt-3">
            <h3>
            Custom Design designers
            </h3>
            <h6 className="pb-3">
            If you are looking for a new way to promote your business
that won't cost you more money,
            </h6>
        </div>
        </Col>
        <Col>
        <img className="img-fluid mt-3" src={marketer} alt="" />
        </Col>
    </Row>
    </Container>
<Container>
<Row className="mt-5 pt-5">
<Col lg={6}>
<h1> Product Managers</h1>
<div className="mt-5 mb-5 ">
    <h3> Easier decision making for</h3>
    <h6> The Myspace page defines the individual,his or her characteristics, traits, personal choices and the overall
personality of the person.</h6>
</div>
    <div  className="d-flex mt-3  align-items-center  ">
        <img className="img-fluid me-3 " src={tick} alt="" />
        <h6> Never worry about overpaying for your
energy again. </h6>
    </div>
    <div className="d-flex  mt-3 align-items-center   ">
        <img className="img-fluid me-3 " src={tick} alt="" />
        <h6>We will only switch you to energy companies
that we trust and will treat you right </h6>
    </div>
    <div className="d-flex  mt-3  align-items-center">
        <img  className="img-fluid me-3 " src={tick} alt="" />
        <h6> We track the markets daily and know where the
savings a </h6>
    </div>
    <div className="d-flex  mt-3  align-items-center">
        <img  className="img-fluid me-3 " src={tick} alt="" />
        <h6> We track the markets daily and know where the
savings a </h6>
    </div>
</Col>
<Col lg={6}>
<img src={managerimg} className="img-fluid mt-3" alt="" />
</Col>
    </Row>
</Container>
</Container>
     );
}

export default Products;