import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import APropos from './components/APropos/APropos';
import Error from './components/Error/Error';
import FicheLogement from './components/FicheLogement/FicheLogement';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/FicheLogement/:id" element={<FicheLogement />}/>
      <Route path="/APropos" element={<APropos />}/>
      <Route path="/*" element={<Error />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);