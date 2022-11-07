import React from "react";
import { useState, useEffect } from "react";
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";

function Slider(product) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [test, setTest] = useState(true);
   const slides = product.data;

   useEffect(() => {
      slides.forEach((image) => {
         new Image().src = image;
      });
   }, [slides]);

   const goToPrevious = () => {
      setTest(false);
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const goToNext = () => {
      setTest(true);
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
         {slides.map((slide, index) => {
            return (
               <div
                  className={
                     index === currentIndex
                        ? `${
                             test
                                ? "slide__stylest active"
                                : "slide__styles actived"
                          }`
                        : `${test ? "slide__stylest" : "slide__styles"}`
                  }
                  key={index}
               >
                  {index === currentIndex && (
                     <img src={slide} alt="" className="slide__styles"></img>
                  )}
               </div>
            );
         })}
         {/* <img src={`${slides}`} className="slide__styles" alt="logement"></img> */}
         <span className="number__styles">
            {currentIndex + 1}/{slides.length}
         </span>
      </div>
   ) : (
      <img
         src={`${slides[currentIndex]}`}
         className="slide__styles"
         alt="logement"
      ></img>
   );
}

export default Slider;
