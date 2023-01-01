window.addEventListener("load", cargado);

function cargado() {
    document.getElementById("form").addEventListener("submit", validarData, false);
    document.getElementById("form").addEventListener("reset", reiniciar, false);
}

function validarData(e) {
    e.preventDefault();
    //console.log(e);
    if (validarNombre() && validarMensaje()) {
        console.log("Bien rellenado")
        return true;
    }
    return false;
}

function validarNombre() {
    let elemento = document.getElementById("nombre")
    elemento.className = "";
    console.log(elemento.validity.valueMissing)
    if (!elemento.validity.valueMissing) {
        elemento.className = "error";
        return false;
    }
    return true;
}

function validarMensaje() {
    let elemento = document.getElementById("mensaje");
    elemento.className = "";
    if (!elemento.validity.min && !elemento.validity.max) {
        elemento.className = "error";
        return false;
    }
    return true;
}

function reiniciar() {
    let elementos = document.getElementById("form").children;
    for (e of elementos) {
        let hijos = e.children;
        for(h of hijos){
            console.log(h.className)
            if(h.className == "error"){
                h.className = "";
            }
        }
    }
}