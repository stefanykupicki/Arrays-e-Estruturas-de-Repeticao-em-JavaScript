// Modelo mais dinamico e generico para add notas sem precisar modificar a estrutura principal do código: 
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

// a cada iteração vai modificar
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(soma);
console.log(media.toFixed(2));
