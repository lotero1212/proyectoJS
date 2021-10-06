const valorBTC = 42000;
const valorETH = 2800;
const valorDOGE = 0.2;
let flag = true;

mensaje();

function mensaje() {
  alert("Hola, bienvenido a MaiLuck!");
  let dato = prompt(
    "¿de qué cripto querés conocer la cotización de hoy? (Bitcoin, Ethereum, DogeCoin). Para cancelar ingresa la palabra SALIR"
  );

  let datoFormateado = dato.replace(/\s/g, "").toLowerCase();
  flag = true;
  iteracion(datoFormateado);
}

function iteracion(datoFormateado) {
  while (datoFormateado && flag) {
    switch (datoFormateado) {
      case "bitcoin":
        alert("el valor del bitcoin es  " + valorBTC + " USD");
        mensaje();
        break;

      case "ethereum":
        alert("el valor del Ethereum es " + valorETH + " USD");
        mensaje();
        break;

      case "dogecoin":
        alert("el valor del DogeCoin es " + valorDOGE + " USD");
        mensaje();
        break;

      case "salir":
        saludo();
        break;

      default:
        alert("Ingrese una moneda válida");
        mensaje();
        break;
    }
  }
}

function saludo() {
  alert("Muchas gracias, vuelvas prontos!");
  flag = false;
}
