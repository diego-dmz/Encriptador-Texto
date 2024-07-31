// Función para cifrar el texto
function cifrarTexto() {
    // Obtiene el valor del campo de texto con id "texto"
    let texto_original = document.getElementById("texto").value;

    // Obtiene la referencia al div donde se mostrará el texto cifrado
    let resultadodiv = document.getElementById("resultadotexto");

    // Obtiene el botón de copiar
    let botonCopiar = document.querySelector(".boton_copiar");

    // Cifra el texto reemplazando caracteres según el esquema definido
    let texto_cifrado = texto_original
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    

    // Actualiza el contenido del div con el texto cifrado
    resultadodiv.innerText = texto_cifrado;
    // Muestra el div de resultados
    resultadodiv.style.display = "block";

    // Muestra el botón de copiar
    botonCopiar.style.display = "inline-block";

 
let subcadenas = ["ai", "enter", "imes", "ober", "ufat"];


let contieneSubcadena = subcadenas.some(subcadena => texto_original.includes(subcadena));

let validarTexto = document.getElementById("resultadotexto");
if (contieneSubcadena) {
    validarTexto.innerHTML = "Texto Encriptado!";
} 
}

// Función para descifrar el texto
function filtrarTexto() {
    // Obtiene la referencia al campo de texto con id "texto"
    let textarea = document.getElementById("texto");

    // Reemplaza caracteres que no sean letras minúsculas o espacios con una cadena vacía
    let texto_original = textarea.value.replace(/[^a-z ]/g, "");

    // Actualiza el campo de texto con el texto filtrado
    textarea.value = texto_original;

    // Obtiene la referencia al div donde se mostrará el texto o mensajes
    let resultadodiv = document.getElementById("resultadotexto");

    // Obtiene el botón de copiar
    let botonCopiar = document.querySelector(".boton_copiar");

    // Elimina solo los párrafos del div de resultados
    let parrafos = resultadodiv.querySelectorAll("p");
    parrafos.forEach(p => resultadodiv.removeChild(p));

    // Si el texto filtrado está vacío, muestra un mensaje de advertencia
    if (texto_original.trim() === "") {
        // Verifica si la imagen ya está presente, si no, la crea
        let imagen = resultadodiv.querySelector("img");
        if (!imagen) {
            imagen = document.createElement("img");
            imagen.src = "imagenes/Muñeco.png";
            imagen.alt = "muñeco salida";
            resultadodiv.appendChild(imagen);
        }

        // Crea y añade los mensajes si no están ya presentes
        let mensaje1 = document.createElement("p");
        mensaje1.classList.add("negrita_centrado");
        mensaje1.textContent = "Ningún mensaje fue encontrado";

        let mensaje2 = document.createElement("p");
        mensaje2.textContent = "Ingresa el texto que desees encriptar o desencriptar.";

        // Verifica si los párrafos ya están presentes
        let parrafosEnDiv = resultadodiv.querySelectorAll("p");
        if (parrafosEnDiv.length === 0) {
            resultadodiv.appendChild(mensaje1);
            resultadodiv.appendChild(mensaje2);
        }

        // Oculta el botón de copiar si no hay texto
        botonCopiar.style.display = "none";
    } else {
        // Muestra el div de resultados y el botón de copiar si hay texto
        resultadodiv.style.display = "block";
       
    }
}

// Función para mostrar un mensaje temporal en la página
function mostrarMensajeTemporal(mensaje) {
    // Crea un nuevo elemento de párrafo para el mensaje
    let mensajeElemento = document.createElement("p");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.add("mensaje-temporal");
    document.body.appendChild(mensajeElemento);

    // Elimina el mensaje después de 2000 milisegundos (2 segundos)
    setTimeout(() => {
        document.body.removeChild(mensajeElemento);
    }, 2000);
}

// Función para copiar el texto del div al portapapeles
function copiarTexto() {
    // Obtiene el contenido del div de resultados
    let resultadodiv = document.getElementById("resultadotexto");
    let textoParaCopiar = resultadodiv.innerText || resultadodiv.textContent;

    // Intenta copiar el texto al portapapeles
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        // Muestra un mensaje temporal indicando que el texto se copió
        mostrarMensajeTemporal("Texto copiado al portapapeles!");
    }).catch((err) => {
        // Muestra un mensaje temporal indicando que no se pudo copiar el texto
        console.error("No se pudo copiar el texto: ", err);
        mostrarMensajeTemporal("No se pudo copiar el texto.");
    });
}
