import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import Img from "../../assets/Home.png";
import Products from "../../products.json";

export default function Home() {
   const [currImg] = useState(0);

   return (
      <div className="home">
         <section>
            <p>Chez vous, partout et ailleurs</p>
            <img className="test" src={Img} alt="la nature"></img>
         </section>
         <div className="gallery">
            {Products.map((product) => (
               <Link
                  to={`/FicheLogement/${product.id}`}
                  className="product__item"
                  key={product.id}
               >
                  <img
                     src={product.pictures[currImg]}
                     alt="logement"
                     className="product__img"
                  />
                  <div className="product__title">{product.title}</div>
               </Link>
            ))}
         </div>
      </div>
   );
}
