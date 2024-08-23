let dia_escolhido = prompt("Informe o dia da semana a exibir");
let mensagem = "";

if(dia_escolhido == 1) {
    mensagem = "Domingo"
}
else if (dia_escolhido == 2) {
    mensagem = "Segunda-feira"
}
else if (dia_escolhido == 3) {
    mensagem = "Terça-feira"
}
else if (dia_escolhido == 4) {
    mensagem = "Quarta-feira"
}
else if (dia_escolhido == 5) {
    mensagem = "Quinta-feira"
}
else if (dia_escolhido == 6) {
    mensagem = "Sexta-feira"
}
else if (dia_escolhido == 7) {
    mensagem = "Sábado"
}
else {
    mensagem = "Número Inválido!"
}
alert(mensagem)