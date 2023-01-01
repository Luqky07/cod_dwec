const form = document.getElementById("form");

function carga (){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e);
        validarNombre();
        validarEdad();
        validarSexo();
    });
    //generarCheckbox(4);
}

function validarNombre() {
    let elemento = document.getElementById("nombre");
    console.log(elemento.value);
    limpiarError(elemento);
    if(elemento.value == " "){
        return error(elemento);
    }
}

function validarEdad() {
    let elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if(!elemento.checkValidity()){
        return error(elemento);
    }
}

function validarSexo() {
    let elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if(!elemento.checkValidity()){
        return error(elemento);
    }
}

function limpiarError(elemento) {
    elemento.className = "";
}

function error(elemento) {
    elemento.className = "error";
    return false;
}

function generarCheckbox(num) {
    for (let i = 0; i < num; i++){
        let label = document.createElement("label")
        let txt = document.createTextNode(i);
        label.appendChild(txt);
        let box = document.createElement("input");
        box.type = "checkbox";
        box.value = i+1;
        let br = document.createElement("br");
        form.appendChild(label);
        form.appendChild(box);
        form.appendChild(br);
    }
    let bottom = document.createElement("input")
    bottom.type = "submit";
    bottom.value = "ENVIAR";
    form.appendChild(bottom);
}

window.addEventListener("load", carga);