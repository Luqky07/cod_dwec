//Este evento hace que el script se ejecute cuando se ha terminado de cargar la página
window.addEventListener("load", fullLoad);

function fullLoad() {
    //Cuando se detecta el evento submit del formulario se ejecuta la función para validarlo
    document.getElementById("form").addEventListener("submit", validate);
    //Cuando se detecta un click en el boton con id = 'google' se abre la página de google en una nueva pestaña
    document.getElementById("google").addEventListener("click", () => window.open("https://www.google.com/", "_blank"))
}

function validate(event) {
    //En la variable error vamos a almacenar todos los errores que encontremos en el formulario
    let error = [];
    let campoName = document.getElementById("name");
    //Si el input name está vació se almacenará el error de que el campo está vacio
    if (campoName.validity.valueMissing) {
        error.push("El campo nombre está vacio.");
    }
    //Si la longitud del mensaje es muy grande o muy pequeña o no hay mensaje también se alacenará el error
    let campoMessage = document.getElementById("message");
    if (campoMessage.validity.tooShort || event.target.message.value == "") {
        error.push("Mensaje demasiado corto.");
    } else if (campoMessage.validity.tooLong) {
        error.push("Mensaje demasiado largo.");
    }
    let daysChecked = 0;
    let days = event.target.day;
    /*
    Para verificar si se han seleccionado los días necesarios accedo al evento que se registra al hacer un submit
    en concreto a la propiedad target que es donde se almacenan los datos que se envián y al acceder al campo day
    este me devuelve un array con las checkbox, recorro este array y si encuentro un checkbox que tiene la propiedad
    checked con valor true que significa que está marcado aumento el valor de una varible contador, luego si el valor 
    de esa variable contador es menor a 2 almaceno el error
    */
    days.forEach(d => {
        if (d.checked) daysChecked++;
    });
    if (daysChecked < 2) error.push("No has seleccionado los días suficientes. Mínimo debes marcar 2 días");
    /*
    En el caso de que el array error tenga contenido primero cancelo el evento submit con la funcion preventDefault
    luego usando la funcion join que une el contenido de un array separandolo por la cadena que se le indique muestro
    todos los mensajes de error.

    En el caso de que todo esté correctamente se mostrará un alert de que el formulario se ha enviado y se ejecutara un
    mailto que abre el correo del equipo y creará un correo con la información del formulario
    */
    if (error.length > 0) {
        event.preventDefault();
        alert(error.join("\n"));
    } else {
        let correo = "sergio.luque@educa.madrid.org"
        alert("Formulario enviado");
        window.location.href = "mailto:" + correo + "?subject=Mi%20formulario&body=" + crearCorreo(event);
    };
}

/*
Creo un array que llamo datos donde iré almacenando los distintos datos que recibo del evento submit los cuales ire
tratando para adaptarlo al formato del mailto, para empezar se sustituyen los espacios por '%20', esto se hace usando la
funcion replace.
Para guardar los días de la checkbox la idea es similar a la validación recorro el array de checkbox buscando los que estan
marcados pero en este caso las checkbox con checked == 'true' serán almacenadas en un array de los dias marcados que luego 
usando join introduciré en el array de datos.
Por último la función devuelve el resultado de otra función join que une todo el array separandolo por saltos de línea
que se escriben con la cadena '%0A' 
*/
function crearCorreo(event) {
    let datos = [];
    datos.push("Nombre%20=%20" + (event.target.name.value).replace(" ", "%20"));
    datos.push("Mensaje%20=%20" + (event.target.message.value).replace(" ", "%20"));
    datos.push("Color =%20" + event.target.color.value);
    datos.push("Curso%20=%20" + event.target.course.value);
    let days = event.target.day;
    let daysChecked = [];
    days.forEach(d => {
        if (d.checked) daysChecked.push(d.value);
    });
    datos.push("Días%20con%20disponibilidad%20=%20" + daysChecked.join(",%20"));
    datos.push("Día%20preferente%20=%20" + event.target.prefer_day.value);
    return (datos.join("%0A"))
}