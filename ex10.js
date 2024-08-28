let textoMenu = `Escolha qual operação você deseja:
                1 - Soma
                2 - Subtração
                3 - Multiplicação
                4 - Divisão
                5 - Potenciação
                6 - Radiciação`;

let num1 = 0, num2 = 0, total = 0;
let opcao = prompt(textoMenu);

switch (key) {
    case "1":
        num1 = parseFloat(prompt("Digite o primeiro numero: "));
        num2 = parseFloat(prompt("Digeite o segundo número: "))
        alert(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "2":
        num1 = parseFloat(prompt("Digite o primeiro numero: "));
        num2 = parseFloat(prompt("Digeite o segundo número: "))
        alert(`${num1} - ${num2} = ${num1 + num2}`);
        break;
    case "3":
            num1 = parseFloat(prompt("Digite o primeiro numero: "));
            num2 = parseFloat(prompt("Digeite o segundo número: "))
            alert(`${num1} * ${num2} = ${num1 + num2}`);
            break;

    default:
        break;
}