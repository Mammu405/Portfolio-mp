import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <Navbar className='foot'>
         <Container className='text-center' style={{marginLeft:'500px'}}>
         <p class="cp-text text-center text-white mt-3">
    © Copyright 2023  Muhammed P. All rights reserved.
</p>
            </Container>   
      
        </Navbar>
     
    </div>
  )
}

export default Footer