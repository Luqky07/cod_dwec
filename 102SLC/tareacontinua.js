let contactos = [{ nombre: 'Maxwell Wright', telefono: '(0191) 719 6495', correo: 'Curabitur.egestas.nunc@nonummyac.co.uk' },
{ nombre: 'Raja Villareal', telefono: '0866 398 3895', correo: 'posuere.vulputate@sed.com' },
{ nombre: 'Helen Richards', telefono: '0800  1111', correo: 'libero@convallis.edu' }];
contactos.push({ nombre: 'Maisie Haley', telefono: '0913 531 3030', correo: 'risus.Quisque@urna.ca' });
let continuar = true;
while (continuar == true) {
    let opcion = pedirNum("Que quieres hacer \n1-Ver un contacto\n2-Ver el último contacto\n" +
        "3-Ver todos los contactos\n4-Añadir nuevo contacto\n5-Ordenar contactos\n6-Cerrar programa");
    switch (opcion) {
        case 1:
            let indice = pedirNum("De que contacto quieres saber la información");
            showContact(contactos, indice);
            break;
        case 2:
            console.log(contactos[contactos.length - 1].nombre + ' / ' + contactos[contactos.length - 1].telefono + ' / '
                + contactos[contactos.length - 1].correo);
            break;
        case 3:
            showAllContacts(contactos);
            break;
        case 4:
            let miNombre = prompt("Dime tu nombre");
            let miTelef = prompt("Dime tu telefono");
            let miCorreo = prompt("Dime tu correo");
            addNewContact(contactos, miNombre, miTelef, miCorreo)
            break;
        case 5:
            let opcion = pedirNum("Como queres ordenar los contactos\n1-Nombre\n2-Telefono\n3-Correo");
            sortContacts(contactos, opcion);
            break;
        case 6:
            continuar = false;
            break;
        default:
            alert("Dime una opción válida (\"1\",\"2\",\"3\",\"4\",\"5\")");
    }
}
function pedirNum(pregunta) {
    let num;
    do {
        num = Number(prompt(pregunta));
        if (isNaN(num)) {
            alert("Introduce un número")
        }
    } while (isNaN(num));
    return num;
}
function showContact(contactos, indice) {
    if (contactos instanceof Array) {
        let listaContactos;
        for (i in contactos) {
            listaContactos((i + 1) + "-" + contactos[i].nombre + "\n");
        }
        console.log(contactos[indice].nombre + " / " + contactos[indice].telefono + " / " + contactos[indice].correo);
    } else {
        alert("Ha ocurrido un error con los contactos");
    }
}
function showAllContacts(contactos) {
    if (contactos instanceof Array) {
        for (c of contactos) {
            console.log(c.nombre + " / " + c.telefono + " / " + c.correo);
        }
        console.log("\n\n\n");
    } else {
        alert("Ha ocurrido un error con los contactos");
    }
}
function addNewContact(contactos, miNombre, miTelef, miCorreo) {
    if (contactos instanceof Array) {
        if (miNombre != "" && miTelef != "" && miCorreo != "") {
            contactos.push({ nombre: miNombre, telefono: miTelef, correo: miCorreo });
        } else {
            alert("No has introducido todos los datos del contacto");
        }
    } else {
        alert("Ha ocurrido un error con los contactos");
    }
}
function sortContacts(contactos, opcion) {
    if (contactos instanceof Array) {
        switch (opcion) {
            case 1:
                contactos.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return 1;
                    }
                    else if (a.nombre < b.nombre) {
                        return -1;
                    }
                    else return 0;
                });
                break;
            case 2:
                contactos.sort(function (a, b) {
                    if (a.telefono > b.telefono) {
                        return 1;
                    }
                    else if (a.telefono < b.telefono) {
                        return -1;
                    }
                    else return 0;
                });
                break;
            case 3:
                contactos.sort(function (a, b) {
                    if (a.correo > b.correo) {
                        return 1;
                    }
                    else if (a.correo < b.correo) {
                        return -1;
                    }
                    else return 0;
                });
                break;
            default:
                alert("No has introducido un valor correcto");
        }
    } else {
        alert("Ha ocurrido un error con los contactos")
    }
}