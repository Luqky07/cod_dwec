//Constantes DOM

const texto = document.getElementById("texto");
const buscador = document.getElementById("buscador");
const boton = document.getElementById("boton");

let loren = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare faucibus enim, id faucibus neque egestas at. Mauris egestas odio nulla, eu convallis leo convallis sed. Cras suscipit sed felis ac pulvinar. Praesent facilisis leo eu tortor egestas, et pulvinar urna lacinia. In vitae metus vel sapien convallis pretium ut eu urna. Donec at lectus vitae quam ullamcorper malesuada dignissim eu massa. Curabitur dolor urna, auctor sit amet risus a, bibendum aliquam magna. Sed pellentesque, nulla ut rutrum congue, enim tortor scelerisque justo, in scelerisque libero urna ac massa. Curabitur eget placerat felis. Vivamus lorem magna, posuere non euismod et, molestie eget risus. Integer lacinia nulla non vehicula sagittis. Praesent nibh massa, semper quis hendrerit vitae, suscipit at lacus. "
texto.innerHTML = loren;

let textoArr = loren.split(" ");

function remarcar() {
    let palabra = buscador.value;
    let res = "";
    for (p of textoArr) {
        if (p == palabra) {
            p = "<span style = \"color : #ffea1a;\">" + p + "</span>"
        }
        res += p + " ";
    }
    texto.innerHTML = res;
}

boton.addEventListener("click", remarcar);