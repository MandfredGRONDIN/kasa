import React from "react";
import { useState } from "react";
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";

function Slider(product) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const slides = product.data;

   const sliderStyles = {
      height: "100%",
      position: "relative",
   };

   const slideStyles = {
      width: "100%",
      height: "100%",
      borderRadius: "25px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(${slides[currentIndex]})`,
   };

   const leftArrowStyles = {
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
      left: "20px",
      cursor: "pointer",
   };

   const rightArrowStyles = {
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
      right: "20px",
      cursor: "pointer",
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

   const test = () => {
      if (slides.length - 1 >= 1) {
         return true;
      }
      return false;
   };

   return test() ? (
      <div style={sliderStyles}>
         <img
            className="arrow"
            style={leftArrowStyles}
            src={ArrowLeft}
            alt="flèche vers la gauche"
            onClick={goToPrevious}
         ></img>
         <img
            className="arrow"
            style={rightArrowStyles}
            src={ArrowRight}
            alt="flèche vers la droite"
            onClick={goToNext}
         ></img>
         <div style={slideStyles}>
            <div className="number__styles">
               {currentIndex + 1}/{slides.length}
            </div>
         </div>
      </div>
   ) : (
      <div style={slideStyles}></div>
   );
}

export default Slider;
