import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Error from "./views/Error/Error";
import FicheLogement from "./views/FicheLogement/FicheLogement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/styles.css";

function Routing() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FicheLogement/:id" element={<FicheLogement />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default Routing;
