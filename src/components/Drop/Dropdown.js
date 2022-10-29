import React, { useState } from "react";
import ArrowTop from "../../assets/ArrowTop.png";
import ArrowBot from "../../assets/ArrowBot.png";

export default function DropDown({ txt, title, txtArray }) {
   const [isOpen, setIsOpen] = useState(false);

   return isOpen ? (
      <div>
         <button
            className="dropdown__button"
            type="button"
            onClick={() => setIsOpen(false)}
         >
            <span>{title}</span>
            <img src={ArrowTop} alt="flèche vers le haut" />
         </button>
         {txtArray ? (
            <div className="dropdown__p__array">
               {txtArray.map((txte, e) => (
                  <p key={e}>{txte}</p>
               ))}
            </div>
         ) : (
            <p className="dropdown__p">{txt}</p>
         )}
      </div>
   ) : (
      <button
         className="dropdown__button"
         type="button"
         onClick={() => setIsOpen(true)}
      >
         <span>{title}</span>
         <img src={ArrowBot} alt="flèche vers le bas" />
      </button>
   );
}
