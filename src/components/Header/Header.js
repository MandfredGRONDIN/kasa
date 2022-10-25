import React from "react";
import "../../styles/styles.css";
import Img from "../../assets/LOGO_Header.png";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div className="header">
         <nav>
            <img className="header__logo" src={Img} alt="test"></img>
            <ul>
               <li>
                  <Link to="/" className="items">
                     Acceuil
                  </Link>
               </li>
               <li>
                  <Link to="/about" className="items">
                     A Propos
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   );
}
