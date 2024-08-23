/*
Informe se o aluno está aprovado,
de recuperação ou reprovado
seguindo os seguintes critérios:

informar 3 notas.
média > 6: aprovado.
média < 4: reprovado.

Obs use o prompt e exiba os resultados em alert.
*/

let aluno = "";
let nota1, nota2, nota3 = 0;
aluno = prompt("Digite o Nome do Aluno");
nota1 = parseFloat(prompt("Digite a nota 1 :"));
nota2 = parseFloat(prompt("Digite a nota 2 :"));
nota3 = parseFloat(prompt("Digite a nota 3 :"));

let media = 0;
media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
    alert(aluno + ", você está aprovado, parabéns!");
} else if (media <=4) {
    alert(aluno + ", você está reprovado, que decepção!")
}

/*let mensagem = `
${nome}, sua média é ${media}, você está aprovado, parabéns!

`;

*/