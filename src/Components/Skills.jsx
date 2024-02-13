import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Skills.css'
function Skills() {
  return (
    <>
      <div className='container skills my-3' >
        <h2 className='text-center fs-1'>Skills & Technology</h2>
        <p className='text-center' style={{margin:'0px 200px'}}>Skills are the currency of the future; invest wisely, and your success will compound.Mastering a skill is not just about what you gain, but who you become in the process.</p>
        <Row className='rowskil mt-3'>
          <Col className='skil html'>✅ Html</Col>
          <Col className='skil css'>✅ Css</Col>
        </Row>
        <Row className='rowskil mt-3'>
          <Col className='skil bootstrap'>✅ Bootstrap</Col>
          <Col className='skil javascript'>✅ JavaScript</Col>
        </Row>
        <Row  className='rowskil mt-3'>
          <Col className='skil react'>✅ React</Col>
          <Col className='skil node'>✅ Node Js</Col>
        </Row>
        <Row  className='rowskil mt-3'>
          <Col className='skil express'>✅ Express</Col>
          <Col className='skil mongo'>✅ Mongo DB</Col>
        </Row>

      </div>
    </>
  )
}

export default Skills