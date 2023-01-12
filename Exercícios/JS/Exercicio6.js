/* 1) Baseado no exemplo da aula "Praticando um pouco - Percorrendo e listando itens de
Arrays", implemente a mesma solução, porém utilizando o comando for.

var lista_frutas = Array();
lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';

var y= 0;

while (y < lista_frutas.length) {
  document.write(lista_frutas[y] + '<br />')
  y++;
}

2) Baseado no exemplo da aula "Praticando um pouco - Criando uma tabuada de 1 a 10
(laços encadeados)", implemente a mesma solução, porém utilizando o comando while.

for (var y = 1; y <= 10; y++) {
  for (var x = 1; x <= 10; x++) {
    document.write(y + 'x' + x + '=' + (y * x) + '<br />')
  }
  document.write('<hr />')
}*/

//1)

/*var lista_frutas = Array();
lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';

for (y = 0; y < lista_frutas.length; y++) {
  document.write(lista_frutas[y]); 
} */

//2)

var y = 1;
var x = 1;

while (y <= 10) {
  x = 1;
  while (x <= 10) {
    document.write(y + 'x' + x + '=' + (y * x) + '<br />')
    x++;
  }
  document.write('<hr />')
  y++;
}

