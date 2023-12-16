let textoProcesado = document.getElementById("texto-procesado");
let textoProcesadoP = document.getElementById("texto-procesado-p");
let textoProcesadoOff = document.getElementById("texto-procesado-off");
let btnEncriptar = document.getElementById("btn-encriptar");
let btnDesencriptar = document.getElementById("btn-desencriptar");
let texto = document.getElementById("texto");
let btnCopiar = document.getElementById("btn-copiar");

const keys = [
    [["e"],["enter"]],
    [["i"],["imes"]],
    [["a"],["ai"]],
    [["o"],["ober"]],
    [["u"],["ufat"]]
];
const keysLength = keys.length;

//Hacer visible u ocultar un elemento.
function displayOff(elemento){
    elemento.style.display = "none";
}

function displayOn(elemento){
    elemento.style.display = "inline-block";
}

//Encriptar
function encriptar(frase){
    for(let i = 0; i < keysLength; i++){
        if(frase.includes(keys[i][0])){
            frase = frase.replaceAll(keys[i][0], keys[i][1]);
        }
    }
    return frase;
}

function encriptarManejo(){
    let frase = encriptar(texto.value);
    controladorContainers(frase);
}

//Desencriptar
function desencriptar(frase){
    for(let i = 0; i <keysLength; i++){
        if(frase.includes(keys[i][1])){
            frase = frase.replaceAll(keys[i][1], keys[i][0]);
        }
    }
    return frase;
}

function desencriptarManejo(){
    let frase = desencriptar(texto.value);
    controladorContainers(frase);
}

//Controlador de contenedores de los textos
function controladorContainers(frase){
    if(frase === ""){
        displayOff(textoProcesado);
        displayOn(textoProcesadoOff);
    }else{
        displayOff(textoProcesadoOff);
        displayOn(textoProcesado);
        textoProcesadoP.innerHTML = frase;
    }
}

//Función para el botón copiar
function copiar(){
    let inputNuevo = document.createElement("input");
    inputNuevo.value = textoProcesadoP.innerHTML;
    document.body.appendChild(inputNuevo);
    inputNuevo.select();
    document.execCommand("copy");
    document.body.removeChild(inputNuevo);
}

displayOff(textoProcesado);

btnEncriptar.onclick = encriptarManejo;
btnDesencriptar.onclick = desencriptarManejo;
btnCopiar.onclick = copiar;