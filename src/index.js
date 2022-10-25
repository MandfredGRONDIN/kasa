import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Error from "./views/Error/Error";
import FicheLogement from "./views/FicheLogement/FicheLogement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/FicheLogement/:id" element={<FicheLogement />} />
         <Route path="/about" element={<About />} />
         <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
   </BrowserRouter>
);
