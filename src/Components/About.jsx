import React from 'react'
import Pro from './Profile.jpg'
import pdfFile from '../Components/MUHAMMED P.pdf';
function About() {
  
  const handleDownload = () => {
    // Path to your PDF file
    const pdfPath = pdfFile;
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Muhammedp_resuma.pdf'; // Set the desired name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div>
        <div className='image text-center'>
          <img src={Pro} width={250} height={250} style={{borderRadius:'50%'}} alt="" />
        </div>
        <div className='my-2 text-center'>
          <button onClick={handleDownload}   className='btn ' style={{backgroundColor:'#1f5156',color:'white' }}>Download Cv</button>
          </div>
        <div className='text-center my-4 px-5'>
          <h3 className='mb-3'>Hi, I am Muhammed,nice to meet you!</h3>
          <p className=''style={{padding:'0px 250px'}}> I'm Muhammed P, a dedicated professional with a strong background in computer science and an ongoing commitment to mastering the MEARN stack. I'm passionate about technology and eager to make a meaningful impact in the world of software development. Let's connect and create something remarkable together!</p>
        </div>
        <div className='text-center mt-1 ' style={{fontSize:"30px",color:'black',marginTop:'-30px'}}>
        
        <a href="https://www.linkedin.com/in/muhammed-p-84809a200/" target='_blank'><i class="fa-brands fa-linkedin "></i></a>
          <a href="#"><i class="fa-regular fa-envelope text-danger ms-3"></i></a>
          <a href="https://github.com/Mammu405" target='_blank'><i class="fa-brands fa-github text-dark ms-3 "></i></a>
          
        </div>
      </div>
    </>
  )
}

export default About