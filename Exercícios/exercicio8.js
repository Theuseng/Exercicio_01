//Exercício 08
//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

let valor1, valor2;

valor1 = parseFloat(prompt("Digite o primeiro valor: "));

do {
    valor2 = parseFloat(prompt("Digite o segundo valor (diferente do primeiro): "));
    if (valor2 === valor1) {
        console.log("Por favor, digite um valor diferente do primeiro.");
    }
} while (valor2 === valor1);

if (valor1 > valor2) {

    let temp = valor1;
    valor1 = valor2;
    valor2 = temp;
}

console.log("Valores em ordem crescente: " + valor1 + ", " + valor2);
