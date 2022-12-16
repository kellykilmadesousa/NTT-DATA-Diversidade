/*Listas de conteúdos []
a contagem dos arrays começam a partir de zero */

const alunos = ['kelly', 'amanda', 'marina'];

alunos[3] = 'vinicius'; 

alunos.push('Renan'); /*para adicionar novo valor */

console.log(alunos); /*console.log(alunos[numerodesejado]); */

/*podemos usar string e numeros juntos  */

const alunos = ['1', '2', '3'];
console.log(alunos);
console.log(alunos.pop());  /*retira o ultimo item da lista e coloca fora do array */
console.log(alunos);

const alunos = ['1', '2', '3'];
console.log(alunos);
console.log(alunos.shift());  /*retira o primeiro item da lista e coloca fora do array */
console.log(alunos);

/*exemplo lista notas */

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(notas.length); /*mostra o tamanho da lista */
console.log( soma / 5);

for (let i = 0; i < 10; i++) {  /*for é utilizado pra percorrer uma quantidade x de vezes  index = 0; i < array.length; index++*/ 
/* declaracao de controle; estrutura condicional; let i = 1 -> i = i + 1 */
    console.log(i);
    
}