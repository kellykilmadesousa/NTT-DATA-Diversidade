/*Funções são um pequeno trecho de código que podemos invocar quando desejado */

function sayMyName(name){ /*aqui temos a function, o nome da funcao e os parenteses sao os paranmetros da funcao */
    console.log('Your name is ' + name); 
} /*criando a funcao */

sayMyName('Kelly'); /*executando a mesma funcao sem precisar repetir o console varias vezes */
sayMyName('Amanda');

/*em outras linguagens as funcoes que não devolvem (return) nada são chamadas de procedimento, pois só executa o que foi informado no console */

function quadrado(valor){
    return valor * valor;
}

const quadroDeDez = quadrado(10);
console.log(quadroDeDez);

/*se quisermos, podemos fazer o calculo de percentual de juros onde utilizando uma funcao para referenciar os valores. Criando o nome da funcao e seus paramentros, adicionando ou não o return (se quisermos o retorno) */

function incremenatarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incremenatarJuros(100, 10));
console.log(incremenatarJuros(100, 15));
console.log(incremenatarJuros(100, 20));
