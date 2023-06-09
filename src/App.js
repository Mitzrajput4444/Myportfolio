import React from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Skills from './components/skills/Skills';
import Details from './components/details/Details';
import Contact from './components/contact/Contact';
import Project from './components/projects/Project';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="w-full h-auto bgColor">
  <div className='max-w-screen-xl mx-auto'>
  <Navbar/>
  <Main/>
  <Details/>
  <Project/>
  <Skills/> 
  <Contact/>
  <Footer/>
  </div>
  <div>

  </div>
    </div>
  );
}

export default App;
 