// Función para encriptar el texto
function encriptar(texto) {
    // Reemplazar las letras según las "llaves" de encriptación
    let encriptado = texto.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");
    return encriptado;
  }
  
  // Función para desencriptar el texto
  function desencriptar(texto) {
    // Reemplazar las "llaves" de encriptación por las letras originales
    let desencriptado = texto.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
    return desencriptado;
  }
  
    // Obtener referencias a los elementos del DOM
    const inputTexto = document.getElementById("input-texto");
    const btnEncriptar = document.getElementById("btn-encriptar");
    const btnDesencriptar = document.getElementById("btn-desencriptar");
    const btnCopiar = document.getElementById("btn-copiar");
    const btnLimpiar = document.getElementById("btn-limpiar");
    const outputTexto = document.getElementById("output-texto");

  
  // Agregar event listeners a los botones
  btnEncriptar.addEventListener("click", () => {
    // Obtener el texto del campo de entrada, convertirlo a minúsculas y eliminar caracteres no alfabéticos
    const texto = inputTexto.value.toLowerCase().replace(/[^a-z]/g, "");
    // Encriptar el texto y mostrar el resultado en el campo de salida
    const textoEncriptado = encriptar(texto);
    outputTexto.value = textoEncriptado;
  });
  
  btnDesencriptar.addEventListener("click", () => {
    // Obtener el texto del campo de entrada, convertirlo a minúsculas y eliminar caracteres no alfabéticos
    const texto = inputTexto.value.toLowerCase().replace(/[^a-z]/g, "");
    // Desencriptar el texto y mostrar el resultado en el campo de salida
    const textoDesencriptado = desencriptar(texto);
    outputTexto.value = textoDesencriptado;
  });
  
  btnCopiar.addEventListener("click", () => {
    // Copiar el texto del campo de salida al portapapeles
    outputTexto.select();
    document.execCommand("copy");
  });

  btnLimpiar.addEventListener("click", () => {
    // Limpiar el campo de entrada y salida
    outputTexto.value = "";
    inputTexto.value = "";
  });