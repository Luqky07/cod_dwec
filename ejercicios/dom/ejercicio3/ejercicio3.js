const container = document.getElementById("titulo");

window.addEventListener("load",start);

function start() {
    document.getElementById("cambiarColor").addEventListener("click",cambiarColor);
    document.getElementById("cambiarSize").addEventListener("click",cambiarSize);
}

function cambiarSize(){
    let size = Number(container.firstChild.getAttribute("size"));
    container.firstChild.setAttribute("size", size+1);
}

function cambiarColor(){
    let numColor = (Math.random()* 999999).toFixed(0);
    container.firstChild.setAttribute("color", "rgb(" + numColor + ")");
}