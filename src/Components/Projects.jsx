import React, { useState } from 'react'
import './Projects.css'
import Card from 'react-bootstrap/Card';
import carworld from './media/car.png'
import jeff from './media/jeff.png'
import budget from './media/budget.png'
import puzzle from './media/puzzle.png'
import doctor from './media/doctor.png'
import weather from './media/weather.png'
// import wordle from './wordle.png'
// import redux from './redux.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="glass-modal"
    >
      <Modal.Header id='modal-clr' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p id='text'>Car World</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id='body-clr'>
        <img className='pb-3' src={carworld} alt="" />
        <p id='text'>This is a simple project that allows users to register Car with name, price and a key. User can then retrieve the details of specific car with the key. User can also delete the Car details.</p>
      </Modal.Body>
      <Modal.Header id='foot' >
        <div style={{ display: 'flex' }}>
          <p className='pe-3' id='text'>HTML </p>
          <p className='pe-3' id='text'>CSS </p>
          <p className='pe-3' id='text'>BOOTSTRAP</p>
          <p className='pe-3' id='text'>JAVASCRIPT</p>
          <p className='pe-3' id='text'>LOCAL STORAGE</p>

        </div>
        <div className='pt-2'>
          <a href="https://github.com/Mammu405/Car-world" target="_blank" className='pe-4 ' id='icon'><i class="fa-brands fa-github fa-2xl" ></i></a>
          <a href="https://car-search-muhammedp.netlify.app/" target="_blank" >
            <Button id='btn'>View Site</Button>
          </a>
        </div>
      </Modal.Header>
    </Modal>
  );
}
function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="glass-modal"
    >
      <Modal.Header id='modal-clr' closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          <p id='text'>Portfolio</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id='body-clr'>
        <img className='pb-3' src={jeff} alt="" />
        <p id='text'>This is a simple static portfolio websiteof Jeff bezos done in a single page with sections.</p>
      </Modal.Body>
      <Modal.Header id='foot' >
        <div style={{ display: 'flex' }}>
          <p className='pe-3' id='text'>HTML</p>
          <p className='pe-3' id='text'>CSS</p>
          <p className='pe-3' id='text'>BOOTSTRAP</p>
          <p className='pe-3' id='text'>JAVASCRIPT</p>
        </div>
        <div className='pt-2'>
          <a href="https://github.com/Mammu405/portfolio-jeff" target="_blank" className='pe-4 ' id='icon'><i class="fa-brands fa-github fa-2xl" ></i></a>
          <a href="https://jeff-bezos-portfolio.netlify.app/" target="_blank" ><Button id='btn'>View Site</Button></a>
        </div>
      </Modal.Header>
    </Modal>
  );
}

function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="glass-modal"
    >
      <Modal.Header id='modal-clr' closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          <p id='text'>Budget Calculator</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id='body-clr'>
        <img className='pb-3' src={budget} alt="" />
        <p id='text'> This is a budget calculator website made using Local Storage for storing and retrieving data. Users can track their expense and income and check their savings</p>
      </Modal.Body>
      <Modal.Header id='foot' >
        <div style={{ display: 'flex' }}>
          <p className='pe-3' id='text'>HTML</p>
          <p className='pe-3' id='text'>CSS</p>
          <p className='pe-3' id='text'>BOOTSTRAP</p>
          <p className='pe-3' id='text'>JAVASCRIPT</p>
          <p className='pe-3' id='text'>LOCAL STORAGE</p>

        </div>
        <div className='pt-2'>
          <a href="https://github.com/Mammu405/Budget-Cal" target="_blank" className='pe-4 ' id='icon'><i class="fa-brands fa-github fa-2xl" ></i></a>
          <a href="https://budget-cal-muhammedp.netlify.app/" target="_blank" ><Button id='btn'>View Site</Button></a>
        </div>
      </Modal.Header>
    </Modal>
  );
}

