/* 5) Crie uma aplicação web contendo um campo para entrada de texto (input text) e dois
botões (buttons), sendo um botão com a descrição "Adicionar" e outro com a descrição
"Ordenar", conforme imagem abaixo:
Após criar os elementos de interação com o usuário acima, crie um Array de nome objetos contendo
os seguintes valores:
var objetos = Array('Cadeira', 'Impressora', 'Garfo')
Os próximos passos são:
A) Ao clicar no botão "Adicionar" disparar função que irá:
• Recuperar o valor contido no campo de texto.
• Verificar se o valor está vazio ou preenchido.
o Se vazio, exibir alert com a mensagem "Informe um valor válido".
o Se preenchido:
▪ Verificar se o valor informado já existe dentro do Array objetos.
▪ Se existir, exibir alert com a mensagem "Objeto já foi adicionado".
▪ Se não existir:
• Incluir o valor preenchido no campo dentro do Array.
• Efetuar um console.log do Array para debug (checar se está
funcionado).
• Limpar o valor contido no campo de entrada de texto.
B) Ao clicar no botão "Ordenar" disparar função que irá:
• Ordenar de forma alfabética os valores do Array de objetos.
• Efetuar um console.log do Array para debug (checar se está funcionado). */


var objetos = Array('Cadeira', 'Impressora', 'Garfo');

function adicionar() {
  var valor = document.getElementById('texto').value;
  if (valor != "") {
    if (objetos.indexOf(valor) !== -1) {
      alert('Objeto já foi adicionado');
    } else {
      objetos.push(valor);
      console.log(objetos);

      document.getElementById('texto').value = "";
    }
  } else {
    alert('Informe um valor válido');
  }
}

function ordenar() {
  objetos.sort();
  console.log(objetos);
}
