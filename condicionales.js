// // EJERCICIO 1
// let unidad,cantidad,mi,km,mt;
// unidad= parseInt(prompt("Digite 1 para millas - 2 para kilometros-3 para metros"));
// cantidad=prompt("Digite el valor a convertir");
// switch(unidad){
//     case 1:
//         km = cantidad*1.6093;
//         mt =cantidad*1609.34;
//         document.write(cantidad+ " millas, equivalen a "+km + " Kilometros, y a " + mt + " metros");
//         break;
//     case 2:
//         mi=cantidad* 0.621371;
//         mt= cantidad*1000;
//          document.write(cantidad+ " kilometros, equivalen a "+ mi + " millas, y a " + mt + " metros");

//         break; 
//     case 3:
//         mi=cantidad* 0.000621371;
//         km= cantidad*1000;
//          document.write(cantidad+ " metros, equivalen a "+ mi + " millas, y a " + km + " kilometros");

//         break;
//     default:
//         document.write("Valor Incorrecto");
//         break;
// }
// // EJERCICIO 2
// let d1,d2,d3,d4,d5,d6,num,coc;
// num= prompt("Digite un numero de 6 cifras");
// d6 =num % 10;
// coc = Math.trunc(num / 10);
// d5 = coc % 10;
// coc = Math.trunc(coc/ 10);
// d4 = coc % 10;
// coc = Math.trunc(coc/ 10);
// d3 = coc % 10;
// coc = Math.trunc(coc/ 10);
// d2 = coc % 10;
// coc = Math.trunc(coc/ 10);
// d1=  coc % 10
// coc = Math.trunc(coc /10 );

// document.write("La asuma es : " + (d3 +d4 ));
// document.write("La multiplicacion es : " + (d1* d6));
// document.write("La resta es : " + (d2-d5));

//// EJERCICIO 3 
// // let hora = parseInt(prompt("Ingrese una hora (0-23):"));
// // let minutos = parseInt(prompt("Ingrese un minuto (0-59):"));
// // let segundos = parseInt(prompt("Ingrese un segundo (0-59):"));
// // segundos++;
// // if (segundos === 60) 
// //     segundos = 0; 
// //     minutos++; 
// // if (minutos === 60) 
// //     minutos = 0;
// //     hora++;
// // if (hora === 24) 
// //     hora = 0;
// // hora = String(hora).padStart(2, "0");
// // minutos = String(minutos).padStart(2, "0");
// // segundos = String(segundos).padStart(2, "0");
// // document.write(hora + ":" + minutos + ":" + segundos);
//let caso1,caso2,caso3,caso4;
//caso1="13:19:25";
//caso2="13:19:59";
//caso3="13:59:59";
//caso4="23:59:59";

//const Tiempo = caso3.split(":");
//console.log(tiempo) ["23", "59", "59"]
//hora = (tiempo[0]);  
//min  =  ( tiempo[1]);
//seg  =  (tiempo[2]);  

//if(hora == 234 && min == 59 && seg == 59){
 //   hora  =  0; min = 0;
//} else if (min == 59 && seg ==59){
   // hora += 1; min = 0; deg =0;
//}else{
  //  seg++;
//}
//console.log(hora+":" +min+":" +seg)  "13:20:0"


/// EJECICIO 4
let a, b, c, x2, disc;
a = parseFloat(print(" valor de a"));
a = parseFloat(print(" valor de b"));
a = parseFloat(print(" valor de c"));
disc = b*b-(4*a*c);
if (disc== 0){
    document.write("solo hay una solución");
    x1 = (-b + Math.sqrt(disc))/2*a;
    ocument.write("solución es:"+ x1);
}else if (disc>0){
    x1 =(-b+ Math.sqrt(disc))/2*a;
    x2 = (b+ Math.sqrt(disc))/2*a;
    document.write("Solución 1:"+ x1);
    document.write("<br>");
    document.write("Solución 2:"+ x2);
}else{
    document.write("la solución incluye números");
}
