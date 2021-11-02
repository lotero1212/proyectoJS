class Coin {
  constructor(name, acronym, value) {
    this.name = name;
    this.acronym = acronym;
    this.value = value;
  }
}

let coins = JSON.parse(localStorage.getItem("coins")) || [];
let searchs = JSON.parse(localStorage.getItem("searchs")) || [];

const getAll = () => {
  return coins;
};

const create = (newCoin) => {
  coins.push(newCoin);
  localStorage.setItem("coins", JSON.stringify(coins));
};

const findOne = (name) => {
  name = name.toLowerCase();
  const coin = coins.find((coin) => coin.name === name);

  if (!coin) {
    throw new Error(`No existe la cripto ${name}`);
  }

  return coin;
};

const remove = (name) => {
  const coin = findOne(name);
  const index = coins.indexOf(coin);
  coins.splice(index, 1);
  localStorage.setItem("coins", JSON.stringify(coins));
};

const update = (name, acronym, value) => {
  const coin = findOne(name);
  coin.value = value;
};

const coinList = document.getElementById("coin-list");
const formUser = document.getElementById("form-user");
const nombreUsuario = document.getElementById("nombre-usuario");
const usdUsuario = document.getElementById("usd-usuario");
const monedaUsuario = document.getElementById("moneda-usuario");
const nombreCriptoNew = document.getElementById("nombre-cripto-new");
const siglaCriptoNew = document.getElementById("sigla-cripto-new");
const cotizacionCriptoNew = document.getElementById("coticazion-cripto-new");
const listaResultados = document.getElementById("lista-resultados");
const formCoin = document.getElementById("form-coin");
const botonConsultar = document.getElementById("boton-consultar");
const botonAgregar = document.getElementById("boton-agregar");

for (let coin of coins) {
  console.log(coin);
  let itemCoin = document.createElement("li");
  itemCoin.innerHTML = `${coin.acronym} ${coin.name} ${coin.value} <span style= "cursor:pointer" id="${coin.name}">X</span>`;
  coinList.appendChild(itemCoin);

  itemCoin.onclick = () => {
    remove(coin.name);
    document.location.reload();
  };
}

botonAgregar.onclick = function () {
  const nombre = nombreCriptoNew.value;
  const sigla = siglaCriptoNew.value;
  const cotizacion = cotizacionCriptoNew.value;

  const coin = new Coin(nombre, sigla, cotizacion);
  create(coin);
  console.log(getAll());
};
botonConsultar.onclick = function () {
  const usuario = nombreUsuario.value;
  const balance = usdUsuario.value;
  const moneda = monedaUsuario.value;

  let consulta = getConsulta(usuario, balance, moneda);
  searchs.push(consulta);
  localStorage.setItem("searchs", JSON.stringify(searchs));
  for (let search of searchs) {
    console.log(search);
    let itemSearch = document.createElement("li");
    itemSearch.textContent = search;
    listaResultados.appendChild(itemSearch);
  }
  return false;
};

function getConsulta(usuario, balance, moneda) {
  switch (moneda) {
    case "Ethereum":
      let eth = findOne("Ethereum");
      let amountEth = balance / eth.value;
      let consultaEth =
        new Date() +
        " " +
        usuario +
        " puede comprar " +
        amountEth +
        " de " +
        eth.name;
      return consultaEth;

    case "Bitcoin":
      let btc = findOne("Bitcoin");
      let amountBtc = balance / btc.value;
      let consultaBtc =
        new Date() +
        " " +
        usuario +
        " puede comprar " +
        amountBtc +
        " de " +
        btc.name;
      return consultaBtc;
  }
}
