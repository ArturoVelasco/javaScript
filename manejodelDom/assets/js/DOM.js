/*
!Cuando hablamos de metodos, hablamos de acciones qye se pueden realizar en elementos HTML para poder modificar los valores de los atributos,estilos, etc.
*/

/*
*Metodos para seleccionar elementos

Estos metodos nos van a permitir seleccionar uno o varios elementos o grupos de elementos del DOM. Estos metodos se utilizan en el document, por eso se agrega element antes del get.
*/
/*
//? getElementById(id):Selecciona  un elemento del id.

const titulo = document.getElementsById("TituloBienvenida");
document.write(titulo);

//? getElementsByTagName(tag): Selleciona uno o varios elementos por su etiqueta. 

const etiqueta =  document.getElementsByTagName("h1");
document.write(etiqueta);

//? getElementsByClassName(class): Selecciona uno o varios elementos por su clase

const clae = docuemnt.getElementsByClassName("titulos");
document.write(class);

//? querySelector(selector): Devuelve el primer elemento que coincida con el selector. 

const parrafo = documento.querySelector("p");

//? querySelectorAll(selector): Devuelve todos los elementos que coincidan con el selector. 
const parrafo2 = fdocument.querySelectorAll(".parrafito");
console.log(parrafo2);

*/
/*
Metodos para  definir, obtener y eliminar atribuos
*/

/*
//? SetAttribute(atributo,valor); Define un atributo de un elemento.

const rango = document.querySelector("rango");
rango.setAttribute("type","number");

//? getAttribute(atributo); Obtiene el valor de un atributo de un elemento.

document.write(rango.getAttribute("type"));

//? removeAttribute(atributo): ELimina un atributo de un elemento.
rango.removeAttribute("type");

/*
*Propiedades para modificar textos

Son propiedades que nos permiten modificar el texo de un elemento.
*/

//? InnerHTML
/*
const modificacionParrafo = document.querySelector(".parrafito").innerHTML = "Esto ya no es un HOLA A TODXS,  si no es un TENGO HAMBRE";


document.getElementById("TituloMasTarde").innerHTML = "Ya VAMONOS A COMER";

//? Document write: Nos permite escribir unn texto en la pagina. 

document.write("Hola a todos, esta es la hora actual:" + Date());


/*
*Modificacion de estilos

Gracias al DOM, podemos modificar los estilos de un elemento de forma mucho mas facil.

Sintaxis bsica de la propiedad .style.propiedad = valor;

*/
/*
//!Como anidar vario estilos en una sola linea

document.getElementById("parrafo1").style.color="red";
document.getElementById("parrafo1").style.fontsize="30px";
document.getElementById("parrafo1").style.fontFamily = "Arial";

*/

/*
//? Evento click (<elemento onclick = "funcioneAEjecutar()"></elemento>) Se activa cuando un usuario hace clic en un elemento.


//Creo una constante con la información recuperada al usar el querySelector
const tectoAModificar = document.querySelector(".Header1");
//Creo una contante para cambier el color de eesta informacion recopilada

function cambiarColor(color){
    tectoAModificar.style.color = color;
}


*/

function checkCookies(){
    var texto = ""; // Creo una variable texto vacia

    if (navigator.cookieEnabled == true){ //Reviso si estan habilitadas las cookies
        texto = "Las Cookies estan hablitadas";
    }
    else {
        texto = "Las cookies estan deshabilitadas"
    }
    document.getElementById("cookies").innerHTML = texto; 



}