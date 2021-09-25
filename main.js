const valorBTC = 42000;
const valorETH = 2800;
const valorDOGE = 0.2;

mensaje();
function mensaje() {
  alert("Hola, bienvenido a MaiLuck!");
  let dato = prompt(
    "¿de qué cripto querés conocer la cotización de hoy? (Bitcoin, Ethereum, DogeCoin"
  );
  let datoFormateado = dato.replace(/\s/g, "").toLowerCase();
  iteracion(datoFormateado);
}

function iteracion(datoFormateado) {
  if (datoFormateado === "bitcoin") {
    alert("el valor del bitcoin es  " + valorBTC + " USD");
    mensaje();
  } else if (datoFormateado === "ethereum") {
    alert("el valor del Ethereum es " + valorETH + " USD");
    mensaje();
  } else if (datoFormateado === "dogecoin") {
    alert("el valor del DogeCoin es " + valorDOGE + " USD");
    mensaje();
  } else {
    alert("Ingrese una moneda válida");
    mensaje();
  }
}

