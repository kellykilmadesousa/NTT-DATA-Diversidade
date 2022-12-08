/*2) O IMC - Indice de massa corporal é um critério da organização Mundial da saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC: 
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- abaixo de 18.5 Abaixo do peso;
- entre 18.5 e 25 peso normal;
- entre 25 e 30 Acima do peso;
- entre 30 e 40 obeso;
- Acima de 40 obesidade grave;*/

/*magic number ex: referenciar o PI  */

const peso = 52;
const altura = 1.62;
const imc = peso /Math.pow(altura,2)      /* pow é uma funcao de math para trazer o calculo  de (altura * altura);*/
console.log(imc);

if (imc < 18.5){
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25){
    console.log('peso normal');
} else if (imc >= 25 && imc < 30){
    console.log('Acima do peso');z
} else if (imc >= 30 && imc < 40){
    console.log('obeso');
} else {
    console.log('obesidade grave');
}