/* 2) Crie uma aplicação para efetuar o cálculo do índice de massa corporal.
Considere os seguintes critérios:
1) Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.
2) Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em
centímetros.
3) Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
4) Após as entradas de dados, atente-se a conversão das informações para dados do tipo
float.
5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por
100).
6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através
da expressão: M = peso (quilos) ÷ altura²
7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas
descritivas utilizando os critérios abaixo:
a) Se M estiver abaixo de 16 : Baixo peso muito grave
b) Se M estiver entre 16 e 16,99: Baixo peso grave
c) Se M estiver entre 17 e 18,49: Baixo peso
d) Se M estiver entre 18,50 e 24,99: Peso normal
e) Se M estiver entre 25 e 29,99: Sobrepeso
f) Se M estiver entre 30 e 34,99: Obesidade grau I
g) Se M estiver entre 35 e 39,99: Obesidade grau II
h) Se M for maior que 40: Obesidade grau III
8) Ao término o sistema deve fornecer a seguinte saída para o usuário:
“<Nome> possui índice de massa corporal igual a <m>, sendo classificado como:
<classificacao>.”
*As informações em vermelho são variáveis e devem ser substituídas pelos seus respectivos
valores calculadas dentro da aplicação.  */

var nome = prompt('Digite o seu nome:');
var altura = prompt('Digite sua altura em cm:');
var peso = prompt('Digite o seu peso:');

altura = parseFloat(altura);
peso = parseFloat(peso);

altura = altura / 100;

imc = peso / Math.pow(altura, 2);

var classificacao = '';

if (imc < 16) {
  classificacao = 'Baixo peso muito grave';
} else if (imc >= 16 && imc <= 16.99) {
  classificacao = 'Baixo peso grave';
} else if (imc >= 17 && imc <= 18.49) {
  classificacao = 'Baixo peso';
} else if (imc >= 18, 50 && imc <= 24.99) {
  classificacao = 'Peso Normal';
} else if (imc >= 25 && imc <= 29.99) {
  classificacao = 'Sobrepeso';
} else if (imc >= 30 && imc <= 34.99) {
  classificacao = 'Obesidade Grau I';
} else if (imc >= 35 && imc <= 39.99) {
  classificacao = 'Obesidade Grau II';
} else {
  classificacao = 'Obesidade Grau III';
}

document.write(nome + 'possui índice de massa corporal igual a' + imc + ', sendo classificado como:' + classificacao + '.');

