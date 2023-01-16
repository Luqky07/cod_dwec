const buttonSubmit = document.getElementById("submit");
const header = document.getElementById("header");
const form = document.getElementById("form");

window.addEventListener("load", fullLoad);

function fullLoad() {
  if (!localStorage.getItem("user")) {
    let msg = document.createElement("h1");
    let txt = document.createTextNode(
      "Es la primera vez que te entras en está pagina " +
      "porfavor, dime tu nombre."
    );
    msg.appendChild(txt);
    header.appendChild(msg);
    buttonSubmit.value = "Crear usuario";
    form.addEventListener("submit", (event) => {
      localStorage.setItem("user", event.target.user.value);
    });
    localStorage.visitas = 0;
  } else {
    localStorage.visitas = Number(localStorage.visitas) + 1;
    let msg = document.createElement("h1");
    let txt = document.createTextNode(
      "Bienvenido de nuevo " + localStorage.getItem("user") + "."
    );
    msg.appendChild(txt);
    header.appendChild(msg);
    let visitas = document.createElement("h3");
    let msgVisitas = document.createTextNode("Has visitado esta página " + localStorage.visitas + " veces.");
    visitas.appendChild(msgVisitas);
    header.appendChild(visitas);
    buttonSubmit.value = "Modificar usuario";
    form.addEventListener("submit", (event) => {
      localStorage.setItem("user", event.target.user.value);
    });
  }
  //localStorage.removeItem("user");
}
