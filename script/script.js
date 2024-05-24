/**
 * Tipos de variables
 * JavaScript no te obliga a definir que tipo de variable estas trabajando
 * 
 */
nombre = "Maria Rojas"; //tipo de variable String,se pueden utilizar comlillas simples o dobles
edad = 25; //tipo numerico,no necesita comillas
espaniol = true; //tipo boolean, solo tiene dos estados (true,false)
sexo = null;
//¿como puedes ver los valores sin mostrarlo en el html?
//Se utiliza para ver la ejecucion o valores-> console.log(lo que quieres mostrar)

console.log(nombre);
console.log(edad);
console.log(espaniol);
console.log(sexo);
//operadorde concatenacion + une dos o mas expresiones de salida
console.log("Nombre->" + typeof (nombre) + " !");
console.log("edad->" + typeof (edad));
console.log("espaniol->" + typeof (espaniol));
console.log("sexo->" + typeof (sexo));

direccion = "Calle Campo 81";
//simplificar las cadenas con Backticks con ${}
console.log(`Datos personales ${nombre} Direccion ${direccion}`);
console.log("Datos personales-> Nombre: " + nombre + ", Direccion: " + direccion);
//si la variable es numerica, podemos realizar operaciones matematicas
console.log("El año que viene cumpliras " + (edad + 1) + " años");
console.log(`El año que viene cumpliras ${edad + 1} años`);

console.log('Esta es una frase de Cervantes \'En un lugar de la Mancha \'');
console.log("Esta es una frase de Cervantes \"En un lugar de la mancha\"");
console.log("Esta es una frase de Cervantes 'En un lugar de la mancha' ");
console.log("Esta es una frase de Cervantes \n'En un lugar de la mancha' ");
console.log("Esta es una frase de Cervantes \n\t'En un lugar de la mancha' ");
//simbolos unicode
console.log("El signo de la eternidad armenia es \u{058D}")
console.log("El signo de bitcoin es \u20BF")


//Actividad Propuesta 2.4
console.log("El acceso a la ruta C:\\\\usuario\\ tarda 1'23\",algo considerado \"lento\" en la actualidad.");
console.log('El acceso a la tuta C:\\\\usuario\\ tarda 1\'23",algo considerado "lento" en la actualidad.');

/* Tipos de datos numericos (number) */
altura = 1.80; //tipo de dato numerico es decimal
diametro = 2e-9;
console.log(`Altura-> ${altura}`);
console.log(`Diametro-> ${diametro}`);
resultado = altura / 0;
otroResultado = resultado + 10;
console.log(otroResultado);

//si tienes otros tipos de datos y quieres hacer una operacion matematica-> NaN -> Not a Number

resultado = nombre * 25;
console.log(resultado);
resultado = nombre + " " + edad;
console.log(resultado);

//tipo de datos booleanos (true o false)
//true->1 false->0
valorVerdadero = true;
valorFalso = false;

console.log(`1-¿true?:${Boolean(true)}`);
console.log(`2-¿false?:${Boolean(false)}`);
console.log(`3-1:${Boolean(1)}`);
console.log(`4-0:${Boolean(0)}`);

//si existen datos siempre va a ser true
texto = "un texto ejemplo";
console.log(`5-texto:${Boolean(texto)}`);
textoVacio = "";
console.log(`5-textoVacio:${Boolean(textoVacio)}`);

//conversion de tipos
masAnios = "10"; //tipo de dato string
console.log(edad + masAnios); //2510
console.log(edad + Number + masAnios); //35 -> casting
console.log(String(edad) + masAnios);

console.log(true * 7);
console.log(9 - false);
console.log(edad * masAnios); //la conversion es automatica
console.log(edad ** masAnios); //exponencial
console.log(edad / masAnios);
console.log(edad - masAnios);
console.log(undefined / edad); //NaN
console.log(null * edad); //0

/****************************************************************************** */

parrafo = document.getElementById("parrafo");
//parrafo.innerHTML="Es una prueba de JavaScript en el DOM";
//parrafo.innerHTML= "";

cuadrado = document.querySelector(".cuadrado"); //clase
parrafo = document.querySelector("#parrafo"); //id -> solo el primero cuando existan varios
titulo = document.querySelector("h1"); //etiqueta


titulo.innerHTML = "Práctica de JavaScript";
cuadrado.innerHTML = "A";

document.write("Es una prueba de document.write")

//variables ->
var edad = 58;

let email = "j@gmail.com";
document.write("<p>" + email + "</p>")

/* ambito de bloque */
var mensaje = "Mensaje 1"; //declaramos mensaje
function mostrarMensaje() { //funcion
    mensaje = "<br>Mensaje dentro del bloque";
    document.write(mensaje);
}
mostrarMensaje();
document.write("<br>mensaje fuera->" + mensaje);


