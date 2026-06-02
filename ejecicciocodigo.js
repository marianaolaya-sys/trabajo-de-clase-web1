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
//ejecicio18
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
