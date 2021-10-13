const coins = [];
let flag = true;
class Usuario {
  constructor(name, balanceUSD) {
    this.name = name;
    this.balanceUSD = balanceUSD;
  }
}

let usuario1 = new Usuario("Lucas", 1500);

let ETH = {
  name: "ethereum",
  value: 3400,
};

let BTC = {
  name: "bitcoin",
  value: 55400,
};

coins.push(ETH);
coins.push(BTC);

printExchangeRates();

function printExchangeRates() {
  coins.forEach((coin) => {
    console.log(
      usuario1.name +
        " puede comprar " +
        usuario1.balanceUSD / coin.value +
        " " +
        coin.name
    );
  });
}
inicio();
function inicio() {
  alert("Hola, bienvenido a Mailuck!");
  opcion = prompt(
    "Ingresa 1 si queres conocer la cotización de alguna cripto; Ingresa 2 si querés saber qué podes comprar con tu balance actual"
  );
  if (opcion == 1) {
    mensaje();
    function mensaje() {
      let dato = prompt(
        "¿de qué cripto querés conocer la cotización de hoy? (Bitcoin, Ethereum). Para cancelar ingresa la palabra SALIR"
      );
      let datoFormateado = dato.replace(/\s/g, "").toLowerCase();
      flag = true;
      iteracion(datoFormateado);
    }

    function iteracion(datoFormateado) {
      while (datoFormateado && flag) {
        switch (datoFormateado) {
          case "bitcoin":
            alert("el valor del bitcoin es  " + value.BTC + " USD");
            mensaje();
            break;

          case "ethereum":
            alert("el valor del Ethereum es " + value.ETH + " USD");
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
  } else if (opcion == 2) {
    alert(
      "Podes comprar " + usuario1.balanceUSD / coin.value + " " + coin.name
    );
  } else {
    alert("ingrese 1 o 2");
  }
}



// const valorBTC = 42000;
// const valorETH = 2800;
// const valorDOGE = 0.2;
// let flag = true;

// mensaje();

// function mensaje() {
//   alert("Hola, bienvenido a MaiLuck!");
//   let dato = prompt(
//     "¿de qué cripto querés conocer la cotización de hoy? (Bitcoin, Ethereum, DogeCoin). Para cancelar ingresa la palabra SALIR"
//   );

//   let datoFormateado = dato.replace(/\s/g, "").toLowerCase();
//   flag = true;
//   iteracion(datoFormateado);
// }

// function iteracion(datoFormateado) {
//   while (datoFormateado && flag) {
//     switch (datoFormateado) {
//       case "bitcoin":
//         alert("el valor del bitcoin es  " + valorBTC + " USD");
//         mensaje();
//         break;

//       case "ethereum":
//         alert("el valor del Ethereum es " + valorETH + " USD");
//         mensaje();
//         break;

//       case "dogecoin":
//         alert("el valor del DogeCoin es " + valorDOGE + " USD");
//         mensaje();
//         break;

//       case "salir":
//         saludo();
//         break;

//       default:
//         alert("Ingrese una moneda válida");
//         mensaje();
//         break;
//     }
//   }
// }

// function saludo() {
//   alert("Muchas gracias, vuelvas prontos!");
//   flag = false;
// }
