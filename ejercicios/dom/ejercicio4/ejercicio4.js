window.addEventListener("load", fullLoad);

function fullLoad() {
    //Primer apartado
    console.log("Elementos con id 'input2'");
    const input2 = document.getElementById("input2");
    console.log(input2);
    const labels = document.getElementsByTagName("label");
    for (let i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor == "input2") console.log(labels[i].children[0]);
    }

    //Segundo apartado
    console.log("Colección de parrafos");
    const parrafs = document.getElementsByTagName("p");
    console.log(parrafs);

    //Tercer apartado
    console.log("Colección de párrafos dentro del div 'lipsum'");
    const divLipsum = document.getElementById("lipsum");
    console.log(divLipsum.children);
    for (let i = 0; i < parrafs.length; i++) {
        if (parrafs[i].parentElement.id == "lipsum") console.log(parrafs[i]);
    }

    //Cuarto apartado
    console.log("Formulario");
    //toDo Duda

    //Quinto apartado
    console.log("Inputs");
    const inputs = document.getElementsByTagName("input");
    console.log(inputs);

    //Sexto apartado
    console.log("Inputs name = 'sexo'");
    const nameSexo = document.getElementsByName("sexo");
    console.log(nameSexo);
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name == "sexo") console.log(inputs[i]);
    }

    //Septimo apartado
    console.log("Items lista class = 'important'");
    const classImportant = document.getElementsByClassName("important");
    for (let i = 0; i < classImportant.length; i++) {
        if (classImportant[i].localName == "li") console.log(classImportant[i]);
    }
    console.log(" ");
    const elementsLi = document.getElementsByTagName("li");
    for (let i = 0; i < elementsLi.length; i++){
        if(elementsLi[i].className == "important") console.log(elementsLi[i]);
    }
}