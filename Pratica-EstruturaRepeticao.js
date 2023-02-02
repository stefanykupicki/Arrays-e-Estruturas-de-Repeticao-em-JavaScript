// 01 - Crie um programa que, dado um número, imprima sua tabuada.

const number = [7];

for (let i = 1; i <= 10; i++) {
    console.log(number + '' + 'x' + '' + i + '=' + '' + (i * number));
}

/*  02 - Crie um programa que seja capaz de percorrer uma 
lista de numeros e imprimir cada número PAR encontrado */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i] ; 
    if (numero % 2 === 0){
        console.log( numero + ' é par');
    }
}
