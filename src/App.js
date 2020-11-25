/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo APP
 * 
 */
import React from 'react'

import CompoHeader from './components/CompoHeader';
import CompoBanner from './components/CompoBanner';
import CompoAbout from './components/CompoAbout';
import CompoExperience from './components/CompoExperience';
import CompoSkills from './components/CompoSkills';
import CompoProjects from './components/CompoProjects';
import CompoFooter from './components/CompoFooter';

import './App.scss';
import './sass/button/Button.scss'


function App() {
  return (
    <div className="App">
      
        <CompoHeader />
        <CompoBanner />
        <CompoAbout />
        <CompoExperience />
        <CompoSkills />
        <CompoProjects />
        <CompoFooter />

    </div>
  );
}

export default App;
