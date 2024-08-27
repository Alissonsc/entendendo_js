/*faça um algoritimo que pergunte o nume do usuario, o quanto ganha por hora e
numero de horas trabalhadas no mes, calcule o resultado e mostre o nome e o
total de renda recebida no mês.*/

let nome = prompt("Informe seu nome");
let ganho_hora = parseFloat(prompt("Informe o quanto ganha por hora: "));
let hora_mes = parseFloat(prompt("Informe quantas horas trabalha por mês: "));
let total_recebido = 0;

let mensagem = "";

 total_recebido = (ganho_hora * hora_mes);

 mensagem =  ` ${nome} tem a renda mensal de R$ ${total_recebido.toFixed(2)} `;

alert(mensagem);