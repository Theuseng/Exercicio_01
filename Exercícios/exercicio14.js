//Exercício 14
//Utilizar somente while do exercício 14 ao 16
//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero;

while (true) {
    numero = parseFloat(prompt("Digite um número decimal (ou '0' para sair): "));
    
    if (numero === 0) {
        break;
    }
    
    soma += numero;
    contador++;
}

let media = soma / contador;

console.log("A média aritmética dos números é: " + media.toFixed(2));
