function cifrarTexto() {
    let texto_original = document.getElementById("texto").value;
    let resultadodiv = document.getElementById("resultadotexto");
    let botonCopiar = document.querySelector(".boton_copiar");

    let texto_cifrado = texto_original
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    resultadodiv.innerText = texto_cifrado;
    resultadodiv.style.display = "block";
    botonCopiar.style.display = "inline-block";

    let subcadenas = ["ai", "enter", "imes", "ober", "ufat"];
    let contieneSubcadena = subcadenas.some(subcadena => texto_original.includes(subcadena));

    let validarTexto = document.getElementById("resultadotexto");
    if (contieneSubcadena) {
        validarTexto.innerHTML = "Texto Encriptado!";
    } 
}

function descifrarTexto() {
    let texto_cifrado = document.getElementById("texto").value;
    let resultadodiv = document.getElementById("resultadotexto");

    let texto_descifrado = texto_cifrado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    resultadodiv.innerText = texto_descifrado;
    resultadodiv.style.display = "block";
}

function filtrarTexto() {
    let textarea = document.getElementById("texto");
    let texto_original = textarea.value.replace(/[^a-z ]/g, "");
    textarea.value = texto_original;

    let resultadodiv = document.getElementById("resultadotexto");
    let botonCopiar = document.querySelector(".boton_copiar");

    resultadodiv.innerHTML = "";

    if (texto_original.trim() === "") {
        let imagen = resultadodiv.querySelector("img");
        if (!imagen) {
            imagen = document.createElement("img");
            imagen.src = "imagenes/Muñeco.png";
            imagen.alt = "muñeco salida";
            resultadodiv.appendChild(imagen);
        }

        let mensaje1 = document.createElement("p");
        mensaje1.innerHTML = "<strong>Ningún mensaje fue encontrado</strong>";

        let mensaje2 = document.createElement("p");
        mensaje2.textContent = "Ingresa el texto que desees encriptar o desencriptar.";

        resultadodiv.appendChild(mensaje1);
        resultadodiv.appendChild(mensaje2);

        botonCopiar.style.display = "none";
    } else {
        resultadodiv.style.display = "block";
    }
}
function mostrarMensajeTemporal(mensaje) {
    let mensajeElemento = document.createElement("p");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.add("mensaje-temporal");
    document.body.appendChild(mensajeElemento);

    setTimeout(() => {
        document.body.removeChild(mensajeElemento);
    }, 2000);
}

function copiarTexto() {
    let resultadodiv = document.getElementById("resultadotexto");
    let textoParaCopiar = resultadodiv.innerText || resultadodiv.textContent;

    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        mostrarMensajeTemporal("Texto copiado al portapapeles!");
    }).catch((err) => {
        console.error("No se pudo copiar el texto: ", err);
        mostrarMensajeTemporal("No se pudo copiar el texto.");
    });
}
