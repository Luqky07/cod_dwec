//Constantes del DOM

const lista = document.getElementById("lista");
const media = document.getElementById("media");
const modificar = document.getElementById("modificar");
const borrar = document.getElementById("borrar");
const nuevoAl = document.getElementById("nuevoAlumno");
const ordenar = document.getElementById("sort");

//Ejecución

let nombres = ["Sergio", "Hristo", "Damian", "Stephano", "Carlos", "Juanjo", "Jose María", "Daniel", "Ruben",
    "Pablo", "Álvaro", "Diego", "Luis", "Mario", "Rafa"];
let listaAlumnos = [];

iniciarNotas();
mostrarNotas();

//Funciones

function calcularMedia() {
    let notaTotal = 0;
    for (a of listaAlumnos) {
        notaTotal += a.nota;
    }
    return notaTotal / listaAlumnos.length;
}

function iniciarNotas() {
    newAlumno();
    for (n of nombres) {
        listaAlumnos.push({ nombre: n, nota: pedirNota(n) });
    }
}

function pedirNota(nombreAlumno) {
    let nota;
    do {
        nota = Number(prompt("¿Cuál es la nota de " + nombreAlumno + "?"));
        if (isNaN(nota)) alert("Introduce un número valido");
        if (nota < 0) alert("La nota debe ser igual o mayor a 0");
        if (nota > 10) alert("La nota debe ser igual o menor a 10");
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

function corregirNota() {
    if (confirm("Seguro que quieres modificar las notas") == true) {
        let opt = elegirAlumno("De que alumno quieres saber la nota:");
        listaAlumnos[opt].nota = pedirNota(listaAlumnos[opt].nombre);
        mostrarNotas();
    }
}

function elegirAlumno(pregunta) {
    let opt;
    do {
        opt = Number(prompt(pregunta + "\n" + alumnosToString())) - 1;
    } while (isNaN(opt) || opt < 0 || opt >= listaAlumnos.length)
    return opt;
}

function mostrarNotas() {
    let res = "";
    for (a of listaAlumnos) {
        res += "<li>" + a.nombre + " = " + a.nota + "</li>";
    }
    lista.innerHTML = res;
    media.innerHTML = "La nota media de la clase es: " + calcularMedia();
}

function newAlumno() {
    if (confirm("¿Quiéres añadir un nuevo usario?") == true) {
        let name = prompt("Nombre del alumno");
        if (name != "") nombres.push(name);
        else (alert("No se ha añadidio el nuevo usuario"));
    }
}

function alumnosToString() {
    let txtAlumnos = "";
    for (i in listaAlumnos) {
        txtAlumnos += (Number(i) + 1) + "- " + listaAlumnos[i].nombre + " = " + listaAlumnos[i].nota + "\n";
    }
    return txtAlumnos;
}

function borrarAlumno() {
    if (confirm("Seguro que quieres borrar un alumno") == true) {
        let opt = elegirAlumno("De qué alumno quieres eliminar la información");
        alert("El alumno " + listaAlumnos[opt].nombre + " ha sido eliminado");
        listaAlumnos.splice(opt, 1);
        mostrarNotas();
    }
}

function crearAlumno() {
    if (confirm("Seguro que quieres añadir un nuevo alumno") == true) {
        let name = prompt("Nombre del alumno");
        if (name != "") listaAlumnos.push({nombre: name, nota: pedirNota(name)});
        else("No se ha añadido un nuevo usuario");
        mostrarNotas();
    }
}

function ordenarLista(){
    listaAlumnos.sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        }
        else if (a.nombre < b.nombre) {
            return -1;
        }
        else return 0;
    })
    mostrarNotas();
}

//Eventos
modificar.addEventListener("click", corregirNota);
borrar.addEventListener("click", borrarAlumno);
nuevoAl.addEventListener("click", crearAlumno);
ordenar.addEventListener("click", ordenarLista);