document.write("<br>************************")
let mensaje1 = "Mensaje 1"; //declaramos mensaje
function mostrarMensaje1() { //funcion
    let mensaje1 = "<br>Mensaje dentro del bloque";
    document.write(mensaje1);
}
mostrarMensaje1();
document.write("<br>mensaje fuera->" + mensaje1);

/* constanes */
const IVA = 21;
let precio = 50 * ((IVA / 100) + 1);
document.write("<br>El precio final es " + precio);

precio = 105 * ((IVA / 100) + 1);
document.write("<br>El precio final es " + precio);

/* salidas por consola */

console.error("aqui hay un error");
console.info("Es una informacion");
console.warn("Es una notificacion");


/*//salida de mensajes

alert("Es una alerta");

//mensajes de confirmacion (si/no...true/false)
let confirmacion=confirm("¿Quieres salir del programa?");
document.write(`<br>¿El usuario quiere salir?-> ${confirmacion}`)

if(confirmacion){ //condicion
    window.location.replace("https://google.es")
} else{
    alert("Te quedas aqui!")
}

//mensaje de entrada de datos

nombre=prompt("Escribe tu nombre") //para introducir un nuevo nombre 
document.write(`<br>El nuevo nombre es-> ${nombre}`)
*/

/* Actividad propuesta 2.5 */

/*
nombre=prompt("Indica tu nombre");
let confirmacion=confirm("¿Quieres salir?");
alert(confirmacion);
console.log('%c FIN DEL PROGRAMA','font-weight: bold;color:blue;text-decoration:underline');
*/

//Operadores
//1. Asignacion
let a = 5;
let b = a;
console.log("El valor de b es " + b);
//foma simplificada
a = a + b; //a=5+5
console.log("El valor del primer a es " + a); //el resultado es 10
a += b; //el valor de a se suma otra vez su valor + el valor de b
console.log("El valor del segundo a es " + a); //el resultado es 15

//modulo (resto)
let c = a % b; //modulo=0 porque a=15 b=5 15/5=3 con resto 0
console.log("El valor de c es " + c);

//exponentes
let d = b ** 4;
console.log("El valor de d es " + d);

//operadores de comparacion -> solo dan como resultado true o false
//igual
let respuesta = a == b; //false
console.log(respuesta);

//distinto
respuesta = a != b; //true
console.log(respuesta);


let e = "5"; //si es entre comillas es String
respuesta = b == e; //da true porque los dos valen 5 independientemente de su tipo
console.log(respuesta);

//igualdad estricta
respuesta = b === e;
console.log(respuesta);
//en el caso de igualdad estricta resulta falso porque b es numerico y e es string

//desigualda estricta
respuesta = b !== e; //b no es igual que e en valor o en tipo
console.log(respuesta); //true

//mayor | menor | mayor o igual | menor o igual
respuesta = a > b; //true
respuesta = c < b; //true
respuesta = b >= e; //compara sus valores (true)
console.log(respuesta);

++a; //ahora a vale 16 -> a=a+1
console.log("Ahora a vale -> " + a);
a--;
console.log("Ahora a vale -> " + a);
a -= 3;
console.log("Ahora a vale -> " + a);


//operadores lógicos
console.log("Operaciones con AND &");
console.log(`1.-> ${true && true}`);
console.log(`2.-> ${true && false}`);
console.log(`3.-> ${false && true}`);
console.log(`4.-> ${false && false}`);
//evaluamos condiciones
console.log(`5.-> ${4 > 5 && 3 > 5}`);
console.log(`6.-> ${4 <= 5 && 3 <= 5}`);

console.log("Operadores con OR ||");
console.log(`7.-> ${true || true}`);
console.log(`8.-> ${true || false}`);
console.log(`9.-> ${false || true}`);
console.log(`10.-> ${false || false}`);

console.log("Operaciones con NOT !");
console.log(`11.-> ${!true}`);
console.log(`12.-> ${!false}`);

//ejemplo practico
let edadNueva = 18;
let matriculado = true;
resultado = edadNueva && matriculado; //true
console.log(resultado);

//operador ternario
resultado = a > b ? "A es mayor que B" : "B es mayor que A";
console.log(resultado);

//ejercicio: solicita por promt la edad e indica por un alert si es mayor
//de edad o menor de edad
/*edadEjercio=prompt("Indica tu edad");
resultadoEdad=edadEjercio>=18?"Es mayor de edad":"Es menor de edad";
alert(resultadoEdad);
*/

//condicionales if-else
let local = 2;
let visitante = 1;
console.log("Inicio");
if (local == visitante) {
    console.log("¡Hay empate!");
}
else {
    console.log("¡No hay empate!");
}
console.log("Fin");

//condicionales if-else
if (local == visitante) {
    console.log("¡Hay empate!");
} 
else if(local>visitante){
    console.log("Gana equipo local.");
}
else{
    console.log("Gana equipo visitante.");
}

//para insertar directamente imagenes en js
let imagen=document.querySelector("#imagen");
imagen.src="../img/gato-aseandose.jpg";











