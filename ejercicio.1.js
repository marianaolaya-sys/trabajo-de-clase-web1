let menores = 0;
let iguales = 0;
let mayores = 0;

let temperatura;

while (true) {

    temperatura = Number(prompt("Ingrese una temperatura:"));

    // Finalizar si es 99 o -99
    if (temperatura === 99 || temperatura === -99) {
        break;
    }

    if (temperatura < 0) {
        menores+1;
    } else 
        if (temperatura === 40) {
        iguales+1;
    } else 
        {
        mayores+1;
    }
}

alert("Menores que 0: " + menores);
alert("Iguales a 0: " + iguales);
alert("Mayores que 50: " + mayores);

ejecicio2
function interpretarRadar(codigo) {
    let codStr = String(codigo);


    if (codStr.length !== 4 || isNaN(codigo)) {
        console.error("Error: El código debe ser un número de exactamente 4 dígitos.");
        return;

    const d1 = parseInt(codStr[0]);
    const d2 = parseInt(codStr[1]);
    const d3 = parseInt(codStr[2]);
    const d4 = parseInt(codStr[3]);

    console.log(`--- Analizando código: ${codStr} ---`);

    
    let presencia = (d1 % 2 === 0) ? "Aeronave en el aire" : "No hay aeronave";
    console.log(`Presencia: ${presencia}`);

    let tipo = "";
    switch (d2) {
        case 1: tipo = "Avión militar"; break;
        case 2: tipo = "Avión civil de carga"; break;
        case 3: tipo = "Avión civil de pasajeros"; break;
        case 4: tipo = "Aeronave sin permiso"; break;
        case 5: tipo = "Aeronave de supertransporte"; break;
        case 6: tipo = "Aeronave enemiga"; break;
        case 7: tipo = "Avión mixto"; break;
        case 8: tipo = "Helicóptero"; break;
        case 9: tipo = "Globo aerostático"; break;
        case 0: tipo = "Dirigible"; break;
        default: tipo = "Desconocido";
    }
    console.log(`Tipo: ${tipo}`);

    console.log(`Distancia: ${d3} km`);

    let direccion = "";
    if (d4 === 0 || d4 === 1) direccion = "Norte";
    else if (d4 === 2 || d4 === 3) direccion = "Sur";
    else if (d4 === 4 || d4 === 5) direccion = "Oriente";
    else if (d4 === 6 || d4 === 7) direccion = "Occidente";
    else if (d4 === 8 || d4 === 9) direccion = "Desconocido";
    
    console.log(`Dirección: ${direccion}`);
    console.log("---------------------------------\n");
}
}
