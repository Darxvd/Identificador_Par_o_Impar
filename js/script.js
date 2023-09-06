function numeroPar() {
  let numero = document.getElementById("txtNumero").value;
  let respuesta = "";

  if(numero === "" || numero === null || numero === undefined){
    respuesta = "Ingrese un numero"
  } else {
    if (numero >= 0) {
      if (numero % 2 == 0) {
        respuesta = "El Numero " + numero + " es Par"
      } else {
        respuesta = "El Numero " + numero + " es Impar"
      }
    } else {
      respuesta = "Numero no positivo"
    }
  }
  document.getElementById("txtRespuesta").textContent = respuesta;
}