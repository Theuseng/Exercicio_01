//Exercício 16
//Utilizar somente while do exercício 14 ao 16
//Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let contador = 0;
let numero = 101;

console.log("Os 50 primeiros números primos maiores que 100 são:");

while (contador < 50) {
    let ehPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        console.log(numero);
        contador++;
    }

    numero += 2;
}
