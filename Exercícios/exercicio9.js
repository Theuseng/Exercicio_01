//Exercício 09
//Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:

const prompt = require("prompt-sync")();

let codigoOrigem = parseInt(prompt("Digite o código de origem do produto: "));

let regiao;
if (codigoOrigem === 1) {
    regiao = "Sul";
} else if (codigoOrigem === 2) {
    regiao = "Norte";
} else if (codigoOrigem === 3) {
    regiao = "Leste";
} else if (codigoOrigem === 4) {
    regiao = "Oeste";
} else if (codigoOrigem >= 5 && codigoOrigem <= 6) {
    regiao = "Nordeste";
} else if (codigoOrigem >= 7 && codigoOrigem <= 9) {
    regiao = "Sudeste";
} else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
    regiao = "Centro-Oeste";
} else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
    regiao = "Nordeste";
} else {
    regiao = "Produto importado";
}

console.log("A região do produto é: " + regiao);
