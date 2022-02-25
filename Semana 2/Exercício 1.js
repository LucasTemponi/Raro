/*Exercícios de manipulação de arrays em javascript
O propósito dos exercícios abaixo é que você pratique os conhecimentos adquiridos na aula sobre os métodos de manipulação de arrays. Pede-se que você faça ao máximo o uso dos métodos do protótipo do array, ou seja, **não vale utilizar os iteradores `for`, `while` e `do`**.
1. Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer. Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string?*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ingredientes = [
    '2 hambúrgueres',
    'alface',
    'queijo',
    'molho especial',
    'cebola',
    'picles',
    'pão com gergelim'
];
var fazUmBigMac = function (ingrediente) {
    var bigMac = ingrediente.reduce(function (bigMac, valorAtual) { return bigMac + ", " + valorAtual; });
    return bigMac;
};
console.log("Solu\u00E7\u00E3o exerc\u00EDcio 1:\n".concat(fazUmBigMac(ingredientes)));
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//2. A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos do array para adicionar os meses faltantes.
var meses = [
    'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];
meses.splice(1, 1, 'fev');
meses.splice(4, 0, 'mai');
meses.splice(7, 0, 'ago');
meses.splice(10, 0, 'nov');
console.log("Solu\u00E7\u00E3o exerc\u00EDcio 2:\n".concat(meses));
var alunos = [
    { nome: 'Luciana', nota: 6.5, bolsista: false },
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
    { nome: 'Lucas', nota: 6.5, bolsista: false },
    { nome: 'Alguem', nota: 7.3, bolsista: true },
];
var pick = function (record) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var requisicao = [];
    record.forEach(function (aluno) {
        var temp = {};
        args.map(function (atributo) {
            temp[atributo] = aluno[atributo];
        });
        requisicao.push(temp);
    });
    return requisicao;
};
console.log('Solução exerício 3:\n');
console.log(pick(alunos, 'nome', 'nota'));
console.log('Array original');
console.log(alunos);
// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
//   { nome: 'Ana', nota: 8.7 }
// ]
// forma alternativa de implementação
// pick(alunos, 'nome', 'nome')
// se preferir uma assinatura de typescript, segue:
// export const pick = <T extends Record>(record: T, ...args: (keyof T)[]): Record => {
//   return null;
// };
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//4. ainda com o mesmo exemplo dos alunos, implementar agora um método chamado `orderBy`.
//Esse método deverá receber um parâmetro do tipo array de objetos, e outro parâmetro, um array de strings. O método deverá retornar um novo array,
//com os objetos ordenados de acordo com o critério do array de strings. Importante: O array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:
//const alunos = [/* mesmo objeto de alunos do exercício anteior */];
var orderBy = function (record) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var i = alunos.slice(0);
    var temp = pick.apply(void 0, __spreadArray([i], args, false));
    args.reverse().forEach(function (atributo) {
        temp.sort(function (a, b) {
            return typeof a[atributo] === "string" ? a[atributo].localeCompare(b[atributo]) : a[atributo] - b[atributo];
        });
    });
    return temp;
};
console.log('Solução exerício 4:\n');
console.log(orderBy(alunos, "nota", 'nome'));
// function orderBy(alunos:registro[], atributos:string[]){
//   let temp = alunos.slice(0)
//   temp = pick(temp,atributos)
//   atributos.reverse().forEach((atributo)=>{
//       temp.sort((a,b)=>
//       typeof a[atributo]==="string" ? a[atributo].localeCompare(b[atributo]):a[atributo] - b[atributo])
//   })
//   return temp
// }
// console.log(`Solução exerício 4:\n`)
// console.log(orderBy(alunos,['nota','nome']))
// console.log('Array original')
// console.log(alunos)
// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Ana', nota: 8.7 }
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
// ]
// forma alternativa de implementação
// orderBy(alunos, 'nota', 'nome')
// se preferir uma assinatura de typescript, segue:
// export const orderBy = <T extends Record>(record: T, ...args: (keyof T)[]): Record => {
//   return null;
// };
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//5. Na computação, estudamos algumas estruturas de dados importantes, muitas delas baseadas em arrays. Aqui em destaque, dois tipos diferentes, as `filas` e as `pilhas`. As filas são arrays que estabelecem a política de FIFO (First In, First Out), ou seja, o primeiro elemento adicionado é o primeiro a ser removido. As pilhas, por sua vez, são arrays que estabelecem a política de LIFO (Last In, First Out), ou seja, o último elemento adicionado é o primeiro a ser removido. Abaixo, foram iniciadas estruturas de código que implementam ambas estruturas. Pede-se que, utilizando os métodos de adicionar e remover os itens nos arrays, sejam implementados os movimentos corretos para cada estrutura.
function fila() {
    var fila = [];
    var adicionar = function (elemento) {
        fila.push(elemento);
        // aqui, você deve utilizar o método correto para adicionar um novo elemento à variável de fila.
    };
    var remover = function () {
        return fila.shift();
        // aqui, você deve utilizar o método correto para remover um novo elemento à variável de fila.
    };
    return { adicionar: adicionar, remover: remover };
}
function pilha() {
    var pilha = [];
    var adicionar = function (elemento) {
        pilha.push(elemento);
        // aqui, você deve utilizar o método correto para adicionar um novo elemento à variável de pilha.
    };
    var remover = function () {
        return pilha.pop();
        // aqui, você deve utilizar o método correto para remover um novo elemento à variável de pilha.
    };
    return { adicionar: adicionar, remover: remover };
}
var fila1 = fila();
fila1.adicionar(1);
fila1.adicionar(2);
fila1.adicionar(3);
console.log('Solução exerício 5:\n');
console.log('valor esperado: 1; valor recebido: ', fila1.remover());
console.log('valor esperado: 2; valor recebido: ', fila1.remover());
console.log('valor esperado: 3; valor recebido: ', fila1.remover());
var pilha1 = pilha();
pilha1.adicionar(1);
pilha1.adicionar(2);
pilha1.adicionar(3);
console.log('valor esperado: 3; valor recebido: ', pilha1.remover());
console.log('valor esperado: 2; valor recebido: ', pilha1.remover());
console.log('valor esperado: 1; valor recebido: ', pilha1.remover());
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//6. Dada a lista de usuarios do nosso sistema, manipule o array, para gerar em duas estruturas separadas a coleção de usuários que estão ativos e a coleção de usuários que estão inativos.
var usuarios = [
    { nome: 'Diego', idade: 23, ativo: true },
    { nome: 'Gabriel', idade: 15, ativo: false },
    { nome: 'Lucas', idade: 30, ativo: false },
];
var usuariosAtivos = []; // ???
var usuariosInativos = []; // ???
usuarios.map(function (usuario) { return usuario.ativo ? usuariosAtivos.push(usuario) : usuariosInativos.push(usuario); });
console.log(usuariosAtivos);
console.log(usuariosInativos);
