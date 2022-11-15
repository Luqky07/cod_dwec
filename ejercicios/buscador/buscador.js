//Constantes DOM

const texto = document.getElementById("texto");
const buscador = document.getElementById("buscador");
const boton = document.getElementById("boton");
const mayus = document.getElementById("mayus");
const exact = document.getElementById("exact");

let loren = texto.innerHTML;

let textoArr = loren.split(" ");

function remarcar() {
    if(buscador.value != ""){
        let palabra = String(quitarTilde(buscador.value));
        let res = "";
        for (p of textoArr) {
            let pModificada = String(quitarTilde(p));
            if (!mayus.checked) {
                palabra = palabra.toLowerCase();
                pModificada = pModificada.toLowerCase();
            }
            if (exact.checked) {
                if (pModificada == palabra) {
                    p = "<span style = \"background-color : #ffea1a;\">" + p + "</span>"
                }
            } else {
                let regex = new RegExp(palabra);
                if(regex.test(pModificada)){
                    p = pModificada.replace(palabra, "<span style = \"background-color : #ffea1a;\">" + palabra + "</span>");
                }
            }
            res += p + " ";
        }
        texto.innerHTML = res;
    }
}

function quitarTilde(nombre) {
    let tildes = [["Á", "A"], ["É", "E"], ["Í", "I"], ["Ó", "O"], ["Ú", "U"],
    ["á", "a"], ["é", "e"], ["í", "i"], ["ó", "o"], ["ú", "u"], [".", ""], [",", ""], [";", ""]];
    let res = nombre;
    for (t of tildes) {
        res = res.replace(t[0], t[1]);
    }
    return res;
}

boton.addEventListener("click", remarcar);