import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigation/Navbar";
import Projects from "./components/pages/Projects/Projects";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Contact from "./components/pages/Contact/Contact";
import Resume from "./components/pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  // const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   if (currentPage === "Home") {
  //     return <AboutMe />;
  //   }
  //   if (currentPage === "Projects") {
  //     return <Projects />;
  //   }
  //   if (currentPage === "Contact") {
  //     return <Contact />;
  //   }
  //   return <Resume />;
  // };
  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>  <Router>
       <Navigator
            // currentPage={currentPage}
            // handlePageChange={handlePageChange}
          />
          <Routes> 
            <Route exact path='/' element={<AboutMe/>}/>
            <Route exact path='/Portfolio' element={<Projects/>}/>
            <Route exact path='/Contact' element={<Contact/>}/>
            <Route exact path='/Resume' element={<Resume/>}/>



            {/* <Route path='/Projects' element={<Projects/>}/> */}
          </Routes>
         
        
      </Router>
      
      
      <Footer />
    </>
  );
}

export default App;
