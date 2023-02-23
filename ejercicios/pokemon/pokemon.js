let button = document.getElementById("initWar");
button.addEventListener("click", cargado);

function cargado() {
    let cont = 0;
    if (button.nextElementSibling.localName == "div") {
        document.getElementById("principal").removeChild(button.nextElementSibling);
        document.getElementById("principal").removeChild(button.nextElementSibling);
    }
    let ejercito1 = matrizRandom();
    let ataque1 = ataqueTotal(ejercito1);
    let ejercito2 = matrizRandom();
    let ataque2 = ataqueTotal(ejercito2);
    let resumenGuerra = []
    for (let row = 0; row < ejercito1.length; row++) {
        for (let col = 0; col < ejercito1[row].length; col++) {
            try {
                if (ejercito1[row][col] > ejercito2[row][col]) {
                    ejercito2[row][col] = 0;
                    resumenGuerra.push("Ejercito 1 = " + ejercito1[row][col]);
                }
                else if (ejercito1[row][col] < ejercito2[row][col]) {
                    ejercito1[row][col] = 0;
                    resumenGuerra.push("Ejercito 2 = " + ejercito2[row][col]);
                }
                else {
                    resumenGuerra.push("Empate");
                    ejercito1[row][col] = 0;
                    ejercito2[row][col] = 0;
                }
            } catch (e) {
                //console.log("Error = " + e);
                cont++;
            }
        }
    }
    console.log("Número de errores = " + cont);
    let vivos1 = contarVivos(ejercito1);
    let vivos2 = contarVivos(ejercito2);
    if (vivos1 > vivos2) button.after(generarMensaje("El ejercito 1 gana"));
    else if (vivos1 < vivos2) button.after(generarMensaje("El ejercito 2 gana"));
    else {
        if (ataque1 > ataque2) button.after(generarMensaje("El ejercito 1 gana"));
        else if (ataque1 < ataque2) button.after(generarMensaje("El ejercito 2 gana"));
        else alert("Firmaron un tratado de paz");
    }
    button.after(generarInfoGuerra([vivos1, ataque1], [vivos2, ataque2], resumenGuerra));
}

function numRandom(num) {
    return Math.round(Math.random() * (num - 1)) + 1;
}

function generarMensaje(mensaje) {
    let p = document.createElement("p")
    let txt = document.createTextNode(mensaje);
    p.appendChild(txt);
    return p;
}

function generarInfoGuerra(inforEjercito1, inforEjercito2, resumenGuerra) {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let textP1 = document.createTextNode("Datos ejercito 1 Vivos = " + inforEjercito1[0] + "\nAtaque inicial = " + inforEjercito1[1]);
    p1.appendChild(textP1);
    div.appendChild(p1);
    let p2 = document.createElement("p");
    let textP2 = document.createTextNode("Datos ejercito 2 Vivos = " + inforEjercito2[0] + "\nAtaque inicial = " + inforEjercito2[1]);
    p2.appendChild(textP2);
    div.appendChild(p2);
    let resumen = document.createElement("p");
    let string = "";
    for (batalla of resumenGuerra) {
        string += batalla + " | ";
    }
    let textResumen = document.createTextNode(string);
    resumen.appendChild(textResumen);
    div.appendChild(resumen);
    return div;
}

function matrizRandom() {
    let rowSize = numRandom(10);
    let colSize = numRandom(10);
    let res = [];
    for (let i = 0; i < rowSize; i++) {
        let row = []
        for (let j = 0; j < colSize; j++) {
            row.push(numRandom(10));
        }
        res.push(row);
    }
    return res;
}

function contarVivos(ejercito) {
    let cont = 0;
    for (let row = 0; row < ejercito.length; row++) {
        for (let col = 0; col < ejercito[row].length; col++) {
            if (ejercito[row][col] > 0) cont++;
        }
    }
    return cont;
}

function ataqueTotal(ejercito) {
    let damage = 0;
    for (let row = 0; row < ejercito.length; row++) {
        for (let col = 0; col < ejercito[row].length; col++) {
            damage += ejercito[row][col];
        }
    }
    return damage;
}