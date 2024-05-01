//Exercício 15
//Utilizar somente while do exercício 14 ao 16
//Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

const prompt = require("prompt-sync")();

let somaProdutos = 0;
let somaPesos = 0;
let numero, peso;

while (true) {
    numero = parseFloat(prompt("Digite um número decimal (ou '0' para encerrar): "));
    
    if (numero === 0) {
        break;
    }

    peso = parseFloat(prompt("Digite o peso correspondente ao número: "));

    somaProdutos += numero * peso;
    somaPesos += peso;
}

if (somaPesos !== 0) {

    let mediaPonderada = somaProdutos / somaPesos;

    console.log("A média ponderada dos números é: " + mediaPonderada.toFixed(2));
} else {
    console.log("Não é possível calcular a média ponderada pois nenhum peso foi fornecido.");
}
