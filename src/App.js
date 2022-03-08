import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigation/Navbar";
import Projects from "./components/pages/Projects/Projects";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Contact from "./components/pages/Contact/Contact";
import Resume from "./components/pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {


  return (
    <>  <Router>
       <Navigator
          />
          <Routes> 
            <Route exact path='/' element={<AboutMe/>}/>
            <Route exact path='react-portfolio4/' element={<AboutMe/>}/>
            <Route exact path='/Portfolio' element={<Projects/>}/>
            <Route exact path='/Contact' element={<Contact/>}/>
            <Route exact path='/Resume' element={<Resume/>}/>
          </Routes>
         
        
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
