let nome = prompt("Informe seu Nome");
let altura = parseFloat(prompt("Informe sua Altura"));
let idade = parseInt(prompt("Informe sua Idade"));

if (altura >= 1.70)  {
    mensagem = `${nome} você está autorizado`;
}
else if ((altura >= 1.60) && (idade >= 18)) {
    mensagem = `${nome} você está autorizado`;
}
else  {
    mensagem = `${nome} você não está autorizado`;
}

alert(mensagem);