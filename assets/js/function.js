/*


//undefined é um tipo de valor que não existe.
//null é um tipo de valor inválido

//função nominal com parâmetro obrigatório

//uma função sem return é uma subrotina.
function escreve(nome, sobrenome){
    const a = sobrenome;
    if (a === undefined) {
        console.log("a é undefined");
        console.log("Valor de a", a, "\n");
        console.log("Valor de sobrenome ", sobrenome, "\n");
    }
    console.log(`${nome} ${sobrenome}`);
}

escreve("Isac");

//função nominal que retorna valor
function soma(a,b){
    return Number(a) + Number(b);
}

const resultado = soma(1,2);

console.log(soma(3,5));

// expressão de função = uma função é atribuída a um contexto por exemplo uma variável.
const exibe = function(x){
    return `Exibindo parâmetro ${x}`;
};

console.log(exibe("chocolate"));

//o javascript evolui a cada ano. Todo ano tem uma nova versão do js.
//2012-15
//Não tinha muita restrição da forma de escrever js.
//"use strict" = forma de escrever o js mais corretamente, mais polido.

//this - este, é uma variável interna para apontar atributos e métodos dentro de um objeto ou cliente.

*/


//---------------------------------------------------------

// this. variável interna do javascript
// this ele tem comportamento diferentes dependendo de onde ele está sendo usado.
// refere-se a um objeto.

//objeto global
let empresa = this; // this é o objeto global window

//quando criamos um objeto, criamos um escopo.
//quando usamos o this dentro de um objeto, o this é o objeto.

const aluno = {
    nome: "Isac",
    matricula: 123,
    executar: function(){
        return `Exibindo de dentro de um método: ${this.nome}`;
    },
};

console.log(aluno.executar());
console.log(aluno.nome);

// em um evento this retorna o elemento que está sofrendo o evento.

//estrito - this é undefined.
console.log("Quem é o this no contexto global", empresa);

//this dentro de uma funçao - também é um objeto global.
//function globalObj(){
//    return this; // também referencia a objeto global.
//}

function globalObj(){
    // "use strict"; // this vira undefined;
    return this; 
}

document.write("<h2>Escrevendo no Body</h2>");
document.write(globalObj());

//globalObj().alert("Avanti Palestra!");

//Arrow Funtion - Função de seta, ela é mais curta, não tem o próprio contexto.
const novaFuncao = (a,b) => {
    console.log("Chamando de dentro de uma arrow function");
    //Interpolação de variáveis é chamar uma variável dentro de uma string; Template String.
    console.log(`Exibindo o valor de ${a}`);
    //Concatenação de variáveis.
    console.log("Exibindo o total de caracteres " + b.length);
};

const funcao3 = (a) => 
    console.log(`Exibindo o total de caracteres de ${a.length}`);  

funcao3("Isac Vidal");

//no arrow function o this não existe!

// spread operator...

const carros = (primeiro, segundo, ...restante) => {
    console.log(`Os carros informados foram: ${primeiro}, ${segundo} - ${restante[5]}. Todos os demais são ${restante.join(", ")}`);   
};

carros(
    "Delrey",
    "Brasilia",
    "Gurgel",
    "Belina",
    "Fusca",
    "Variant",
    "Parati",
    "Monza",
    "Scort"
);

const frutas = ['Guaraná', 'Cupuaçu', 'Açai'];
const todasFrutas = [...frutas,'banana', 'abacaxi'];

//const{password, ...result} = await user.findById(50);
//password
//name, email, id, salary

console.log("Todas as frutas", todasFrutas);


//destructuring assignment
//atribuição por desestruturação

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log("Exibindo o primeiro: ", primeiro);
console.log("Exibindo o resto: ", resto);

const meuArray = [10, 20, 30, 40];
console.log(meuArray, meuArray.join(" - "));

// const [p, s, t, q] = meuArray;
//const [...p, q] = meuArray;
//console.log("Exibindo o quarto elemento: ", q);
const [q, ...p] = meuArray.reverse();
console.log (p.reverse());






