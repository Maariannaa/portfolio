// Common
import React from 'react';

// Components
import HomePage from './components/home/Home'
import MyWorks from './components/works/Works';
import Contact from './components/contact/Contact';
import AboutMe from './components/about/About'
import { ThemeContext } from './themes/ThemeContext'

export default function App() {

  return (
    <ThemeContext.Provider value={'dark'}>
      <HomePage />
      <MyWorks />
      <AboutMe />
      <Contact />
    </ThemeContext.Provider>
  );
}
