alert("Bienvenidos al simulador de SLP para Axie Infinity");
let cantCopas = parseInt(prompt("Ingrese la cantidad de copas"));
let partidasGanadas = parseInt(prompt("Ingrese la cantidad de partidas ganadas"));
let copasPartidaA = 4;
let SLPDiario = ((copasPartidaA * partidasGanadas)+75)

if (cantCopas <= 1099) {
    alert ("Ganaras 4 SLP por partida ganada")
}

else if ((cantCopas >= 1100) && (cantCopas <= 1199)) {
    alert ("Ganaras 6 SLP por partida ganada")
}

else if (cantCopas >= 1200) {
    alert ("Ganaras 8 SLP por partida ganada")
}

alert ("si ganaste "+ partidasGanadas +  " partidas y tienes " + cantCopas + " copas, tu ganancia diaria sera " + SLPDiario);