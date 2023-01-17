const buttonSubmit = document.getElementById("submit");
const header = document.getElementById("header");
const form = document.getElementById("form");

window.addEventListener("load", fullLoad);

function fullLoad() {
  //Si no se ha iniciado sesion previamente 
  if (!localStorage.getItem("user")) {
    let msg = document.createElement("h1");
    let txt = document.createTextNode(
      "Es la primera vez que te entras en está pagina " +
      "porfavor, dime tu nombre"
    );
    msg.appendChild(txt);
    header.appendChild(msg);
    buttonSubmit.value = "Crear usuario";
    sessionStorage.setItem("visitas", 0);
    form.addEventListener("submit", (event) => {
      localStorage.setItem("user", event.target.user.value);
    });
  } else {
    if (localStorage.getItem(localStorage.getItem("user"))) {
      sessionStorage.setItem("visitas", localStorage.getItem(localStorage.getItem("user")))
    }
    let msg = document.createElement("h1");
    let txt = document.createTextNode(
      "Bienvenido de nuevo " + localStorage.getItem("user")
    );
    msg.appendChild(txt);
    header.appendChild(msg);

    let visitas = document.createElement("h3");
    visitas.id = "visitas";
    let msgVisitas = document.createTextNode("Tu contador es " + sessionStorage.getItem("visitas"));
    visitas.appendChild(msgVisitas);
    header.appendChild(visitas);

    buttonSubmit.value = "Modificar usuario";
    form.addEventListener("submit", (event) => {
      localStorage.setItem("user", event.target.user.value);
    });

    let increment = document.createElement("button");
    increment.id = "increment";
    let incrementTxt = document.createTextNode("Incrementar contador");
    increment.appendChild(incrementTxt);
    form.appendChild(increment);
    document.getElementById("increment").addEventListener("click", (e) => {
      sessionStorage.setItem("visitas", Number(sessionStorage.getItem("visitas")) + 1);
      let newVisitas = document.getElementById("visitas");
      let newTxt = document.createTextNode("Tu contador es " + sessionStorage.getItem("visitas"));
      newVisitas.replaceChild(newTxt, newVisitas.firstChild);
      e.preventDefault();
    });

    let decrement = document.createElement("button");
    decrement.id = "decrement";
    let decrementTxt = document.createTextNode("Decrementar contador");
    decrement.appendChild(decrementTxt);
    form.appendChild(decrement);
    document.getElementById("decrement").addEventListener("click", (e) => {
      if (sessionStorage.getItem("visitas") > 0) sessionStorage.setItem("visitas", Number(sessionStorage.getItem("visitas")) - 1);
      let newVisitas = document.getElementById("visitas");
      let newTxt = document.createTextNode("Tu contador es " + sessionStorage.getItem("visitas"));
      newVisitas.replaceChild(newTxt, newVisitas.firstChild);
      e.preventDefault();
    });

    let logOut = document.createElement("button");
    let logOutTxt = document.createTextNode("Logout");
    logOut.id = "logout";
    logOut.appendChild(logOutTxt);
    form.appendChild(logOut);
    document.getElementById("logout").addEventListener("click", () => {
      localStorage.setItem(localStorage.getItem("user"), sessionStorage.getItem("visitas"));
      localStorage.removeItem("user");
    });
  }
}
