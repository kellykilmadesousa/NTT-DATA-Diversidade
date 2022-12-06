/*Faça um programa para calcular o valor de uma viagem.

você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto  médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoCombustivel = 5.79; /*usaremos constante pois é um programa simples, caso contrario usariamos let pois o valor vai alterar com o tempo */
const KmPorLitros = 12; /*consumo Medio Litro */
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / KmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2)); /*to fixed coloca o numero de casas decimais*/


