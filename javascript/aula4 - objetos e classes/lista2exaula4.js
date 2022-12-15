/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso /altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    valorImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.valorImc();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso'; z
        } else if (imc >= 30 && imc < 40) {
            return 'obeso';
        } else {
            return 'obesidade grave';
        }
    }

}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.valorImc().toFixed(2));
const kelly = new Pessoa('Kelly', 80, 1.62);
console.log(kelly.classificarImc());
