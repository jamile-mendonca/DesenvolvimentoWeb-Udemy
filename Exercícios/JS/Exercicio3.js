/* 3)Crie uma aplicação para efetuar cálculo aritméticos de soma e subtração.
Considere os seguintes critérios:
1) Ao executar o script a aplicação deve solicitar a entrada de um número, seguido de
uma operação de soma ou subtração e posteriormente seguido de um segundo
número.
2) A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema
solicita a operação o usuário deve informar o texto ‘soma’ ou ‘subtração’ (sem as
aspas).
3) Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido
cálculo. Exemplo: calculo(num1, num2, operacao).
4) A função deve executar o cálculo com base na operação informada pelo usuário e na
sequência deve retornar o valor encontrado.
5) Ao término o sistema deve fornecer a seguinte saída para o usuário:
“O resultado é: <resultado>.”
*A informação em vermelho é uma variável e deve ser substituída pelo seu respectivo valor
calculada dentro da aplicação.  */

var numero1 = prompt('Digite o primeiro número:');
var operacao = prompt('Deseja fazer uma soma ou subtração?');
var numero2 = prompt('Digite o segundo número');


function calculo(numero1, numero2, operacao) {
  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);
  var resultado = 0;
  if (operacao == 'soma') {
    resultado = numero1 + numero2;
  } else if (operacao == 'subtração') {
    resultado = numero1 - numero2;
  }
  return resultado;
}

document.write('O resultado é:' + calculo(numero1, numero2, operacao));