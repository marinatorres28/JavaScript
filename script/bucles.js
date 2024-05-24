// let pases = 0;
// //bucle while, evalua la condicion, y si es true entra en el bucle, si no, finaliza y va a la siguiente linea
// while (pases < 10) { //siempre va a ser booleano (true o false)
//     console.log("Numero de pases-> " + pases);
//     pases++;
// }

// /* Mostrar la tabla de multiplicar */

// let x=1;
// let y=1;
// while(x<10){
//     while(y<10){
//         console.log(x+"x"+y+"="+(x*y));
//         y++;
//     }
//     x++; //se incrementa x
//     y=1; //se inicializa y para que que en la proxima vuelta comience en 1
// }

/* actividad propuesta 2.10 */

// let letra = "";

// while (letra != "s") {
//     letra = prompt("Indica una letra");

//     if (letra == "s") {
//         console.log("Has acertado.");
//     }
//     else {
//         console.log("No ha habido suerte.");
//     }
// }

//Random o aleatorio
//Array o cadenas

// let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; 
// //abecedario guarda todas las letras que van con un indice desde el 0=A hasta la 26=Z
// let numeroAleatorio=parseInt(Math.random()*26);
// //parseInt convierte el numero que nos da el math random (decimal) en un numero entero
// console.log(abecedario[numeroAleatorio]);

// let letra="";

// while(letra!=abecedario[numeroAleatorio]){
//     letra=prompt("Indica una letra").toUpperCase();
// }
// alert("¡Adivinaste! Es la letra " + abecedario[numeroAleatorio])

/*******************************************/

// let contador = 0;
// let numero = 1;

// while (contador < 10) {
//     if (numero % 2 == 0) {
//         console.log("Es par.");
//         console.log(contador);
//         contador++;
//     }
//     numero++;
// }

// /* ACTIVIDAD PROPUESTA 2.11 */

// let letra = "";

// do{
//     letra = prompt("Indica una letra");

//     if (letra == "s") {
//         console.log("Has acertado.");
//     }
//     else {
//         console.log("No ha habido suerte.");
//     }
// }
// while (letra != "s") {
// }

/* bucle FOR */
// console.log("*BUCLE FOR*");

// for (let x = 1; x < 10; x++) {
//     for (let y = 1; y < 10; y++) {
//         console.log(x + "x" + y + "=" + (x * y));
//     }
// }

/* Actividad propuesta 2.12 */
//multiplos de 7 desde el 1 hasta el 100

// for(let i=0;i<=100;i+=7){
// console.log("Multiplos de 7-> " + i);
// }

//para mostrar del año 2024 hasta el 2014 de forma decreciente

let dias = document.querySelector("#dias");
let meses = document.querySelector("#meses");
let anios = document.querySelector("#anios")

for (let dia = 1; dia <= 31; dia++) {
    //crear un elemento en el html.--DOM 
    opcion = document.createElement("option"); //diseñando el documento
    opcion.textContent = dia; //lo que se muestra (contenido del texto)
    opcion.value = dia; //valor de dia
    dias.appendChild(opcion)

}

for (let mes = 1; mes <= 12; mes++) {
    opcion = document.createElement("option");
    opcion.textContent = mes;
    opcion.value = mes;
    opcion.classList.add("deplegable"); //para agregar una clase css
    //opcion.classList.remove-> para quitar una clase
    opcion.setAttribute("id", mes); //agregar un atributo
    meses.appendChild(opcion); //crea el elemento hijo

}

for (let anio = 2024; anio >= 2014; anio--) {
    opcion = document.createElement("option");
    opcion.textContent = anio;
    opcion.value = anio;
    anios.appendChild(opcion);

}

/* saltos e interrupcion en bucles */
//break
//muestra la tabla de multiplicar del 9 hasta llegar a 5
const TABLA = 9;
for (let index = 0; index <= 10; index++) {
    console.log(`${TABLA} x ${index}=${TABLA * index}`);
    if (index == 5) {
        break; //rompe el bucle
    }
}

//salto
//muestra los 10 primeros impares que no sean multiplos de 3
let contadorS = 0;
let numeroS = 1;

while (contadorS < 10) {
    if (numeroS % 3 == 0) {
        numeroS++;
        continue; //no ejecuta las siguientes lineas si no que vuelve al while

    }
    if (numeroS % 2 != 0) {
        console.log("Es impar " + numeroS);
        contadorS++;
    }
    numeroS++; //se incrementa si no hace salto (sea par o impar)
}


