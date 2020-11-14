/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo APP
 * 
 */
import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import CompoHeader from './components/header/CompoHeader';
import CompoBanner from './components/banner/CompoBanner';
import CompoAbout from './components/about/CompoAbout';
import CompoFooter from './components/footer/CompoFooter';

import './App.css';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter >

        <CompoHeader />
        <CompoBanner />
        <CompoAbout />
        <CompoFooter />

      </BrowserRouter>

    </div>
  );
}

export default App;
