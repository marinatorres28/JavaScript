contador=0;
let resultadoUser=0;
let resultadoMaq=0;
let sumando1=0;
let sumando2=0;

do{
    sumando1=parseInt(Math.random()*100+1);
    sumando2=parseInt(Math.random()*100+1);
    resultadoMaq=sumando1+sumando2;
    resultadoUser=Number(prompt("Indica el resultado de "+sumando1+ " + "+sumando2));

    if(resultadoUser==resultadoMaq){
        contador++;
        alert("Correcto")
    }
}while(resultadoMaq==resultadoUser);

alert("Has fallado")
