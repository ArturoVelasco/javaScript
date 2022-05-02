/*
Un operador realiza alguna operación en uno o varios operados (valor de datos) y vuelve un valor. Por ejemplo 1+1=2
Dentro de los operadores más utilizados en javascript se encuentras :

*/

//Operadores de asignación (=)

numero = 10;
numero1 = 20;
numero2 = 30;

adición = numero1 + numero2;
sustraccion = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
modulo = numero1 % numero2;

console.log("Operador de asignación");
console.log(adición);
console.log(sustraccion);
console.log(multiplicacion);
console.log(division);
console.log(modulo);

/*Operadores de cadena

Las operaciones de cadena nos permiten concatenar cadenas de texto, conces su longitud, comparar cadenas de texto, busca una cadena de texto dentro de otra cadena de texto, etc */

// -toLowerCase
//sintaxis de Lowercase toLowerCase(
let texto1 = "Hola Generation"
let texto2 = texto1.toLowerCase();

console.log(texto2);

// -toUpperCase
//sintaxis de Lowercase toUpperCase(
    let texto3 = "Hola GENERATION"
    let texto4 = texto3.toUpperCase();
    
    console.log(texto4);


// -trim
// Sintaxis de trim()

    let texto5 = "Hola GENERATION"
    let texto6 = texto5.trim();
    
    console.log(texto6);

// - Concat
// Sintaxis de concat es concat()

let saludo1 = "Hola";
let saludo2 = "Generation";
let union = saludo1.concat(saludo2)
console.log(union);

//- Operadores lógicos (&&, ||, !)

numero01 = 12;
numero02 = 24;
numero03 = 36;

afirmacion1 = numero01 > numero02;
afirmacion2 = numero01 > numero02;

//||

num1 = 12;
num2 = 24;

afirm1 = num1 < num2; //true
afirm2 = num1 != num2; //true

console.log(afirm1);
console.log(afirm2);
console.log("El resultado de las dos afirmaciones es :", afirm1 || afirm2);

//not !

/* Siempre devuelve lo contrario del resultado de la expresión
*/

a = 12;
b = 24;

afir4 = a < b;
afir5 = a != b; 
console.log ("El resultado de la afirmación usando not es : ", !afir4);
console.log ("El resultado de la afirmación usando not es : ",!afir5);


// Operdadores de comparación ( ==,  !=, >, <, >=, <=) 
//operadores igual (==)
/*
Sirve para comparar si dos valores son iguales
*/

j = 12;
k = 13;
l = 13;

console.log("El resultado de la comparación de j y k es :", j == k);
console.log("El resultado de la comparación de k y l es :", k == l);
console.log("El resultado de la comparación de j y l es :", j == l);


//operador diferente (!=)


m = 32;
n = 12;
o = 12;
console.log("operador Diferente ( != )")
console.log("El resultado de la comparación de m y n es :", m != n);
console.log("El resultado de la comparación de n y o es :", n != o);
console.log("El resultado de la comparación de m y o es :", m != o);


//Operador de igualdar estricta (===)

/*
Sirve para comparar si dos valores son iguales y de mismo tipo
 */

valora = 23;
valorb = "23";
valorc = 13; 
valord = "texto 23";

console.log("EL valor a y el valor b son iguales ? ", valora === valorb);








