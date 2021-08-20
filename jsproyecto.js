alert("Bienvenidos al simulador de SLP para Axie Infinity");

let partidasGanadas = parseInt(prompt("Ingrese la cantidad de partidas ganadas"));

let cantCopas = parseInt(prompt("Ingrese la cantidad de copas"));


switch (true) {
        case (cantCopas <= 1099):
            alert ("Ganaras 3 SLP por partida ganada");
            let SLPCasoA = 3;
            alert ("Tu recompensa diaria estimadas será de " + ((SLPCasoA*partidasGanadas) + 75) + " SLP. Ya que ganarás " + partidasGanadas + " partidas y en tu rango de copas, tu recompensa por partida es de " + SLPCasoA + " SLP por partida ganada, sumado a los 75 SLP diarios por completar las quests." );
            break;
        case (cantCopas >= 1099 && cantCopas <= 1199):
            alert ("Ganaras 6 SLP por partida ganada");
            let SLPCasoB = 6;
            alert ("Tu recompensa diaria estimadas será de " + ((SLPCasoB*partidasGanadas) + 75) + " SLP. Ya que ganarás " + partidasGanadas + " partidas y en tu rango de copas, tu recompensa por partida es de " + SLPCasoB + " SLP por partida ganada, sumado a los 75 SLP diarios por completar las quests." );
            break; 
        default: 
            alert ("Ganaras 9 SLP por partida ganada")
            let SLPCasoC = 6;
            alert ("Tu recompensa diaria estimadas será de " + ((SLPCasoC*partidasGanadas) + 75) + " SLP. Ya que ganarás " + partidasGanadas + " partidas y en tu rango de copas, tu recompensa por partida es de " + SLPCasoC + " SLP por partida ganada, sumado a los 75 SLP diarios por completar las quests." );
            break;
}

// alert ("si ganaste " + partidasGanadas + " partidas y tienes " + cantCopas + " copas, tu ganancia diaria sera " + ((cantCopas * partidasGanadas ) +75));

// if (cantCopas <= 1099) {
//     alert ("Ganaras 4 SLP por partida ganada")
// }

// else if ((cantCopas >= 1100) && (cantCopas <= 1199)) {
//     alert ("Ganaras 6 SLP por partida ganada")
// }

// else if (cantCopas >= 1200) {
//     alert ("Ganaras 8 SLP por partida ganada")
// }

// alert ("si ganaste "+ partidasGanadas +  " partidas y tienes " + cantCopas + " copas, tu ganancia diaria sera " + SLPDiario);