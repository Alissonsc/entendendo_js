let nomeproduto1 = prompt("Informe o nome do primeiro produto");
let valorproduto1 = parseFloat(prompt("Informe o valor do primeiro produto"));
let nomeproduto2 = prompt("Informe o nome do primeiro produto");
let valorproduto2 = parseFloat(prompt("Informe o valor do primeiro produto"));
let nomeproduto3 = prompt("Informe o nome do primeiro produto");
let valorproduto3 = parseFloat(prompt("Informe o valor do primeiro produto"));
let menorproduto, menorvalor;

let mensagem = "";

if ((valorproduto1 < valorproduto2) && (valorproduto1 < valorproduto3)) {
    menorproduto = nomeproduto1
    menorvalor = valorproduto1
}
else if ((valorproduto2 < valorproduto1) && (valorproduto2 < valorproduto3)) {
    menorproduto = nomeproduto2
    menorvalor = valorproduto2
}
else if ((valorproduto3 < valorproduto1) && (valorproduto3 < valorproduto2)) {
    menorproduto = nomeproduto3
    menorvalor = valorproduto3
}

mensagem = (`O produto ${menorproduto} é o mais em conta com o valor de R$ ${menorvalor}.`);

alert(mensagem);