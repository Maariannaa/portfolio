import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div>
      {/* <header >
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <>
        <HomePage />
        <MyWorks />
        <AboutMe />
        <Contact />
      </>
    </div>
  );
}

export default App;
