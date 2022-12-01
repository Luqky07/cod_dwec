const contenedor = document.getElementById("main");

window.addEventListener("load", start);

function start() {
    iniciarParrafos(5);
    document.getElementById("concat").addEventListener("click", concatPuntos);
}

function iniciarParrafos(num) {
    for (let i = 1; i <= num; i++) {
        let titulo = document.createElement("h2");
        let textoTitulo = document.createTextNode("Conjunto de titulos " + i);
        titulo.appendChild(textoTitulo);
        contenedor.appendChild(titulo);
        for (let j = 1; j <= 3; j++) {
            let nodo = document.createElement("p");
            let textNode = document.createTextNode("Este es el párrafo " + i);
            nodo.appendChild(textNode);
            contenedor.appendChild(nodo);
        }
    }
}

function concatPuntos() {
    let hijos = contenedor.children;
    for (h of hijos) {
        let punto = document.createTextNode(".");
        console.log(h.localName)
        if (h.localName == "p") h.appendChild(punto);
    }
}