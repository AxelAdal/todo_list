// CREAR UNA NUEVA TAREA
// Esta es una funcion para agregar otro elemento en una lista

/*Una referencia al dom el query*/
    /*el modal por ser classe lleva un puto antes*/
    /*
    El classList.add va agregar una clase a la marca que usamos y entre
    parentesis va el nombre de la clase cualquiera, en este caso activar 
    */

function modal(){
    document.querySelector(".modal").classList.add("activar");
}

let boton = document.querySelector("#btn-todo");
boton.addEventListener("click", modal);

function cerra_ventana () {
    document.querySelector(".modal").classList.remove("activar");
}

/*
Siempre agragar el perro punto antes del nombre 
de una variable asi como .cerrar
*/

let btn_cerrar = document.querySelector(".cerrar")
btn_cerrar.addEventListener("click", cerra_ventana)