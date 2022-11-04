import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import HomeImg from "../../assets/Home.png";
import Products from "../../products.json";
import Meta from "../../components/Meta/Meta";

export default function Home() {
   const [currImg] = useState(0);

   return (
      <div className="home">
         <Meta title={null} description={null} />
         <section className="home__section">
            <p>Chez vous, partout et ailleurs</p>
            <div className="home__img">
               <img src={HomeImg} alt="décor naturel"></img>
            </div>
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
                  <div className="product__title">
                     <span>{product.title}</span>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
}
