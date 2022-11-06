import React from "react";
import "../../styles/styles.css";
import Error404 from "../../assets/404.png";
import { Link } from "react-router-dom";

export default function Error() {
   return (
      <div className="error">
         <div>
            <img src={Error404} alt="erreur 404" />
         </div>
         <p className="error__p">
            Oups! La page que vous demandez n'existe pas.
         </p>
         <Link to={`/`} className="error__home">
            Retour sur la page d'acceuil
         </Link>
      </div>
   );
}
