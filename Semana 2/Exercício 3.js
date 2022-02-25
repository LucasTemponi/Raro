// # Exercícios: métodos síncronos e assíncronos
// ## 1. As rosas não falam
// ["As rosas não falam"](https://www.letras.mus.br/cartola/44898/), música do compositor Cartola, possui a seguinte estrofe:
// ```
//  Queixo-me às rosas
//  Mas que bobagem
//  As rosas não falam
//  Simplesmente as rosas exalam
//  O perfume que roubam de ti, ai
// ```
// No código abaixo, esta música foi implementada, porém cada verso leva um tempo indefinido (Aleatorio) para ser "cantado" na tela. A consequência disso é que raramente a música será cantada da forma correta.
// // Modifique os métodos de versos, utilizando callbacks, de forma que a música seja reproduzida na **`sequência correta`**. o tipo do callback já está definido em `callbackFn`
var desafio1asRosasNaoFalam = function () {
    var geraIntervaloAleatorio = function () { return Math.floor(Math.random() * 3 * 1000); };
    var queixoMeAsRosas = function (callback) {
        console.log('queixo me');
        setTimeout(function () {
            console.log('Queixo-me às rosas');
            callback();
        }, geraIntervaloAleatorio());
    };
    var masQueBobagem = function (callback) {
        console.log('bobagem');
        setTimeout(function () {
            console.log('Mas que bobagem');
            callback();
        }, geraIntervaloAleatorio());
    };
    var asRosasNaoFalam = function (callback) {
        console.log('rosas');
        setTimeout(function () {
            console.log('As rosas não falam');
            callback();
        }, geraIntervaloAleatorio());
    };
    var simplesmenteAsRosasExalam = function (callback) {
        setTimeout(function () {
            console.log('Simplesmente as rosas exalam');
            callback();
        }, geraIntervaloAleatorio());
        return;
    };
    var oPerfumeQueRoubamDeTi = function () {
        setTimeout(function () {
            console.log('O perfume que roubam de ti, ai');
        }, geraIntervaloAleatorio());
        return;
    };
    queixoMeAsRosas(function () {
        masQueBobagem(function () {
            asRosasNaoFalam(function () {
                simplesmenteAsRosasExalam(function () {
                    oPerfumeQueRoubamDeTi();
                });
            });
        });
    });
};
desafio1asRosasNaoFalam();
// ## 2. relógio e despertador
// Neste post https://pt.stackoverflow.com/a/111149, o usuário do stackoverflow descreve de uma forma bem didática qual a diferença entre dois métodos bem importantes no javascript: O `setTimeout` e o `setInterval`.
// O `setTimeout` é um método que recebe dois parâmetros: o primeiro, uma função de callback, que deverá ser executada após um intervalo, determinado em milissegundos pelo segundo parâmetro. 
// Ex.:
// ```ts
// setTimeout(() => {
//   console.log('vou ser chamado uma vez, após 1 segundo');
// }, 1000);
// ```
// o `setInterval` é um método que funciona de forma bem parecida com o setTimeot, porém, o método de callback será chamado a cada intervalo definido no segundo parâmetro, em  milissegundos.
// Ex.:
// ```ts
// setInterval(() => {
//   console.log('vou ser chamado diversas vezes, a cada 1 segundo');
// }, 1000);
// ```
// Neste desafio, precisamos criar duas funções: A primeira o `despertador`, deverá receber um parâmetro de intervalo em segundos. O despertador deverá "tocar" após o intervalo definido pelo parâmetro. 
// A segunda função, o `relogio`, deverá escrever na tela a hora atual, a cada segundo. O formato da saída deverá ser em horas:minutos:segundos.
// Importante 1: Ambos os métodos recebem o intervalo em segundos, mas os `setInterval` e `setTimeout` trabalham com milissegundos. A conversão de medida será necessária.
// Importante 2: a princípio, o relógio deverá rodar indefinidamente. Para parar a execução dele, você pode apetar um `ctrl + c`, para finalizar a execução do relógio
var despertador = function (intervaloEmSegundos) {
    console.log("Alarme programado para daqui a ".concat(intervaloEmSegundos));
    setTimeout(function () {
        console.log("passaram-se os ".concat(intervaloEmSegundos / 1000, " segundos"));
    }, intervaloEmSegundos);
};
var relogio = function () {
    setInterval(function () {
        var now = new Date();
        console.log("".concat(now.getHours(), ":").concat(now.getMinutes(), ":").concat(now.getSeconds()));
    }, 1000);
};
relogio();
despertador(5000);
//   despertador(10);
//   relogio();
// Example asynchronous function
// function asynchronousRequest(args, callback) {
//   // Throw an error if no arguments are passed
//   if (!args) {
//     return callback(new Error('Whoa! Something went wrong.'))
//   } else {
//     return setTimeout(
//       // Just adding in a random number so it seems like the contrived asynchronous function
//       // returned different data
//       () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
//       500,
//     )
//   }
//}
