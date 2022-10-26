import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider(product) {
   return (
      <div className="Carousel">
         <Carousel showThumbs={false} showIndicators={false}>
            {product.data.pictures.map((picture, key) => (
               <div className="house__div" key={key}>
                  <img className="house__img" src={picture} alt=""></img>
               </div>
            ))}
         </Carousel>
      </div>
   );

   /* return (
		<div className="gallery">
			{Products.map((product) => (
				<div className="gallery__img" key={product.id}>
					<Carousel showThumbs={false} showIndicators={false}>
						{product.pictures.map((picture, k) => (
							<div key={k}>
								<img src={picture} alt="" />
								<h2>{product.title}</h2>
							</div>
						))}
					</Carousel>
				</div>
			))}
		</div>
	); */
}

export default Slider;
