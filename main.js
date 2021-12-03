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
const botonResetear = document.getElementById("boton-resetear");

botonResetear.onclick = function () {
  localStorage.clear();
  location.reload();
};

for (let coin of coins) {
  console.log(coin);
  let itemCoin = document.createElement("li");
  itemCoin.innerHTML = ` <a href="#"> 1 ${coin.acronym} (${coin.name}) vale ${coin.value} dólares. &nbsp &nbsp <i class="far fa-trash-alt" style= "cursor:pointer" id="${coin.name}"></i></a>`;
  coinList.appendChild(itemCoin);

  let optionCoin = document.createElement("option");
  optionCoin.textContent = coin.name;
  monedaUsuario.appendChild(optionCoin);

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

  if (coins.length == 0) {
    alert("Primero agregá una cripto");
  }

  let consulta = getConsulta(usuario, balance, moneda);
  searchs.push(consulta);
  localStorage.setItem("searchs", JSON.stringify(searchs));
};
for (let search of searchs) {
  console.log(search);
  let itemSearch = document.createElement("li");
  let hr = document.createElement("hr");
  itemSearch.textContent = search;
  itemSearch.appendChild = hr;
  listaResultados.appendChild(itemSearch);
  listaResultados.appendChild(hr);
}

function coinExist(coin) {
  coinToLower = coin.toLowerCase();
  coins.forEach((element) => {
    if (coinToLower == element.name) {
      console.log(element);
    }
  });
}

function getConsulta(usuario, balance, moneda) {
  let coinToLower = moneda;
  let elemento;
  let amount;
  let consulta;

  coins.forEach((element) => {
    if (coinToLower == element.name) {
      elemento = element;
    }
  });

  amount = balance / elemento.value;

  let date = new Date();

  const formatDate = (current_datetime) => {
    let formatted_date =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();
    return formatted_date;
  };

  consulta =
    formatDate(date) +
    " " +
    usuario +
    " puede comprar " +
    amount +
    " de " +
    elemento.name;

  return consulta;
}

function findCrypto() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("find-crypto");
  filter = input.value.toUpperCase();
  ul = document.getElementById("coin-list");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
