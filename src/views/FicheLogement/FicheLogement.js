import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Gallery/Gallery";
import Products from "../../products.json";
import "../../styles/FicheLogement.css";

export default function FicheLogement() {
   const params = useParams();
   console.log(params.id);

   return (
      <div className="house">
         <div className="tested">
            {Products.filter((product) => product.id === params.id).map(
               (product, index) => (
                  <div key={product.id} className="house__box">
                     <Slider data={product} />
                  </div>
               )
            )}
         </div>
         <p>FicheLogement test</p>
      </div>
   );
}
