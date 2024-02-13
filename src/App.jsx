
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);
  const [imgurl,setimgurl]=useState("https://static.thenounproject.com/png/4514193-200.png")
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    let light="https://static.thenounproject.com/png/4514193-200.png"
    let dark="https://play-lh.googleusercontent.com/mGLcHR2Yt_Dpclvx7oTYBLwXqxxuJVr4QInuaIDbAFbhACpzB89aGUwQee-7mcjYFw"
    if(isDarkMode===false){
      setimgurl(dark)
    }
    else{
      setimgurl(light)
    }
    console.log(imgurl);
  };
  console.log(isDarkMode);
  
  
  return (
    <>
    
    <Header />
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div id='darklight' >
        <img onClick={toggleTheme} src={imgurl} width={40} height={40} alt="" />
        </div>
  <Routes>    
    <Route path='/' element={<Main />} />
    <Route path='/about' element={ <About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/project' element={ <Projects />} />
    <Route path='/skills' element={ <Skills/>} />
  </Routes>
       
   
     <Footer/>
      </div>
    
      
    </>

  );
}

export default App;
