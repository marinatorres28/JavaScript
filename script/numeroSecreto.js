let numeroUsuario; //guardará el numero que escriba el usuario
let numeroSecreto=parseInt(Math.random()*100+1); // generamos el numero secreto (el +1 es para que no coja el 0)
let acierto=false; //cambiara a true cuando el usuario acierte

console.log(numeroSecreto);

while(!acierto){ //mientras acierto sea falso

     numeroUsuario=Number(prompt("Indica el número"));
     if (numeroSecreto<numeroUsuario){
        alert("El numero es menor.")
     } 
     else if(numeroSecreto>numeroUsuario){
        alert("El numero es mayor.")
     } 
     else if(numeroSecreto==numeroUsuario){
        alert("¡Acertaste!")
        acierto=true;
     }
     else{
        alert("No has escrito un número.")
     }
}

