// Mes constante button et response
const button = document.querySelector("#button");
// const button = document.getElementById('button');
const response = document.querySelector("p");
// const response = document.querySelector("h6");

// Gestionnaire d'évènement au click affiche moi cette alert
button.addEventListener("click", () => {
  alert("Vous avez Clicker sur ce bouton !");
});

// Gestionnaire d'évènement au click inject moi de l'html
button.addEventListener("click", () => {
  button.innerHTML = `
    <h3>Bonjour Mon Bouton.</h3> `;
});

// event response, affiche moi la réponse au click
button.addEventListener("click", () => {
  response.classList.add("montre-response");
  response.style.background = "green";
});

// event response, affiche moi la réponse au click
button.addEventListener("click", () => {
  response.classList.add(".montre-response-2");
  response.style.background = "red";
});
