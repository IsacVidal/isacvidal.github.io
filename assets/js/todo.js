//Banco de Dados NoSQL - Orientado a documentos. (MongoDB,Firebase, Cassandra);
import {addTask, getAllTasks} from "./utils/domFunctions.js";


const db = [

    {
        id: 1,
        title: "Concluir APP Conexão Arte",
        steps: [
            {step: "Ajustar textos"},
            {step: "Trocar imagens para imagens públicas"},
            {step: "Publicar no Expo"},
            {step: "Publicar no Expo Store Connect"},
        ],
        done: false,
        dueDate: '2022-05-06',
        reminder: "2022-05-02 10:00",
    },

    {
        id: 2,
        title: "Aula 4 Fiap - Avanade",
        steps: [
            {step: "Atributos Globais"},
            {step: "Estrutura CSS"},
        ],
        done: false,
        dueDate: '2022-05-06',
        reminder: "2022-05-02 10:00",
    },
];

getAllTasks (db);

//console.log(db[0].title);

//######################

const form = document.querySelector("#addNewTask");
const newTask = document.querySelector("#inputTxtNewTask");


form.addEventListener("submit", (e) => {
    //Form faz um favor? Não faz nada...
    e.preventDefault();
});

newTask.addEventListener("keyup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key == "Enter") {
        if (!newTask.value) {
            alert("Digite alguma coisa");
        } else {
            //alert(newTask.value);

            const d = new Date();
            const today = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

            db.push({
                id: Number(db.length) + 1,
                title: newTask.value,
                done:false,
                dueDate: today,
            });

            document.querySelector(".tasks").innerHTML ="";
            getAllTasks (db);

            newTask.value = "";
            console.log(db);
        }
    }
});

//TypeScript permite criar interface, que pode-se determinar o tipo das entradas de dados.
//console.log(frutas.at(-1)); pegar itens do array de trás pra frente.
//estrutura de dados: todo array começa em 0.

//objeto é um conjunto de informações, não armazena muitos dados
//objeto é um conjunto de atributos (propriedades ou valores) e métodos(ações ou funções)
//ex:


//#################################### Exemplos - AULA!

//const dados = {
//    nome: "Isac Vidal",
//    idade: 28,
//    programador: true,
//   acao: () => {
//        console.log("Executando uma ação");
//    },
//};


//console.log(dados.nome);
//console.log("Idade: ", dados.idade);

//dados.acao();

//ex: Array

//const frutas = ["maça","banana", "abacaxi","abacate"];

// frutas[3];
// frutas.length;
// frutas[frutas.length - 1];

