/*let aluno = "";
let nota1 =0, nota2 =0;
aluno = prompt("Digite o Nome do Aluno");
nota1 = parseFloat(prompt("Digite a nota 1 :"));
nota2 = parseFloat(prompt("Digite a nota 2 :"));

let media = 0;
media = (nota1 + nota2) / 2;

let mensagem = "";
if (media >=7) {
    mensagem (aluno + "você está Aprovado");
}
alert(mensagem)*/

//entrada de dados sempre sera processada por prompt
let nome = prompt("Informe seu nome");
let n1 = parseFloat(prompt("Informe a Nota 1: "));
let n2 = parseFloat(prompt("Informe a Nota 2: "));
let n3 = parseFloat(prompt("Informe a Nota 3: "));
const quantidadeNotas = 3;

//processar
let media = (n1 + n2 + n3) / quantidadeNotas;
let mensagem = "";

//comparar
if (media >=7) {
    mensagem = "O Aluno está Aprovado!";
}
else if (media >=5) {
    mensagem = "O Aluno está de Recuperação!";
} else {
    mensagem = "O Aluno está Reprovado!";
}
alert(nome + mensagem);


//alert( nome + ', ' + mensagem)