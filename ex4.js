let numero1 = parseInt(prompt("Informe o primeiro número:"));
let numero2 = parseInt(prompt("Informe o segundo número:"));
let numero3 = parseInt(prompt("Informe o terceiro número"));
    
let mensagem = "";

if ((numero1 >= numero2) && (numero1 >= numero3)) {
    mensagem = "O primeiro número é maior"
}
else if ((numero2 >= numero1) && (numero2 >= numero3)) {
    mensagem = "O segundo número é maior"
}
else if ((numero3 >= numero1) && (numero3 >= numero2)) {
   mensagem = "O terceiro número é maior"
}

alert(mensagem)