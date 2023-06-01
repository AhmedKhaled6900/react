import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import theimage from "../imgs/hero-img.png"
import play from "../imgs/play.png"
import icon1 from "../imgs/icon1.png"
import icon2 from "../imgs/icon2.png"
import icon3 from "../imgs/icon3.png"
import icon4 from "../imgs/icon4.png"
import manager from "../imgs/hero-img.png"
import Loader from './loader';
// import { useEffect, useState } from 'react';

// import 'animate.css';
function Home() {

//   const [loading,setLoading]=useState(true)

//    useEffect(()=>{
//       setTimeout(() => {
//          setLoading(false)
//       }, 4000);
//    })


    return (
   



      <Container  fluid >
{/* 
{loading&&<Loader></Loader>}
{!loading&& */}

<Container fluid className='home animate__animated animate__fadeIn    --animate-duration: 2s;'  >


<Container className='mb-lg-5'>
<Row   className='pt-5 text-center mt-5  aaa '>
        <Col lg={6} className='mt-lg-5'  >
     <div >
        <h1 className='pt-5 mb-4 fw-bold'>
        The Design <br />
         Thinking <br />
          Superpowers
        </h1>
     </div>
     <div>
        <p className='mb-4 lh-lg'>
        Tools tutorials, design and innovation experts, allin one place! The most intuitive way to imagineyour next user experience.        </p>
     </div>
     <div className='d-flex justify-content-center'>
        <Button className='me-3 fw-bold' >Get Started</Button>
        <img  className='img-fluid ' src={play} alt="" />
     </div>
  
        </Col>
        <Col lg={6} className='imgs-container position-relative mt-5' >
         
                <img className=' position-absolute  homeimge  img-fluid animate__animated animate__bounceOutUp animate__delay-2s' src={theimage} alt="" />
                <img className=' position-absolute  homeimge img-fluid animate__animated animate__fadeIn animate__delay-3s' src={manager} alt="" />
           
            
            
             </Col>
      </Row>
</Container>

  <Container className='mt-lg-5 text-center pt-lg-5 ' >

    <Row className='mt-lg-5' >
      <Col lg={12}>
    <h1 className='text-center pt-5 mt-lg-4 mb-lg-5' >We design tools to unveil your superpowers</h1>

      </Col>
<Col className='col-6 mt-lg-4' lg={3} > <img src={icon1} alt="" />
<h3> First click tests</h3>
<p>While most people enjoy casino gambling,</p>
</Col>
<Col  className='col-6 mt-lg-4' xs={6} lg={3} > <img src={icon2} alt="" />
<h3> Design surveys</h3>
<p>Sports betting,lottery and bingo playing for the fun</p>
</Col>
<Col className='col-6 mt-lg-4' lg={3} xs={6} > <img src={icon3} alt="" />
<h3> First click tests</h3>
<p>The Myspace page defines the individual</p>
</Col>
<Col className='col-6 mt-lg-4' lg={3} xs={6} > <img src={icon4} alt="" />
<h3> Preference tests</h3>
<p>Personal choices and the overall personality of the person.</p>
</Col>
    </Row>
  </Container>
        </Container>





      </Container>
                    
                 



 

      );
}

export default Home;