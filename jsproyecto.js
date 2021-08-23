alert ("Bienvenido, por favor ingrese la opción desesada")
let funcionUsuario = prompt ("1- para calcular tu ganancia diaria aproximada" + " 2- para llevar la cuenta de los SLP de tu cuenta")
if (funcionUsuario == 1) {

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
            let SLPCasoC = 9;
            alert ("Tu recompensa diaria estimadas será de " + ((SLPCasoC*partidasGanadas) + 75) + " SLP. Ya que ganarás " + partidasGanadas + " partidas y en tu rango de copas, tu recompensa por partida es de " + SLPCasoC + " SLP por partida ganada, sumado a los 75 SLP diarios por completar las quests." );
            break;
}}

else if (funcionUsuario == 2) {
    alert("Bienvenido a tu calculadora de SLP");
    let SLPActual = parseInt(prompt("Ingresa la cantidad de SLP que tienes en tu cuenta"));
    let copasGanadas = parseInt(prompt("Ingresa las copas que ganaste, si deseas cancelar escribí salir"));
    function sumar (SLPActual, copasGanadas){
        return SLPActual + copasGanadas;
    }
    let resultado = sumar (SLPActual, copasGanadas); 
    alert (resultado);
}

else {
    prompt ("Por favor ingresá 1 o 2")
}
