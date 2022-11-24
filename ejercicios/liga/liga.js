//Declaración de elementos del DOM
const form = document.getElementById("form");
const table = document.getElementById("table");
const error = document.getElementById("error");

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
console.log(tablaLocales);
console.log(tablaVisitantes);
/*
console.log(liga);
console.log(quiniela); */


//Funciones
function rellenarLocales() {
    let jornada = [];
    for (let i = 0, pos = 0; i < equipos.length - 1; i++) {
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
    let jornada = [];
    for (let i = 0, pos = equipos.length - 2; i < equipos.length - 1; i++) {
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
        for (let j = 0, cont1 = 0, contX = 0, cont2 = 0; j < liga[i].length; j++) {
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

//Eventos
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let valorJornada = evento.target.numJornada.value - 1;
    if (valorJornada >= 0 && valorJornada <= 21) {
        error.innerHTML = "";
        let txt = "";
        for (let i = 0; i < liga[valorJornada].length; i++) {
            txt += "<tr>\n<td>" + liga[valorJornada][i][0] + "</td>\n<td>" + liga[valorJornada][i][1] + "</td>\n";
            if (quiniela[valorJornada][i] == "1") {
                txt += "<th>X</th>\n<th>&nbsp</th>\n<th>&nbsp</th>\n</tr>\n";
            } else if (quiniela[valorJornada][i] == "X") {
                txt += "<th>&nbsp</th>\n<th>X</th>\n<th>&nbsp</th>\n</tr>\n";
            } else if (quiniela[valorJornada][i] == "2") {
                txt += "<th>&nbsp</th>\n<th>&nbsp</th>\n<th>X</th>\n</tr>\n";
            }
        }
        table.innerHTML = txt;
    } else {
        error.innerHTML = "No existe esa jornada";
    }
})