/*1) Crie um campo <input type="text"> e aplique os seguintes controles com base nos
eventos abaixo:
• No evento de foco modifique o background do input para amarelo.
• Quando o campo perder o foco, recupere o seu respectivo valor e:
o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo
deve ter seu background alterado para vermelho.
o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background
deve ser alterado para verde.*/

function focus() {
  document.getElementById('bg').style.background = "yellow";
}
function validaBg() {
  var valorBg = document.getElementById('bg').value;

  if (valorBg.length < 3) {
    document.getElementById('bg').style.background = "red";
  } else {
    document.getElementById('bg').style.background = "green";
  }
}

document.getElementById('bg').addEventListener("focus", focus);





