/* Entrada a un pub-> mayor de 18 años */
//*****let edad=Number(prompt("Edad")); //conversion manual de tipo de dato,porque en principio es String
//verificar que edad sea tipo de dato numerico
//console.log(typeof(edad)); //si es string tengo que pasarlo a numerico
//si tiene mas de 18 años,entrar=true
//let entrada=false; //se inicializa en falso para que nadie entre si no se cumple la condicion

//if(edad>=18){
//entrada=true;
//}
//console.log("¿Puede entrar al pub?->" + entrada);

/* Ejemplo de if anidado, donde se declara un animal y luego se va entrando en
diferentes if. hasta llegar al utlimo else...y veremos que pasa */

// let mascota="gato";
// if(mascota=="perro"){
//     console.log("La mascota es perro");
// }else if(mascota=="tortuga"){
//     console.log("La mascota es tortuga");
// }else if(mascota=="canario"){
//     console.log("La mascota es un canario");
// }else{
//     console.log(mascota);
// }

// /* nota: en el ejemplo anterior no se cumple ninguna de las condiciones y va
// directo al else final */

// /* Si Ana tiene dinero y el articulo está en venta, podra irse de compras, si no,
// se queda en casa */

// let dinero=prompt("¿Tienes dinero?");
// let enVenta=prompt("¿Esta en venta?");
// console.log(dinero);

// if (dinero.toUpperCase()=="SI" && enVenta.toUpperCase()=="SI"){
//      console.log("Ana se puede ir de compras");
// } else {
//     console.log("Ana se queda en casa.");
// }

/* Estructura Switch Case */
// console.log("Menu iniciado");
// let letra=prompt("Indica tu opcion: [c]opiar [a]brir [p]egar")
// switch(letra){
//     case "a" : case "A":{
//         console.log("Se abre archivo");
//         break;
//     }
//     case "c" : case "C":{
//         console.log("Se copia el archivo");
//         break;
//     }
//     case "p" : case "P":{
//         console.log("Se pega el archivo");
//         break;
//     }

//     default: console.error("Opción no válida");
// }

/* Actividad propuesta 2.9 */

let horario=""; //salida en html para limpiarlo
let botones=document.querySelectorAll(".boton"); //toma todos los elementos que tienen la clase boton y crea un array
//array.forEach(arrayItem=>{............})

botones.forEach(elemento=>{ //en JS forEach es una funcion que se le aplica a un array para recorrerlo
    elemento.addEventListener("click",function(){
        switch (elemento.value) {
            case "l": {
                horario="Lunes: de 9:00 a 14:00 | 16:00 a 19:00";
                break;
            }
        
            case "m": {
                horario="Martes: de 9:00 a 14:00 | 16:00 a 19:00";
                break;
            }
        
            case "x": {
                horario="Miercoles: de 9:00 a 14:00 | 16:00 a 19:00";
                break;
            }
        
            case "j": {
                horario="Jueves: de 9:00 a 14:00 | 16:00 a 19:00";
                break;
            }
        
            case "v": {
                horario="Viernes: de 9:00 a 14:00 | 16:00 a 19:00";
                break;
            }
        
            case "s": {
                horario="Sábado: de 9:00 a 14:00";
                break;
            }
        
            case "d": {
                horario="Domingo: CERRADO";
                break;
            }
    }
    document.querySelector(".horario").innerHTML="<h2>Horario</h2>"+horario;
    })
})









