import { item_component } from "./item_component.js";

function imprimir_todos (){
    
// Función para imprimir la lista de tareas
let caja_de_todos = document.querySelector(".todo_list");

    data_todo_list.forEach((element, indice) => {

        let todo = document.createElement("div");

        todo.innerHTML = item_component(indice);

        caja_de_todos.appendChild(todo)
        
    });
}

export {imprimir_todos};