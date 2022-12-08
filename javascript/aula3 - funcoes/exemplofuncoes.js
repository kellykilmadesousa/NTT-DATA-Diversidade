/*quebrando a questao para acrescentar funcoes */

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)   /* pow é uma funcao de math para trazer o calculo  de (altura * altura);*/
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'obeso';
    } else {
        return 'obesidade grave';
    }
}

function main() {
    const peso = 102;
    const altura = 1.62;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main(); /*para executar precisamos trazer o nome da funcao e seu paramentro */

/*Nessa releitura foi colocada funcoes para cada trecho do código, ajudando na legibilidade e para futuros usos, como possibilitar a reutilizacao da funcao para outros valores sem precisar mexer em todo código, acrescentando apenas o valor de imc desejado. Outra coisa foi retirar o console.log e substituir por return dentro das condicionais para que seja executado */

main = function () {
    console.log(1);
}

main();
/*aqui podemos atribuir valores a funcoes, pois aqui eles funcionam como objetos e são manipulaveis */

(function main() {
    const peso = 34;
    const altura = 1.62;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})(); /*funcao imediatamente chamada é quando se resolve a funcao dentro dos parenteses e logo apos ele traz o resultado devido ao () ao final. Geralmente é utilizada para executar a funcao apenas uma vez no codigo*/