function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="glass-modal"
    >
      <Modal.Header id='modal-clr' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p id='text'>15 Puzzle Game</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id='body-clr'>
        <img className='pb-3' src={puzzle} alt="" />
        <p id='text'>The 15 Puzzle is a classic sliding puzzle that consists of a 4x4 grid with numbered tiles from 1 to 15, arranged in a random order. The puzzle gained popularity in the late 19th century and has since become a popular toy and game. The objective is to rearrange the tiles by sliding them into the empty space to achieve a specific numerical order, usually from 1 to 15 in ascending order. The challenge lies in finding the optimal sequence of moves to solve the puzzle, as only one tile can be moved at a time. The 15 Puzzle is often used as an entertaining and educational tool to promote logical thinking and problem-solving skills. This game made with react is super fun to play.</p>
      </Modal.Body>
      <Modal.Header id='foot' >
        <div style={{ display: 'flex' }}>
          <p className='pe-3' id='text'>HTML </p>
          <p className='pe-3' id='text'>CSS </p>
          <p className='pe-3' id='text'>REACT</p>
          <p className='pe-3' id='text'>JAVASCRIPT</p>

        </div>
        <div className='pt-2'>
          <a href="https://github.com/Mammu405/15puzzleRepository" target="_blank" className='pe-4 ' id='icon'><i class="fa-brands fa-github fa-2xl" ></i></a>
          <a href="https://puzzle-muhammedp.netlify.app/" target="_blank" >
            <Button id='btn'>View Site</Button>
          </a>
        </div>
      </Modal.Header>
    </Modal>
  );
}

function MyVerticallyCenteredModal5(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="glass-modal"
    >
      <Modal.Header id='modal-clr' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p id='text'>Weather App</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id='body-clr'>
        <img className='pb-3' src={weather} alt="" />
        <p id='text'> weather app fetches real-time weather data from a chosen weather API, providing users with accurate and up-to-date information about current conditions, forecasts, and more. Simply enter a location, and our app delivers essential weather details, ensuring you're always prepared for whatever Mother Nature has in store.</p>
      </Modal.Body>
      <Modal.Header id='foot' >
        <div style={{ display: 'flex' }}>
          <p className='pe-3' id='text'>HTML </p>
          <p className='pe-3' id='text'>CSS </p>
          <p className='pe-3' id='text'>REACT</p>
          <p className='pe-3' id='text'>API Fetching</p>

        </div>        
        <div className='pt-2'>
          <a href="https://github.com/Mammu405/weather" target="_blank" className='pe-4 ' id='icon'><i class="fa-brands fa-github fa-2xl" ></i></a>
          <a href="https://muhammedp-weather.netlify.app/" target="_blank" >
            <Button id='btn'>View Site</Button>
          </a>
        </div>
      </Modal.Header>
    </Modal>
  );
}

