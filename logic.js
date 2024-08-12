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

    if (texto_original.trim() === "") {
        let imagen1 = document.createElement("img");
        imagen1.src = "imagenes/info.png";
        imagen1.alt = "informacion";

        let mensaje = document.createElement("p");
        mensaje.innerHTML = "Ningun mensaje fue encontrado. por favor ingresa el texto que desees !";
        mensaje.classList.add("p_1");

        resultadodiv.appendChild(imagen1);
        resultadodiv.appendChild(mensaje);

        botonCopiar.style.display = "none";
    } else {
        resultadodiv.style.display = "block";
        botonCopiar.style.display = "inline-block";
    }
}

function descifrarTexto() {
    let texto_cifrado = document.getElementById("texto").value;
    let resultadodiv = document.getElementById("resultadotexto");
    let botonCopiar = document.querySelector(".boton_copiar");

    let texto_descifrado = texto_cifrado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    resultadodiv.innerText = texto_descifrado;

    if (texto_cifrado.trim() === "") {
        let imagen1 = document.createElement("img");
        imagen1.src = "imagenes/info.png";
        imagen1.alt = "informacion";

        let mensaje = document.createElement("p");
        mensaje.innerHTML = "Ningun mensaje fue encontrado. por favor ingresa el texto que desees !";
        mensaje.classList.add("p_1");

        resultadodiv.appendChild(imagen1);
        resultadodiv.appendChild(mensaje);

        botonCopiar.style.display = "none";
    } else {
        resultadodiv.style.display = "block";
        botonCopiar.style.display = "inline-block";
    }
}

function filtrarTexto() {
    let textarea = document.getElementById("texto");
    let texto_1 = textarea.value;
    let texto_original = texto_1.replace(/[^a-z ]/g, "");

    textarea.value = texto_original;

    let Reemplazo = texto_1 !== texto_original;
    let alertaImagen = document.createElement("img");
    alertaImagen.src = "imagenes/detener.gif";
    alertaImagen.classList.add("alerta");

    if (Reemplazo) {
        document.body.appendChild(alertaImagen);
        setTimeout(() => {
            document.body.removeChild(alertaImagen);
        }, 3200);
    }

    let resultadodiv = document.querySelector(".Resultado__Texto");
    let botonCopiar = document.querySelector(".boton_copiar");
    let botonlimpiar = document.querySelector(".boton_reset");
    let imagen = resultadodiv.querySelector("#imagen_buscar");

    resultadodiv.innerHTML = "";

    if (texto_original.trim() === "") {
        if (!imagen) {
            imagen = document.createElement("img");
            imagen.src = "imagenes/Muñeco.png";
            imagen.alt = "muñeco salida";
            imagen.classList.add("Resultado__Texto img");
        }

        let mensaje1 = document.createElement("p");
        mensaje1.innerHTML = "Ningún mensaje fue encontrado";
        mensaje1.classList.add("p_1");

        let mensaje2 = document.createElement("p");
        mensaje2.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
        mensaje2.classList.add("p_2");

        resultadodiv.appendChild(imagen);
        resultadodiv.appendChild(mensaje1);
        resultadodiv.appendChild(mensaje2);

        botonlimpiar.style.display = "none";
        botonCopiar.style.display = "none";
    } else {
        if (!imagen) {
            imagen = document.createElement("img");
            imagen.src = "imagenes/Muñeco.png";
            imagen.alt = "muñeco salida";
            imagen.id = "imagen_buscar";
            
        }
        
        resultadodiv.appendChild(imagen);
        botonlimpiar.style.display = "inline-block";
        
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

function limpiarTexto() {
    document.getElementById("texto").value = "";

    let botonCopiar = document.querySelector(".boton_copiar");

    botonCopiar.style.display = "none";

    filtrarTexto();
}

document.getElementById("texto").addEventListener("input", filtrarTexto);

window.onload = filtrarTexto;
