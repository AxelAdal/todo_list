console.log("jola");

function completar_tarea () {

    let checks = document.querySelectorAll(".ico");


    checks.forEach(function(check, indice){
        check.addEventListener("click", function (){
   
            let tarea = document.querySelector(".tarea"+indice);
            tarea.classList.add("completar")

        
        });
    });
}