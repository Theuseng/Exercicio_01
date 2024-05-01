//Exercício 10
//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

let numero;

do {
    numero = prompt("Digite um número inteiro: ");
    numero = parseInt(numero);

    if (isNaN(numero)) {
        console.log("Por favor, digite um número inteiro válido.");
    }
} while (isNaN(numero));

for (let i = 0; i < 10; i++) {
    console.log(numero);
}
