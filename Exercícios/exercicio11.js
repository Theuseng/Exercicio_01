//Exercício 11
//Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
//cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
//ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.

const prompt = require("prompt-sync")();

console.log("Digite os valores inteiros. O programa será encerrado ao digitar um valor nulo ou negativo.");

while (true) {

    let valor = parseInt(prompt("Digite um valor inteiro (ou '0' para sair): "));

    if (valor <= 0 || isNaN(valor)) {
        console.log("Programa encerrado.");
        break;
    }

    if (valor % 2 === 0) {
        console.log("O valor " + valor + " é PAR.");
    } else {
        console.log("O valor " + valor + " é ÍMPAR.");
    }
}
