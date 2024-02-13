import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import './Main.css'
import Typewriter from 'typewriter-effect'
function Main() {
  return (
    <div>
      
        <Row className=' projectssss m-5'>
            <Col md={7} className='ms-5 ps-5' style={{marginTop:"-80px"}}>
            <h1 className='mt-5'>Hi,im Muhammed P,</h1>
            <h2>
              <Typewriter
              options={{
                autoStart:true,
                loop:true,
                delay:100,
                strings:["MEA(R)N STACK DEVELOPER"]
              }}
              />
            </h2>
            <p className='mt-4'>
I am a dynamic MEA(R)N Stack Developer with extensive experience gained through internships at Luminar Technolab and Btrac Kannur. Armed with a Bachelor's degree in Computer Applications from St. Joseph’s College, Pilathara, I am driven by a passion for technology and innovation, eager to contribute to cutting-edge projects and make a meaningful impact in the tech industry.</p>
<p> At Luminar Technolab, I specialized in front-end solutions with Angular and React, while also mastering server-side logic with Node.js and Express.js. Additionally, I excelled in database management, optimizing MongoDB databases for efficient data storage and retrieval. During my tenure at Btrac Kannur, I delved into Python web development, utilizing the Django framework to create and maintain an E-commerce website Rerun.</p>
            <div className='mt-4 but'>
               <a href="/about"> <button className='btn'>Hire Me</button></a>
                <a href="/project"><button className='btn ms-3'>Projects</button> </a>{/*See My Past Work*/}
            </div>
            </Col>
            <Col md={4}>
            <img className='ms-5 ps-5' src="https://clipground.com/images/someone-working-clipart-1.png" alt="" width={450} style={{marginBottom:'200px'}}/>
            </Col>
        </Row>
    </div>
  )
}

export default Main