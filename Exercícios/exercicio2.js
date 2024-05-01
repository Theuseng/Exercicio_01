//Exercício 02
//Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.

const prompt = require("prompt-sync")();

let eleitores = parseInt(prompt("Digite o número de eleitores: "));
let brancos = parseInt(prompt("Digite o número de votos brancos: "));
let nulos = parseInt(prompt("Digite o número de votos nulos: "));
let validos = parseInt(prompt("Digite o número de votos válidos: "));

let percentualBrancos = (brancos / eleitores) * 100;
let percentualNulos = (nulos / eleitores) * 100;
let percentualValidos = (validos / eleitores) * 100;

console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