function MyVerticallyCenteredModal6(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="glass-modal"
    >
      <Modal.Header id='modal-clr' closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p id='text'>Doctors List</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id='body-clr'>
        <img className='pb-3' src={doctor} alt="" />
        <p id='text'>Appoinment Booking is API fetching project. Users can view wide variety of Doctors,Hospital and its details ,operating hours and reviews.</p>
      </Modal.Body>
      <Modal.Header id='foot' >
        <div style={{ display: 'flex' }}>
          <p className='pe-3' id='text'>HTML </p>
          <p className='pe-3' id='text'>CSS </p>
          <p className='pe-3' id='text'>REACT</p>
          <p className='pe-3' id='text'>JSON SERVER</p>

        </div>
        <div className='pt-2'>
          <a href="https://github.com/Mammu405/doctor-appoinment" target="_blank" className='pe-4 ' id='icon'><i class="fa-brands fa-github fa-2xl" ></i></a>
          <a href="https://muhammed-doctor-app.netlify.app/" target="_blank" >
            <Button id='btn'>View Site</Button>
          </a>
        </div>
      </Modal.Header>
    </Modal>
  );
}
function Projects() {
  const [modalShow, setModalShow] = React.useState(false);
  const [isHovered, setHovered] = useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [isHovered2, setHovered2] = useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [isHovered3, setHovered3] = useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [isHovered4, setHovered4] = useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);
  const [isHovered5, setHovered5] = useState(false);
  const [modalShow6, setModalShow6] = React.useState(false);
  const [isHovered6, setHovered6] = useState(false);
  return (
    <div id="pro_body" className='main p-5 ' style={{minHeight:'80vh'}}>
    <Row>
      <Col>
      <div id='card_div' className={`image-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
        <img onClick={() => setModalShow(true)} src={carworld} alt="" />
        <button onClick={() => setModalShow(true)} className='button'>Car World</button>
        {isHovered && <img className="eye-image" src="https://cdn-icons-png.flaticon.com/512/65/65000.png" alt="Eye Image" />}
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)} />
      </div>
      </Col>
      <Col>
      <div id='card_div'  className={`image-container ${isHovered2 ? 'hovered' : ''}`} onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}>
        <img onClick={() => setModalShow2(true)} src={jeff} alt="" />
        <button onClick={() => setModalShow2(true)} className='button'>Portfolio</button>
        {isHovered2 && <img className="eye-image" src="https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915454_960_720.png" alt="Eye Image" />}
        <MyVerticallyCenteredModal2
            show={modalShow2}
            onHide={() => setModalShow2(false)} />
      </div>
      </Col>
      <Col>
      <div id='card_div' className={`image-container ${isHovered3 ? 'hovered' : ''}`} onMouseEnter={() => setHovered3(true)} onMouseLeave={() => setHovered3(false)}>
        <img onClick={() => setModalShow3(true)} src={budget} alt="" />
        <button onClick={() => setModalShow3(true)} className='button'>Budget Calculator</button>
        {isHovered3 && <img className="eye-image" src="https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915454_960_720.png" alt="Eye Image" />}
        <MyVerticallyCenteredModal3
            show={modalShow3}
            onHide={() => setModalShow3(false)} />
      </div>
      </Col>
    </Row>
    <Row className='mt-5'>
    <Col>
      <div    id='card_div' className={`image-container ${isHovered4 ? 'hovered' : ''}`} onMouseEnter={() => setHovered4(true)} onMouseLeave={() => setHovered4(false)} >
        <img onClick={() => setModalShow4(true)} src={puzzle} alt="" />
        <button onClick={() => setModalShow4(true)} className='button'>15 Puzzle Game</button>
        {isHovered4 && <img className="eye-image" src="https://cdn-icons-png.flaticon.com/512/65/65000.png" alt="Eye Image" />}
        <MyVerticallyCenteredModal4
            show={modalShow4}
            onHide={() => setModalShow4(false)} />
      </div>
      </Col>
      <Col>
      <div    id='card_div' className={`image-container ${isHovered5 ? 'hovered' : ''}`} onMouseEnter={() => setHovered5(true)} onMouseLeave={() => setHovered5(false)} >
        <img onClick={() => setModalShow5(true)} src={weather} alt="" />
        <button onClick={() => setModalShow5(true)} className='button'>Weather App </button>
        {isHovered5 && <img className="eye-image" src="https://cdn-icons-png.flaticon.com/512/65/65000.png" alt="Eye Image" />}
        <MyVerticallyCenteredModal5
            show={modalShow5}
            onHide={() => setModalShow5(false)} />
      </div>
      </Col>
      <Col>
      <div    id='card_div' className={`image-container ${isHovered6 ? 'hovered' : ''}`} onMouseEnter={() => setHovered6(true)} onMouseLeave={() => setHovered6(false)} >
        <img onClick={() => setModalShow6(true)} src={doctor} alt="" />
        <button onClick={() => setModalShow6(true)} className='button'>Doctor Appoinment </button>
        {isHovered6 && <img className="eye-image" src="https://cdn-icons-png.flaticon.com/512/65/65000.png" alt="Eye Image" />}
        <MyVerticallyCenteredModal6
            show={modalShow6}
            onHide={() => setModalShow6(false)} />
      </div>
      </Col>

      
    </Row>
    <Row className='mt-3 pt-5'>
    <div className='text-center 'style={{cursor:'pointer'}} >
    <a href="https://github.com/Mammu405" target='_blank' style={{textDecoration:'none', color:'White'}}> <h5 id="view_more"> View more at my GIT </h5></a>
    </div>
    </Row>
  </div>
  )
}

export default Projects






// import React from 'react'
// import { Col, Row } from 'react-bootstrap'
// import './Projects.css'
// function Projects() {
//   return (
//     <>
//       <div className="container">
//         <h2 className='text-center mb-4'>Projects</h2>
//         <Row>
//           <Col className='text-center'>
//           <div class="project-container project-card">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" width={250} height={120}
//             alt="expense-tracker"
//             loading="lazy"
//             class="project-pic"
//           />
//           <h3 class="project-title mt-2">Expense Tracker</h3>
//           <p class="project-details px-5">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
//             ratione vel inventore labore commodi modi quos culpa aut saepe!
//             Alias!
//           </p>
//           <a href="#" target="_blank" class="project-link">Check it Out</a>
//         </div>
//           </Col>

//           <Col className='text-center'>
//           <div class="project-container project-card">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" width={250} height={120}
//             alt="expense-tracker"
//             loading="lazy"
//             class="project-pic"
//           />
//           <h3 class="project-title mt-2">Expense Tracker</h3>
//           <p class="project-details px-5">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
//             ratione vel inventore labore commodi modi quos culpa aut saepe!
//             Alias!
//           </p>
//           <a href="#" target="_blank" class="project-link">Check it Out</a>
//         </div>
//           </Col>

//           <Col className='text-center'>
//           <div class="project-container project-card">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" width={250} height={120}
//             alt="expense-tracker"
//             loading="lazy"
//             class="project-pic"
//           />
//           <h3 class="project-title mt-2">Expense Tracker</h3>
//           <p class="project-details px-5">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
//             ratione vel inventore labore commodi modi quos culpa aut saepe!
//             Alias!
//           </p>
//           <a href="#" target="_blank" class="project-link">Check it Out</a>
//         </div>
//           </Col>

//         </Row>

//         <Row className='mt-5 pt-3'> 
//           <Col className='text-center'>
//           <div class="project-container project-card">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" width={250} height={120}
//             alt="expense-tracker"
//             loading="lazy"
//             class="project-pic"
//           />
//           <h3 class="project-title mt-2">Expense Tracker</h3>
//           <p class="project-details px-5">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
//             ratione vel inventore labore commodi modi quos culpa aut saepe!
//             Alias!
//           </p>
//           <a href="#" target="_blank" class="project-link">Check it Out</a>
//         </div>
//           </Col>

//           <Col className='text-center'>
//           <div class="project-container project-card">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" width={250} height={120}
//             alt="expense-tracker"
//             loading="lazy"
//             class="project-pic"
//           />
//           <h3 class="project-title mt-2">Expense Tracker</h3>
//           <p class="project-details px-5">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
//             ratione vel inventore labore commodi modi quos culpa aut saepe!
//             Alias!
//           </p>
//           <a href="#" target="_blank" class="project-link">Check it Out</a>
//         </div>
//           </Col>

//           <Col className='text-center'>
//           <div class="project-container project-card">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" width={250} height={120}
//             alt="expense-tracker"
//             loading="lazy"
//             class="project-pic"
//           />
//           <h3 class="project-title mt-2">Expense Tracker</h3>
//           <p class="project-details px-5">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
//             ratione vel inventore labore commodi modi quos culpa aut saepe!
//             Alias!
//           </p>
//           <a href="#" target="_blank" class="project-link">Check it Out</a>
//         </div>
//           </Col>

//         </Row>
//       </div>
//     </>
//   )
// }

// export default Projects