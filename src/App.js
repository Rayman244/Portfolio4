import React, { useState } from 'react';
import Navigator from './components/Navigation/Navbar';
import Projects from './components/pages/Projects/Projects';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Contact from './components/pages/Contact/Contact';
import Resume from './components/pages/Resume/Resume';
import Footer from './components/Footer/Footer';



function App() {
  const [currentPage, setCurrentPage]= useState('Home')

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return <>
  <header>
    <Navigator currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    </header> 
    <Footer/>
  </>
}

export default App;