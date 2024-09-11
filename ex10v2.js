/*Refatore o Exercicio 10 da calculadora simples e
faça uma exercicio 10v2 onde tera uma funcao para
cada item do menu e o caso do denominador nao ser zero.

soma                somar (num1 , num2)
subtraçao           subtrair (num1 , num2)
multiplicacao       multiplicar(num1 , num2)
divisao             dividir (num, den) e verificarDenominador(num2)
potenciacao         calcularPotencia(base, expoente)
radiaçao            calcularRaiz(numero, raiz)*/

function menuPrincipal() {
    let infoMenu =
    `Escolha uma operação a fazer:
        1-Adição
        2-Subtração
        3-Multiplicação
        4-Divisão
        5-Potenciação
        6-Radiação
        7-Sair`;
    let opcao = prompt(infoMenu);
    return opcao;
}
function lerNumero() {
    let numeros = [];
    numeros.push(parseFloat(prompt("Informe o 1° numero:")));
    numeros.push(parseFloat(prompt("Informe o 2° numero:")))
    return numeros;
}

function adicao() {
    let num = lerNumero();
    let resultado = num[0] + num[2];
    alert(`${num[0]} + ${num[1]} = ${resultado}`)
}
function adicao() {
    let num = lerNumero();
    let resultado = num[0] + num[2];
    alert(`${num[0]} + ${num[1]} = ${resultado}`)
}
function adicao() {
    let num = lerNumero();
    let resultado = num[0] + num[2];
    alert(`${num[0]} + ${num[1]} = ${resultado}`)
}
function adicao() {
    let num = lerNumero();
    let resultado = num[0] + num[2];
    alert(`${num[0]} + ${num[1]} = ${resultado}`)
}
function adicao() {
    let num = lerNumero();
    let resultado = num[0] + num[2];
    alert(`${num[0]} + ${num[1]} = ${resultado}`)
}
function adicao() {
    let num = lerNumero();
    let resultado = num[0] + num[2];
    alert(`${num[0]} + ${num[1]} = ${resultado}`)
}


let option = menuPrincipal();
switch (option) {
    case "1":
            adicao();
        break;
    case "2":
            subtracao();            
        break;
    case "3":
            multiplicacao();
        break;
    case "4":
            divisao();
        break;
    case "5":
            potenciacao();
        break;
    case "6":
            radiacao();
        break;
    case "7":
            sair();
        break;
    default:
        break;
}