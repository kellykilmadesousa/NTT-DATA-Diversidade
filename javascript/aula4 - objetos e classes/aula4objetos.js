/*Objetos são coleção dinâmica de valores e funciona através de chaves e valores */
/*objeto são declarados com uso de chaves e dentro temos colecao de chaves e valores   */

const pessoa1 = {
    nome: 'kelly kilma de sousa',
    idade: 31
};

pessoa1.altura = 1.62;

delete pessoa1.nome; /*aqui vai deletar o nome */

console.log(pessoa1);

/*Exemplo 2 com a funcao */

const pessoa2 = {
    nome: 'kelly kilma de sousa',
    idade: 31,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa2.nome = "amanda";
pessoa2.idade = 25;   /*essas informacoes vao subescrever as dentro da funcao */

pessoa2.descrever();

/*exeplo 3 sintaxe mais dinamica */
const atributo = 'idade';
console.log(pessoa2[atributo]);  /*acessando um atributo atraves de uma string fazendo com que haja dinamica no codigo  */


pessoa['nome'] = 'teste'; /*dinamico - texto que pode ser recebido como parametro  */
pessoa2.nome = 'teste'; /*acesso direto - precisa saber o nome do atributo nome  */



























