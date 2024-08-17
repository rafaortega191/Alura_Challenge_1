function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = textoCifrado;  // Muestra el texto encriptado
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert('Error, no se ingresó ningún texto');
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = textoCifrado;  // Muestra el texto desencriptado
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert('Error, no se ingresó ningún texto');
    }
}

function copiarTexto() {
    let parrafo = document.getElementById("parrafo").textContent.trim();
    
    if (parrafo !== "Ingresa el texto que deseas encriptar o desencriptar" && parrafo.length !== 0) {
        // Crear un campo de texto temporal para copiar el texto
        let tempInput = document.createElement("textarea");
        tempInput.value = parrafo;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        alert("Texto copiado");
    } else {
        alert("No hay texto encriptado o desencriptado para copiar.");
    }
}

// Asigna la función al botón de copiar
document.getElementById("copy-button").addEventListener("click", copiarTexto);
