window.addEventListener("load", fullLoad);

function fullLoad() {
    let cont = 0;
    const btnCont = document.getElementById("btnCont");
    btnCont.addEventListener("click", () => {
        cont++;
        generatePromise(cont);
    });
}

function writeMssg(cont, mssg) {
    let p = document.createElement("p");
    let txt = document.createTextNode(cont + ") " + mssg);
    p.appendChild(txt);
    document.getElementById("mssg").appendChild(p);
}

function generatePromise(cont) {
    writeMssg(cont, "Empieza el código síncrono");
    let promesa = new Promise((resolve, reject) => {
        writeMssg(cont, "Dentro de la promesa antes del timeOut. Empieza el código asíncrono");
        let timeRandom = Math.floor(Math.random()*4000) + 1000;
        setTimeout(() => (true ? resolve("Dentro de then. Código asíncrono terminado") : reject("No puedo fallar")), timeRandom);
    });
    promesa.then((e) => {
        writeMssg(cont, e);
    });
    writeMssg(cont, "Código después del then. Síncrono terminado");
}