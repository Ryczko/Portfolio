import React from 'react';
import './stylesheets/main.scss';
import './fontello/css/fontello.css'
import Home from './layouts/Home';
import Header from './layouts/Header'
import About from './layouts/About'
import Knowladge from './layouts/Knowladge';
import Projects from './layouts/Projects';
import Contact from './layouts/Contact';
import Fotter from './layouts/Fotter';
import { useState, useEffect } from 'react';
import { en } from './content/en';
import { pl } from './content/pl';


function App() {

  const [content, setContent] = useState(en)
  const [languageChecked, setLanguageChecked] = useState(false);



  const handleCheck = (e) => {
    if (e.target.checked) setContent(pl);
    else setContent(en);
    setLanguageChecked(!languageChecked);
  }



  useEffect(() => {
    if (window.navigator.language === "pl-PL") {
      setContent(pl);
      setLanguageChecked(true)
    }
    document.addEventListener('scroll', () => {
      const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const scrollPos = document.documentElement.scrollTop;
      const topNav = document.querySelector('.top')
      if (scrollPos >= vh) {
        topNav.classList.add('fix')
      }
      else {
        topNav.classList.remove('fix')
      }
    });

  }, [])

  return (

    < div className="wrapper" >
      <Home content={content.home} check={handleCheck} isChecked={languageChecked} />
      <Header content={content.header} />
      <About content={content.about} />
      <Knowladge content={content.knowladge} />
      <Projects content={content.projects} />
      <Contact content={content.contact} />
      <Fotter />
    </div >
  );
}

export default App;
