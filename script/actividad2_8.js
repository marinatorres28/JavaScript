let boton = document.querySelector(".boton");
//necesitamos que cuando pulse click en el boton, haga una condicion
//y analice la edad para enviar un mensaje de vuelta

//eventos en javascript
boton.addEventListener("click", function () { //cuando hagamos click,mandamos la funcion
    //declaramos las variables segun el id del html 
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;
    //esto nos trae los valores que se han escrito en el formulario
    console.log(nombre);
    console.log(edad);
    let mensaje;
    if (edad <= 12) {
        mensaje = "niñ@";
    }
    else if (edad >= 13 && edad <= 17) {
        mensaje = "adolescente";
    }
    else if (edad >= 18 && edad <= 64) {
        mensaje = "trabajador/a";
    }
    else {
        mensaje = "jubilado/a";
    }
    

    //validacion de datos
    //declaramos la variable msnError, la declaramos vacia
    let msnError="";
    let error=false;
    
    //si edad es menor que 0 o está vacía,aparece el mensaje de error
    if(edad<0 || edad==""){
        msnError="La edad no es correcta, ingresa una edad válida"
        document.querySelector("#edad").value="";
        error=true;

    }
    //si el nombre está vacio,aparece el error
    if(nombre==""){
        msnError+="<br>Ingresa un nombre"
        error=true;
    }
    //mostramos el mensaje de error
    if(error){
        document.querySelector(".mensajeError").innerHTML=""; //borra el mensaje error
        document.querySelector(".mensajeError").innerHTML=`${msnError}`;
    }
    //si no hay error,mostramos el mensaje normal
    else{
        document.querySelector(".mensajeError").innerHTML="";
        document.querySelector(".mensaje").innerHTML = `${nombre} tiene ${edad} 
        años y es ${mensaje}`; //con innerHTML insertamos un mensaje dentro del HTML
    }
}) 

