/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm; 

    constructor(marca, cor,  gastoMedioPorKm) {    /*no js o construtor não é obrigatório */
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm =  gastoMedioPorKm;
    }

    gastoPercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.gastoPercurso(70, 5).toFixed(2));

