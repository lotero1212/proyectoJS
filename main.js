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
  while (datoFormateado != "salir" && flag) {
    switch (datoFormateado) {
      case "bitcoin":
        alert("el valor del bitcoin es  " + valorBTC + " USD");
        flag = false;
        break;

      case "ethereum":
        alert("el valor del Ethereum es " + valorETH + " USD");
        flag = false;
        break;

      case "dogecoin":
        alert("el valor del DogeCoin es " + valorDOGE + " USD");
        flag = false;
        break;

      default:
        alert("Ingrese una moneda válida");
        flag = false;
        break;
    }
  }
  if (datoFormateado == "salir") {
    alert("Muchas gracias, vuelvas prontos!");
  } else {
    mensaje();
  }
}

// function iteracion(datoFormateado) {
//   if (datoFormateado === "bitcoin") {
//     alert("el valor del bitcoin es  " + valorBTC + " USD");
//     mensaje();
//   } else if (datoFormateado === "ethereum") {
//     alert("el valor del Ethereum es " + valorETH + " USD");
//     mensaje();
//   } else if (datoFormateado === "dogecoin") {
//     alert("el valor del DogeCoin es " + valorDOGE + " USD");
//     mensaje();
//   } else {
//     alert("Ingrese una moneda válida");
//     mensaje();
//   }
// }
