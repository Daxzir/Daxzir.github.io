
var texto = document.querySelector("#texto");

var encriptardor = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");

var resultado = document.querySelector("#resultado");
var copia = document.querySelector("#copiar");

var desbilitar = document.querySelector("#resultado");

var palabras = ['ai', 'enter', 'imes', 'ober', 'ufat','#'];
var vocales = ['a', 'e', 'i', 'o', 'u'];

var textoEncriptado = "";
var textoDesencriptado = texto;

function encriptar() {

    if (resultado.value != "") {
        limpiar();
    }

    for (var i = 0; i < texto.value.length; i++) {

        if (vocales.indexOf(texto.value[i]) != -1) {
            var posicion = vocales.indexOf(texto.value[i]);
            textoEncriptado += palabras[posicion];
        } else {
            textoEncriptado += texto.value[i];
        }

    }
    texto.value = "";
    resultado.value = textoEncriptado;
    textoEncriptado = "";
}

function desencriptars() {

    if (resultado.value != "") {
        limpiar();
    }

    for (var i = 0; i < texto.value.length; i++) {
        for (var j = 0; j < palabras.length; j++) {
            if (texto.value.search(palabras[j + 1])) {
                textoDesencriptado.value = textoDesencriptado.value.replace(palabras[j], vocales[j]);
            }
        }
    }
    resultado.value = textoDesencriptado.value;
    texto.value = "";

}

//Esta funcion sirve para compiar el resultado.
function copiar() {
    desbilitar.disabled = false;
    var cop = document.getElementById("resultado");
    cop.select();
    document.execCommand('copy');
    desbilitar.disabled = true;
}


//Esta funcion limpia el texto de el recuadro del resultado
function limpiar() {
    resultado.value = "";
}

encriptardor.onclick = encriptar;
desencriptar.onclick = desencriptars;
copia.onclick = copiar;