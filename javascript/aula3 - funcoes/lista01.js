function escrevaNome(name) {
    console.log('Meu nome é ' + name);
}

escrevaNome('Kelly');
escrevaNome('Carla');

/* exemplo 2*/

function escrevaIdade(idade) {
    console.log('Minha idade é: ' + idade);
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

verificarIdade(11);

/*A função console. log() apenas exibe uma mensagem no console (essa mensagem pode ser o resultado de uma função, variável ou algo estático). O comando return serve para finalizarmos uma função e especificarmos os valores que aquela função retornará (às vezes, não retornamos nenhum valor, de fato). */

/*Exemplo 3 */

/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- 1 -  à vista débito, recebe 10% de desconto;
- 2 -  à vista no dinheiro ou pix, recebe 15% de desconto;
- 3 - Em duas vezes, preço normal de etiqueta sem juros;
- 4 - Acima de 2 vezes, preço normal de etiqueta mais juros de 10%;
*/
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

const precoProduto = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(aplicarDesconto (precoProduto, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto (precoProduto, 15));
} else if (formaPagamento === 3) {
    console.log(precoProduto);
} else {
    console.log(aplicarJuros (precoProduto, 10))
} 

console.log(200 * 0.10);
console.log(10 / 100);