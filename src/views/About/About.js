import React from "react";
import Img from "../../assets/About.png";
import Img2 from "../../assets/AboutM.png";
import DropDown from "../../components/Drop/Dropdown";
import "../../styles/About.css";

export default function About() {
   const items = [
      {
         id: 1,
         value: "Fiabilité",
         text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les infomations sont régulièrement vérifiées par nos équipes.",
      },
      {
         id: 2,
         value: "Respect",
         text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      },
      {
         id: 3,
         value: "Service",
         text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      },
      {
         id: 4,
         value: "Sécurité",
         text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
   ];
   return (
      <div className="about">
         <section>
            <img className="about__img" src={Img} alt="montagne" />
            <img className="about__img2" src={Img2} alt="montagne" />
         </section>
         <div className="dropdown">
            {items.map((item) => (
               <div className="dropdown__box" key={item.id}>
                  <DropDown items={item} />
               </div>
            ))}
         </div>
      </div>
   );
}
