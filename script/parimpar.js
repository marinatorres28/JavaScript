let boton = document.querySelector(".boton");

//cuando se haga click en el boton, se hara una condicion
boton.addEventListener("click", function () {
    let num = document.querySelector("#numero").value
    if (num == "" || num == 0) {
        document.querySelector(".mensajeError").innerHTML = "Debe ingresar un numero para poder indicar si es par o impar."
    }
    else {
        if (num % 2 == 0) {
            document.querySelector(".mensajeError").innerHTML = ""
            document.querySelector(".mensaje").innerHTML = `El número ${num} es PAR.`
        }
        else {
            document.querySelector(".mensajeError").innerHTML = ""
            document.querySelector(".mensaje").innerHTML = `El número ${num} es IMPAR.`
        }
    }

})
