/*Uma classe é uma forma de definir um tipo de dado em uma linguagem orientada a objeto. Ela é formada por dados e comportamentos.

Para definir os dados são utilizados os atributos, e para definir o comportamento são utilizados métodos. Depois que uma classe é definida podem ser criados diferentes objetos que utilizam a classe. */

/*Atributos são as características de um objeto, essas características também são conhecidas como variáveis, utilizando o exemplo dos cães, temos alguns atributos, tais como: cor, peso, altura e nome. */

/*Métodos são as ações que os objetos podem exercer quando solicitados, onde podem interagir e se comunicarem com outros objetos, utilizando o exemplo dos cães, temos alguns exemplos: latir, correr, pular. */

/*classe é a definicao e instancia é a ocorrencia da classe */

/* Instanciar uma classe é criar um novo objeto do mesmo tipo dessa classe. Uma classe somente poderá ser utilizada após ser instanciada. */

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    /*O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe. sintaxe: constructor([argumentos]) { ... } obrigada que seja solicitado nome e a idade sempre que o objeto for instanciado */
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }


    /*declaracao do metodo descrever */
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const kelly = new Pessoa('kelly', 31);
/*kelly.nome = 'Kelly Kilma';
kelly.idade = 31;
kelly.anoDeNascimento = 1991;

const amanda = new Pessoa();
amanda.nome = 'Amanda santos';
amanda.idade = 25;*/

/*podemos usar essas duas formas para imprimir na tela. console log ou atraves do metodo descrever */
console.log(kelly);
/*console.log(amanda);*/

/*kelly.descrever();
amanda.descrever();*/


