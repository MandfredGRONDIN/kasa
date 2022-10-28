import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "../../components/Gallery/Gallery";
import Products from "../../products.json";
import "../../styles/FicheLogement.css";

export default function FicheLogement() {
   const params = useParams();

   const navigate = useNavigate();
   useEffect(() => {
      let product = Products.find((product) => params.id === product.id);
      if (!product) {
         navigate("/error");
      }
   });

   const containerStyles = {
      width: "100%",
      height: "400px",
      margin: "0 auto",
   };

   return (
      <div className="house">
         <div className="house__carousel">
            {Products.filter((product) => product.id === params.id).map(
               (product, index) => (
                  <div key={product.id} className="house__boxes">
                     {console.log(product.pictures)}
                     <div style={containerStyles}>
                        <Slider data={product.pictures} />
                     </div>

                     <div className="house__box">
                        <div className="house__left">
                           <h2>{product.title}</h2>
                           <p>{product.location}</p>
                           <div className="tags">
                              {product.tags.map((tag, key) => (
                                 <div className="tag" key={key}>
                                    {tag}
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className="house__right">
                           <div className="house__name">
                              <p>{product.host.name}</p>
                              <img
                                 className="house__host"
                                 src={product.host.picture}
                                 alt="Propriétaire du logement"
                              />
                           </div>
                           <div> Rating </div>
                        </div>
                     </div>
                  </div>
               )
            )}
         </div>
      </div>
   );
}
