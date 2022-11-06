export default function Meta({ title, description }) {
   const el = document.querySelector("title");
   if (title) {
      el.innerText = `${title}`;
   } else {
      el.innerText = "Kasa : location d'appartements entre particuliers";
   }

   const desc = document.querySelector("meta[name='description']");
   if (description) {
      desc.setAttribute("content", description);
   } else {
      desc.setAttribute(
         "content",
         "Kasa est une entreprise dans la location d'appartements entre particuliers. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d'appartements entre particuliers en France"
      );
   }
}
