let textoProcesado = document.getElementById("texto-procesado");
            let textoProcesadoP = document.getElementById("texto-procesado-p");
            let textoProcesadoOff = document.getElementById("texto-procesado-off");
            let btnEncriptar = document.getElementById("btn-encriptar");
            let btnDesenciptar = document.getElementById("btn-desencriptar");
            let texto = document.getElementById("texto");
            let btnCopiar = document.getElementById("btn-copiar");

function displayOff(elemento){
    elemento.style.display = "none";
}

function displayOn(elemento){
    elemento.style.display = "inline-block";
}

function encriptar(frase){
    const fraseArray = frase.split("");
    let fraseNueva = "";

    for(let i=0;i<fraseArray.length;i++){
        if(verificarVocal(fraseArray[i])){
            switch(fraseArray[i]){
                case "a":
                    fraseNueva += "ai";
                    break;
                case "e":
                    fraseNueva += "enter";
                    break;
                case "i":
                    fraseNueva += "imes";
                    break;
                case "o":
                    fraseNueva += "ober";
                    break;
                case "u":
                    fraseNueva += "ufat";
                    break;
            }
        }else{
            fraseNueva += fraseArray[i];
        }
    }
    return fraseNueva;
}

function verificarVocal(letra){
    if(letra==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u"){
        return true;
    }else{
        return false;
    }
}

function encriptarManejo(){
    let frase = encriptar(texto.value);
    verificarTexto(frase);
}

function desencriptar(frase){
    const fraseArray = frase.split("");
    let fraseNueva = "";

    for(let i=0;i<fraseArray.length;i++){
        if(verificarVocal(fraseArray[i])){
            switch(fraseArray[i]){
                case "a":
                    if("ai" === frase.substring(i,(i+2))){
                        fraseNueva += "a";
                        i++;
                    }else{
                        fraseNueva += fraseArray[i];
                    }
                    break;
                case "e":
                    if("enter" === frase.substring(i,(i+5))){
                        fraseNueva += "e";
                        i = i+4;
                    }else{
                        fraseNueva += fraseArray[i];
                    }
                    break;
                case "i":
                    if("imes" === frase.substring(i,(i+4))){
                        fraseNueva += "i";
                        i = i+3;
                    }else{
                        fraseNueva += fraseArray[i];
                    }
                    break;
                case "o":
                    if("ober" === frase.substring(i,(i+4))){
                        fraseNueva += "o";
                        i = i+3;
                    }else{
                        fraseNueva += fraseArray[i];
                    }
                    break;
                case "u":
                    if("ufat" === frase.substring(i,(i+4))){
                        fraseNueva += "u";
                        i = i+3;
                    }else{
                        fraseNueva += fraseArray[i];
                    }
                    break;
            }
        }else{
            fraseNueva += fraseArray[i];
        }
    }
    return fraseNueva;
}

function desencriptarManejo(){
    let frase = desencriptar(texto.value);
    verificarTexto(frase);
}

function verificarTexto(frase){
    if(frase === ""){
        displayOff(textoProcesado);
        displayOn(textoProcesadoOff);
    }else{
        displayOff(textoProcesadoOff);
        displayOn(textoProcesado);
        textoProcesadoP.innerHTML = frase;
    }
}

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
            btnDesenciptar.onclick = desencriptarManejo;
            btnCopiar.onclick = copiar;