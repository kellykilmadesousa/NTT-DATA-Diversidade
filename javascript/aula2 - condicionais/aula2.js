/*
boolean
const camisetaAzul = true;
const camisetaRoxo = false;*/

/*isnumeropar ou ehnumeropar = usado geralmmente para variavel booleana  */

const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0; /* % traz o resto da divisão */
console.log(numeroPar);

/*sabemos que se o resto for 0 o numero é par, se for maior que zero é impar */
/*== ignora o tipo da variavel
=== não faz a conversão das variaveis, ou seja, n vai comparar carro com fruta por exemplo, então utilizamos essa igualdade */

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}

/*if (!numeroPar){  /*a exclamação é uma negação  
    console.log('Impar');
*/

/*posso ter quantos else if for necessário antes do else */


