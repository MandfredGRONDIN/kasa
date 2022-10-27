import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Gallery/Gallery";
import Products from "../../products.json";
import "../../styles/FicheLogement.css";

export default function FicheLogement() {
   const params = useParams();

   /* Products.map((product) => {
      if (product.id !== params.id) {
         return console.log("la");
      } else {
         return console.log("ici");
      } 
   });*/
   return (
      <div className="house">
         <div className="house__carousel">
            {Products.filter((product) => product.id === params.id).map(
               (product, index) => (
                  <div key={product.id} className="house__boxes">
                     <Slider data={product} />
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
