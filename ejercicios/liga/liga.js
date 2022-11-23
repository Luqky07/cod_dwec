//Declaración de elementos del DOM
const form = document.getElementById("form");
const table = document.getElementById("table")

//Array con los equipos

let equipos = ["Recreativo", "Atlético", "Sporting", "Real", "Unión",
    "Marino", "Juventud", "Rayo", "Diocesano", "Deportivo", "Internacional", "Adarve"]


//Generar las matrices con equipos locales y visitantes
let tablaLocales = rellenarLocales();
let tablaVisitantes = rellenarVisitantes();

//Crear ida
let liga = crearIda();

//Concatenar vuelta
liga = liga.concat(crearVuelta());

//Crear quiniela
let quiniela = rellenarQuiniela();

//Visualización debug
/* console.log(tablaLocales);
console.log(tablaVisitantes); */
console.log(liga);
console.log(quiniela);


//Funciones


function rellenarLocales() {
    let pos = 0;
    let jornada = [];
    for (let i = 0; i < equipos.length - 1; i++) {
        let partidos = []
        for (let j = 0; j < equipos.length / 2; j++) {
            partidos.push(equipos[pos]);
            if (pos == equipos.length - 2) pos = 0;
            else pos++;
        }
        jornada.push(partidos);
    }
    return jornada;
}

function rellenarVisitantes() {
    let pos = equipos.length - 2;
    let jornada = [];
    for (let i = 0; i < equipos.length - 1; i++) {
        let partidos = [equipos[equipos.length - 1]];
        for (let j = 0; j < equipos.length / 2 - 1; j++) {
            partidos.push(equipos[pos]);
            if (pos == 0) pos = equipos.length - 2;
            else pos--;
        }
        jornada.push(partidos);
    }
    return jornada;
}

function crearIda() {
    let jornada = [];
    for (let i = 0; i < equipos.length - 1; i++) {
        let partidos = [];
        for (let j = 0; j < equipos.length / 2; j++) {
            if ((Math.random() * 1).toFixed(0) == 1) partidos.push([tablaLocales[i][j], tablaVisitantes[i][j]]);
            else partidos.push([tablaVisitantes[i][j], tablaLocales[i][j]]);
        }
        jornada.push(partidos);
    }
    return jornada;
}

function crearVuelta() {
    let jornada = []
    for (let i = 0; i < liga.length; i++) {
        let partidos = [];
        for (let j = 0; j < liga[i].length; j++) {
            partidos.push([liga[i][j][1], liga[i][j][0]]);
        }
        jornada.push(partidos);
    }
    return jornada;
}

function rellenarQuiniela() {
    let jornada = [];
    for (let i = 0; i < liga.length; i++) {
        let partidos = [];
        let cont1 = 0;
        let contX = 0;
        let cont2 = 0;
        for (let j = 0; j < liga[i].length; j++) {
            let valor;
            let valido = false;
            let casilla;
            do {
                valor = (Math.random() * 2).toFixed(0);
                if (valor == 0 && cont1 < 3) {
                    casilla = "1";
                    valido = true;
                    cont1++;
                } else if (valor == 1 && contX < 2) {
                    casilla = "X";
                    valido = true;
                    contX++;
                } else if (valor == 2 && cont2 < 1) {
                    casilla = "2";
                    valido = true;
                    cont2++;
                }
            } while (valido == false);
            partidos.push(casilla);
        }
        jornada.push(partidos);
    }
    return jornada;
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let valorJornada = evento.target.numJornada.value - 1;
    table.innerHTML = "";
    for (let i = 0; i < liga[valorJornada].length; i++) {
        table.innerHTML += "<tr><td>" + liga[valorJornada][i][0] + "</td><td>" + liga[valorJornada][i][1] + "</td>";
        if (quiniela[valorJornada][i] == "1") {
            table.innerHTML += "<td>X</td><td>&nbsp</td><td>&nbsp</td></tr>";
        } else if (quiniela[valorJornada][i] == "X") {
            table.innerHTML += "<td>&nbsp</td><td>X</td><td>&nbsp</td>";
        } else if (quiniela[valorJornada][i] == "2"){
            table.innerHTML += "<td>&nbsp</td><td>&nbsp</td><td>X</td>";
        }
    }
})