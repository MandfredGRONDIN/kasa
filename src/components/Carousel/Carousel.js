import React from "react";
import { useState } from "react";
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";

function Slider(product) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const slides = product.data;

   const slideStyles = {
      backgroundImage: `url(${slides[currentIndex]})`,
   };

   const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   const moreOneImg = () => {
      if (slides.length - 1 >= 1) {
         return true;
      }
      return false;
   };

   return moreOneImg() ? (
      <div className="slider__styles">
         <img
            className="arrow left__arrow"
            src={ArrowLeft}
            alt="flèche vers la gauche"
            onClick={goToPrevious}
         ></img>
         <img
            className="arrow right__arrow"
            src={ArrowRight}
            alt="flèche vers la droite"
            onClick={goToNext}
         ></img>
         <div style={slideStyles} className="slide__styles">
            <div className="number__styles">
               {currentIndex + 1}/{slides.length}
            </div>
         </div>
      </div>
   ) : (
      <div style={slideStyles} className="slide__styles"></div>
   );
}

export default Slider;
