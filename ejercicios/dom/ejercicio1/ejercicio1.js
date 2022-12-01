const contenedor = document.getElementById("main");
window.addEventListener("load", start);

function start() {
    inciarParrafos(3);
    document.getElementById("contar").addEventListener("click", contarElementos);
}

function inciarParrafos(num) {
    for (let i = 1; i <= num; i++) {
        let nodo = document.createElement("p");
        let textNode = document.createTextNode("Este es el párrafo " + i);
        nodo.appendChild(textNode);
        contenedor.appendChild(nodo);
    }
}

function contarElementos() {
    let hijos = contenedor.children;
    console.log(hijos);
    let tipos = "";
    for (let i = 0; i < hijos.length; i++) {
        if (i == 0) tipos += hijos[i].localName;
        else tipos += ", " + hijos[i].localName;
    }
    let nodo = document.createElement("p");
    let textNode = document.createTextNode("Número de hijos = " + hijos.length);
    nodo.appendChild(textNode);
    contenedor.appendChild(nodo);
    nodo = document.createElement("p");
    textNode = document.createTextNode("\nTipos = " + tipos);
    nodo.appendChild(textNode);
    contenedor.appendChild(nodo);

}