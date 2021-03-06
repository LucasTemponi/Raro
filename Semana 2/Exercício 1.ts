/*Exercícios de manipulação de arrays em javascript
O propósito dos exercícios abaixo é que você pratique os conhecimentos adquiridos na aula sobre os métodos de manipulação de arrays. Pede-se que você faça ao máximo o uso dos métodos do protótipo do array, ou seja, **não vale utilizar os iteradores `for`, `while` e `do`**.
1. Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer. Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string?*/

const ingredientes = [
  '2 hambúrgueres',
  'alface',
  'queijo',
  'molho especial',
  'cebola',
  'picles',
  'pão com gergelim'
];

const fazUmBigMac = (ingrediente:string[]):string=>{
    let bigMac = ingrediente.reduce((bigMac,valorAtual)=>bigMac+", "+valorAtual)
    return bigMac
}

console.log(`Solução exercício 1:\n${fazUmBigMac(ingredientes)}`);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//2. A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos do array para adicionar os meses faltantes.


const meses = [
  'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];

meses.splice(1,1,'fev')
meses.splice(4,0,'mai')
meses.splice(7,0,'ago')
meses.splice(10,0,'nov')

console.log(`Solução exercício 2:\n${meses}`)

// como adicionar os meses de "fev", "mai", "ago", "nov" nas posições corretas?

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//3. Implementar o método de `pick` que receba um parâmetro do tipo array de objetos, e outro parâmetro do tipo array de strings. Este método deverá retornar todos os itens do array original, porém, mantendo somente os atributos com os nomes passados no segundo atributo.
// Importante: o array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

type registro = {'nome': string,'nota':number,'bolsista':boolean}

const alunos = [
    {nome:'Luciana', nota:6.5,bolsista:false},
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
    { nome:'Lucas', nota: 6.5, bolsista: false},
    { nome:'Alguem', nota:7.3, bolsista:true},
];

const pick = <T extends Record<string, unknown>>(record: T[],... args: (keyof T)[]): Record<string, unknown>[] => {
    
    let requisicao = [] as T[]
   
    record.forEach(aluno=>{
        let temp = {} as T
        args.map(atributo=>{
            temp[atributo] = aluno[atributo];             
            })
           requisicao.push(temp)
        })
    return requisicao
}

console.log('Solução exerício 3:\n')
console.log(pick(alunos, 'nome', 'nota'))
console.log('Array original')
console.log(alunos)
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

const orderBy = <T extends Record<string, any >>(record: T[],...args: (keyof T)[]): Record<string, unknown>[] => {
  let i = alunos.slice(0) as unknown as T[]
  let temp = pick(i,...args) as T[]
  args.reverse().forEach((atributo)=>{
     temp.sort((a,b)=>
      typeof a[atributo]==="string" ? a[atributo].localeCompare(b[atributo]):a[atributo] - b[atributo])
  })
  return temp
}

console.log('Solução exerício 4:\n')
console.log(orderBy(alunos, "nota",'nome'))

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
  const fila = [];

  const adicionar = (elemento) => {
    fila.push(elemento);
    // aqui, você deve utilizar o método correto para adicionar um novo elemento à variável de fila.
  };

  const remover = () => {
    return fila.shift()
    // aqui, você deve utilizar o método correto para remover um novo elemento à variável de fila.
  };

  return { adicionar, remover };
}

function pilha() {
  const pilha = [];

  const adicionar = (elemento) => {
    pilha.push(elemento)
    // aqui, você deve utilizar o método correto para adicionar um novo elemento à variável de pilha.
  };

  const remover = () => {
    return pilha.pop()
    // aqui, você deve utilizar o método correto para remover um novo elemento à variável de pilha.
  };

  return { adicionar, remover };
}

const fila1 = fila();
fila1.adicionar(1);
fila1.adicionar(2);
fila1.adicionar(3);
console.log('Solução exerício 5:\n')
console.log('valor esperado: 1; valor recebido: ', fila1.remover());
console.log('valor esperado: 2; valor recebido: ', fila1.remover());
console.log('valor esperado: 3; valor recebido: ', fila1.remover());


const pilha1 = pilha();
pilha1.adicionar(1);
pilha1.adicionar(2);
pilha1.adicionar(3);

console.log('valor esperado: 3; valor recebido: ', pilha1.remover());
console.log('valor esperado: 2; valor recebido: ', pilha1.remover());
console.log('valor esperado: 1; valor recebido: ', pilha1.remover());

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//6. Dada a lista de usuarios do nosso sistema, manipule o array, para gerar em duas estruturas separadas a coleção de usuários que estão ativos e a coleção de usuários que estão inativos.

const usuarios = [
  { nome: 'Diego', idade: 23, ativo: true },
  { nome: 'Gabriel', idade: 15, ativo: false },
  { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos = [] // ???
const usuariosInativos = [] // ???

usuarios.map(usuario=> usuario.ativo ? usuariosAtivos.push(usuario) : usuariosInativos.push(usuario))
console.log(usuariosAtivos)
console.log(usuariosInativos)