import React from "react";
import Img from "../../assets/LOGO.png";

export default function Footer() {
   return (
      <div className="footer">
         <div className="footer__logo">
            <img src={Img} alt="logo de Kasa"></img>
         </div>
         <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
   );
}
