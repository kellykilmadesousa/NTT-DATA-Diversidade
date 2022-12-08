/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- 1 -  à vista débito, recebe 10% de desconto;
- 2 -  à vista no dinheiro ou pix, recebe 15% de desconto;
- 3 - Em duas vezes, preço normal de etiqueta sem juros;
- 4 - Acima de 2 vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 100;
const formaPagamento = 1;

if (formaPagamento === 1) {
    console.log(precoProduto - (precoProduto * 0.1));
} else if (formaPagamento === 2) {
    console.log(precoProduto - (precoProduto * 0.15));
} else if (formaPagamento === 3) {
    console.log(precoProduto);
} else (formaPagamento === 4) {
    console.log(precoProduto + (precoProduto * 0.1));
}