import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from 'react-particles-js';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievement from "./components/Achievement";
import Footer from './components/Footer';
import React, {useState,useEffect} from 'react';
// import Cards from "./components/Cards";

function App() {
  return (
    <>
    
    <Navbar/>
      <Particles
      className="particles-canvas"
        params={{
          particles:{
            number:{
              value:30,
              density:{
                enable:true,
                value_area:900
              }
            },
            shape:{
              type: "circle",
              stroke: {
                width:6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Header/>
      <About/>
      
      <Projects/>
      {/* <Cards/> */}
      {/* <Achievement/> */}
      <Skills/>
      <Footer/>
    </>
  );
}

export default App;


