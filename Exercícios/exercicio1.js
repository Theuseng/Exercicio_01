//Exercício 01
//Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
const prompt = require("prompt-sync")();

let celsius = parseInt(prompt("Qual a temperatura em graus Celsius? "));

const fahrenheit = (celsius * 9/5) + 32;

console.log("Temperatura em Fahrenheit: " + fahrenheit);