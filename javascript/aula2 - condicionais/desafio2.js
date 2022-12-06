/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 - o tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitros = 10; /*consumo Medio Litro */
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2)); /*to fixed coloca o numero de casas decimais*/
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2)); /*to fixed coloca o numero de casas decimais*/
}

