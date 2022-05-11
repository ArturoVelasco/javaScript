//*Bucles e interacion

/*En javaScript, los buces (LOOPS) son uilizados para realizar tareas 

*/


//!Si ejecutamos el código sin una sentencia de termino o salida, nuestra computadora hara interaciones infinitas.

/*
let numero=0;
while (numero < 10) {
    numero ++;
    console.log(numero);
}
*/
//!La sentencia while se va a ejecutar mientras siga obteniendo resultados positivos (true), y  hasta que recibe un resultado negativo (false) termina.

/*Ejercicio de práctica
?Escribir un programa que pida un numeor entero positivo y muestre por pantalla todos los numero impares del 1 hasta ese numero
*/

/*
let numero = 0;
var entero = prompt("Ingrese un valor entero positivo");
salida= [];
let x=0;

while(numero < entero){
    if (numero%2==0){
        numero++;
    }
    else{
        salida [x]= numero;
        x++;
        numero++;
    }
    console.log("Los numeros son", salida );
}
*/
/*
console.log("Do while")
let numero3 = 0 //Declaramos la variable numero3 en 0

do {
    console.log(numero3);
    numero3 ++;
}
while (numero3<6); //Condición de iteracion

console.log("WHILE")
let nuemro =0;
while (numero < 5){ //Condicion de interacion
    numero ++; //Incrementamos el valor de la variable 1 en 1 
    console.log(numero); //Imprimir el valor de la variable
}

*/
//Ejemplo do while de diego
/*
let continuar = 0;
do{
    alert('menu')
    continuar = prompt('quieres continuar (si=1 no =0)')
}
while (continuar == 1);
alert('saliendo del menu')

let continuar2=0;

while(continuar2 == 1 ){
    alert('menu')
    continua=prompt('quieres continuar (si=1 no =0)');

}
*/

//*Ciclo For(para)

/* EL ciclo For (para) sirve para iterar sobre una seccion de una varibale. Es diferente del while por quue le podemos pasar una lita de valores y ejecutar una vez por cada uno de ellos.

1. El valor inicial de nuestra variable que vamos a iterar (i=0)
2. Condicion que tiene que cumplirse para que el bucle se siga ejecutando (i<10)
3. Operacin que se reaiza una vez que termina nuestro bucle (i++)
*/

//Ejemplo 1 de Felipe
/*
for (let i=0; i<10 i++){

}
*/

//*Sentencia Breack

/*Termina el bucle actual, sentencia switch o Label. Permite al progama salir de una sentencia, pero para que se pueda ejecutar necesita estar anidado dentro de la sentencia etiquetada. */
/*
let numero5 = 0;
while (numero5 <25){
    numero5 ++,
    console.log("Resultado del while + break:",numero5);
    if (numero5 == 13){//Si el numero 5 es igual a 50
    
    break; //termina el progama

    }
}

//Combinar for, if, y break.

for (let i=0; i <25; i++){
    console.log("Resulto del for + if ´break", i);
    if(i==13){
    break;
    }
}

//*Sentencia Contnue
for(let i=0; i<25;  i++){
    if(i == 10){
        continue;
    }
    console.log ("Estos son todos los resultados menos uno",i);
}


//SEntencia for in  y For of

let animalitosDelBosque = ["ardillas","conejos","venados","osos","mariposas"];

//in: posiciones En el arreglo
for (posiciones in animalitosDelBosque){
    console.log(posiciones)
}

//of: valores DEl arreglo
for (valores of animalitosDelBosque){
    console.log(valores)
}

//EJEMPLO ZOOLOGICO


let zoo = ["leon","tigre","cocodrilo","elefante","jirafa"];
for (numeroDeJaula in zoo){
    console.log(numeroDeJaula);
}
for (nombreDeJaula of zoo){
    console.log(nombreDeJaula);
}
console.log("La jirafaa esta en la jaula: ",zoo.indexOf("jirafa"));
console.log("EL anumel que esta en la jaula 3 es :", zoo[3])

*/

//*Ejercicios en Clase

/*
bae=0;
var numero = parseInt(prompt("Ingresa un Número entero"));
//2,3,5,7,11

if (numero%2 == 0){
    if (numero/numero==1){
        alert("El numero : ",numero ,"es primo");
    }
}
else {
    alert("Tu numero no es primo")

    

}
*/

/*
i=0
numero = parseInt(prompt("Introduce tu numero favorito"));
const esPrimo = numero =>{
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x=2; x<numero/2 ; x++){
        if (numero % x==0) return false;1
    }
    return true;
    }
    console.log("El numero",numero,esPrimo(numero));
    
*/

numero  = parseInt(prompt('Introduce cuantas fracciones quieres sumar Deben ser multiplos de dos'));
n=0;
numerador=1
for (n=0; n < numero;){
    ValorDePi = -(4/(numerador+2)) + (4/(numerador+4));
    n= n+3;
    numerador= numerador + 4;
    
}
ValorDePi = 4  + ValorDePi;
console.log("El valor de pi es" , ValorDePi);