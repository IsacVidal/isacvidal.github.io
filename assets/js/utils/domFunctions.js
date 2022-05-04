// SOLID

// Príncipios de boas práticas de programação.

//S - SRP -  Single responsibility principle
// Principio da responsabildade Única.

//Funções bem escritas, devem ser mantidas simples, curtas e realizando um objetivo.

//quando  precisamos acessar uma função em outro arquivo, é necessário esporta-la.

//CRUD - create read update delete
export function addTask(db, title="") {
    // criando uma nova tarefa
    const task = document.createElement('div');
    //const id = Number(db.length) + 1;
    task.classList.add('task');
    task.setAttribute('id', db.id);

    const taskBody = `
    <div> <input type="checkbox" id="check_${db.id}"/></div>
                <div>
                    <div> <span class="title-task">${
                        //operador ternário. IF de uma linha
                        //condição ? verdadeiro : false
                        title?title:db.title}</span></div>  
                </div>
                <div>Star</div>
    `;

    task.innerHTML = taskBody;
    document.querySelector(".tasks").appendChild(task);

}
export function removeTask() {
    alert("Removendo uma nova tarefa");
}
export function updateTask() {
    alert("Alterando uma nova tarefa");
}
export function getAllTasks(db) {
    db.forEach((item) => {
        addTask(item);
    });
    
}

export function getTaskById() {
    alert("Exibindo uma tarefa");
}



//quando for importar do arquivo domFunctions, o Js não sabe quantas funções estão disponíveis.
//quando eu preciso extrair qualquer recurso, usando a desestruturação. Destructuring
//import {addTask} from './domFunctions.js";