import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import './App.css';

import Header from './Components/Navbar/Header';
import { Footer } from './Components/Footer/Footer';
import AboutPage from './Screens/AboutPage/AboutPage';
import HomePage from './Screens/HomePage/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Header title="Todo List" searchBar={false} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App;




