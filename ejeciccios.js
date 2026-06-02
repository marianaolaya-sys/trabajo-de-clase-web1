//let num = 1;
//document.writeln(num); 1
//num +=1;
//document.writeln(num); 2
//num +=1;
//document.writeln(num); 3
//num +=1;
//document.writeln(num); 4
//num +=1;
//document.writeln(num); 5
///num +=1;
//document.writeln(num); 6
//num +=1;
//document.writeln(num); 7
//num +=1;
//document.writeln(num); 8
//num +=1;
//document.writeln(num); 9
//num +=1;
//document.writeln(num); 10
//num +=1;
/*let num = 100;             //valor inicial
while (num >=0){       // Condicional verdadera
    console.log(num);
    num -= 10;       //Incremento

}
let num = 2;         //valor Inicial 
do{
    console.log (num);
    num +=2;           //Incremento
}while(num <=30)    //condicional final
for (let num =1; num<=30; num+=2){
    console.log(num);
}*/ 
 ///ejecicio18///
 
 let cant1, cant2, cant3, cantTotal, PrecioT;
let frec, dia;
do {
    cant1 = prompt('Cantidad de huevos Tipo A: ');
    } while (cant1<0);
do {
    cant2 = prompt('Cantidad de huevos Tipo AA: ');
    } while (cant2<0);
do {
    cant3 = prompt('Cantidad de huevos Tipo AAA: ');
    } while (cant3<0);
do {
    frec = prompt('Si es cliente frecuente digite 1, de lo contario 0:');
    } while (frec != 1 && frec != 0);
do {
    dia = prompt('Digite 1 si compró de L-V; 2 si compró el Sábado; 3 si compró el Domingo');
    } while (dia<1 || dia>3);

    /// Ejercicio 19 ///
     
  function clasificarDeportes() {
    // 1. Declaración de contadores con let, inicializados en 0
    let ajedrez = 0;
    let atletismo = 0;
    let futbol = 0;
    let gimnasia = 0;
    let natacion = 0;

    
    let totalPersonas = 400;

    // 3. Lista de deportes válidos (escritura correcta y completa)
    let deportesValidos = ["ajedrez", "atletismo", "fútbol", "gimnasia", "natación"];

    console.log("=== CLASIFICACIÓN DE PERSONAS POR DEPORTE ===");
    console.log("Deportes permitidos: Ajedrez, Atletismo, Fútbol, Gimnasia, Natación\n");

    for (let i = 1; i <= totalPersonas; i++) {
        let deporteValido = false;
        let deporteIngresado = "";

        // 5. Bucle para validar la entrada
        while (!deporteValido) {
            // Entrada de datos compatible con navegador y con mensaje claro
            let entrada = prompt(`Persona ${i} - Ingrese el deporte que practica:`);
            
            // 6. Evitar error si el usuario cancela el prompt
            if (entrada === null) {
                alert("Operación cancelada. Se terminará el registro.");
                return; // Salimos de la función
            }

            // 7. Limpieza de espacios y conversión a minúsculas correcta
            deporteIngresado = entrada.trim().toLowerCase();

            // 8. Comprobación exacta con la lista
            if (deportesValidos.includes(deporteIngresado)) {
                deporteValido = true;
            } else {
                alert("❌ Error: Deporte no válido. Escribe uno de la lista permitida.");
            }
        }

        // 9. Asignación correcta al contador correspondiente
        switch (deporteIngresado) {
            case "ajedrez":
                ajedrez++;
                break;
            case "atletismo":
                atletismo++;
                break;
            case "fútbol":
                futbol++;
                break;
            case "gimnasia":
                gimnasia++;
                break;
            case "natación":
                natacion++;
                break;
        
        }
    }
}

///Ejeciccio 20 ///
// Voy a darle hasta 3 oportunidades de escribe clave///
let claveSecreta = "miClave123"; 
let contadorIntentos = 0;
let contrasenaUsuario;

while (contadorIntentos < 3) {
    // Le pido que escriba la contraseña
    contrasenaUsuario = prompt("Por favor, ingrese su contraseña:");

    if (contrasenaUsuario == null) {
        alert("Operación cancelada por el usuario.");
        break;
    }

    if (contrasenaUsuario == claveSecreta) {
        alert("Acceso concedido");
        // Si acierta, ya no hace falta seguir preguntando
        break;
    } else {
        // Si falla, cuento el error y le aviso
        contadorIntentos = contadorIntentos + 1;
        alert("Acceso Denegado");
    }
}