import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <>
    
    <div style={{marginTop:'-30px',fontFamily:"'Young Serif', serif"}}>
    <h2 className='text-center mb-4 fs-1'style={{fontFamily:"'Dancing Script', cursive", color:  "#296c72",fontWeight:'600'}}>Contact</h2>
        <Row>
          <Col className='ms-4'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31224.93517125248!2d75.2663094955472!3d11.966407732243757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba41431bc5c86a9%3A0x372780c5c445ad38!2sMatool%2C%20Kerala!5e0!3m2!1sen!2sin!4v1697177855422!5m2!1sen!2sin"style={{border:'2'}} width="900" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>

          <Col className=' pe-4' style={{margin:"0px 20px"}}>
          <h3 className='fs-2' style={{color:' #316685'}}><b>Hire Me</b></h3>
          <p className='justify-content'>Experienced, dedicated, and driven professional ready to bring expertise and passion to your team. With a proven track record of success and a commitment to ongoing learning, I'm eager to contribute to your organization's goals and drive innovation.</p>
          <Form>
      
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="floatingTextarea2">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          placeholder=""
          style={{ height: '100px' }}
        />
      </Form.Group>
    </Form>
          </Col>
        </Row>
    </div>
     
      
    </>
  )
}

export default Contact