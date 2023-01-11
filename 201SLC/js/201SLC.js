window.addEventListener("load", fullLoad);

function fullLoad() {
    document.getElementById("form").addEventListener("submit", validate);
    document.getElementById("google").addEventListener("click", () => window.open("https://www.google.com/", "_blank"))
}

function validate (event) {
    event.preventDefault();
    let error = "";
    let campoMessage = document.getElementById("message");
    if (campoMessage.validity.tooShort) {
        error += "Mensaje demasiado corto.\n";
    } else if (campoMessage.validity.tooLong){
        error += "Mensaje demasiado largo.\n";
    }
    let daysChecked = 0;
    let days = event.target.day;
    for(let i = 0; i < days.length; i++){
        if(days[i].checked == true) daysChecked++;
    }
    if(daysChecked < 2) error += "No has seleccionado los días suficientes.\n"; 
    if (error != ""){
        alert(error);
        return false;
    } else return true;
}