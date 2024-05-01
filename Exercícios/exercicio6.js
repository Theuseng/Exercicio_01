//Exercício 06
//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

let ladoA = parseInt(prompt("Digite o valor do lado A do triângulo: "));
let ladoB = parseInt(prompt("Digite o valor do lado B do triângulo: "));
let ladoC = parseInt(prompt("Digite o valor do lado C do triângulo: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    console.log("Os lados fornecidos formam um triângulo.");

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("É um triângulo equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("É um triângulo isósceles.");
    } else {
        console.log("É um triângulo escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}
