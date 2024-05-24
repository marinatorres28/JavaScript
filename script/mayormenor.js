//creamos la variable boton,y la identificamos con el boton del html segun la clase .boton
let boton = document.querySelector(".boton");

//cuando se haga click en el boton, se desarrolla todo el bloque
boton.addEventListener("click", function () {
    //declaramos todas las variables de nombre y edad cogiendolas por el id del html
    let n1 = document.querySelector("#nombre1");
    let e1 = document.querySelector("#edad1");
    let n2 = document.querySelector("#nombre2");
    let e2 = document.querySelector("#edad2");
    let n3 = document.querySelector("#nombre3");
    let e3 = document.querySelector("#edad3");

    //mE -> mensaje error mC-> mensaje correcto (para no tener que escribir toda la linea de document)
    let mE = document.querySelector(".mensajeError");
    let mC = document.querySelector(".mensaje")

    //declaramos la variable mensaje error vacía
    let msnError = "";
    let error = false;


    //si el valor de nombre 1 (o nombre 2 o 3) está vacio, error=true
    if (n1.value == "" || n2.value == "" || n3.value == "") {
        msnError = "El campo nombre es obligatorio"
        //el error es true porque ha encontrado al menos una vacia
        error = true;
    }

    //si el valor de edad 1 (o edad 2 o 3) es menor que 0 o esta vacio,salta el mensaje de error, y error es true
    if (e1.value < 0 || e1.value == "" || e2.value < 0 || e2.value == "" || e3.value < 0 || e3.value == "") {
        msnError += "<br>El campo edad es obligatorio"
        error = true;
    }

    //si errror = true,borramos los datos, si es false, mandamos a msnError,donde saltará el mensaje 
    if (error) {
        mC.innerHTML = "";
        mE.innerHTML = msnError;
    }
    //si error es falso
    else {
        mE.innerHTML = "";
        if (+e1.value > +e2.value && +e2.value > +e3.value) {
            mC.innerHTML = `${n1.value} es mayor que ${n2.value} y ${n3.value} es el menor`
        }
        else if (+e1.value > +e3.value && +e3.value > +e2.value) {
            mC.innerHTML = `${n1.value} es mayor que ${n3.value} y ${n2.value} es el menor`
        }
        else if (+e3.value > +e2.value && +e2.value > +e1.value) {
            mC.innerHTML = `${n3.value} es mayor que ${n2.value} y ${n1.value} es el menor`
        }
        else if(+e2.value > +e1.value && +e1.value > +e3.value){
            mC.innerHTML = `${n2.value} es mayor que ${n1.value} y ${n3.value} es el menor`
        }
        else if(+e2.value > +e3.value && +e3.value > +e1.value){
            mC.innerHTML = `${n2.value} es mayor que ${n3.value} y ${n1.value} es el menor`
        }
        else if(+e3.value > +e1.value && +e1.value > +e2.value){
            mC.innerHTML = `${n3.value} es mayor que ${n1.value} y ${n2.value} es el menor`
        }
        
        
        else if(e1.value==e2.value && +e1.value==+e3.value){
            mC.innerHTML = `${n1.value} tiene la misma edad que ${n2.value} y ${n3.value} es el menor`
        }
        else if(+e2.value == +e3.value && +e2.value > e1.value){
            mC.innerHTML = `${n2.value} tiene la misma edad que ${n3.value} y ${n1º.value} es el menor`
        }
        else if(+e3.value == +e1.value && +e3.value > e2.value){
            mC.innerHTML = `${n3.value} tiene la misma edad que ${n1.value} y ${n2.value} es el menor`
        }

        //para validar que los 3 tienen la misma edad
        else if(+e3.value==+e1.value && +e3.value== +e2.value){
            mC.innerHTML = `${n1.value} , ${n2.value} y ${n3.value}tienen la misma edad`
        }
    }
})   