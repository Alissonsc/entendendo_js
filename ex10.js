let textoMenu = `Escolha qual operação você deseja:
                1 - Soma
                2 - Subtração
                3 - Multiplicação
                4 - Divisão
                5 - Potenciação
                6 - Radiciação`;

let num1 = 0, num2 = 0, total = 0;
let opcao = prompt(textoMenu);

switch (opcao) {
    case "1":
        num1 = parseFloat(prompt("Digite o primeiro numero: "));
        num2 = parseFloat(prompt("Digeite o segundo número: "));
        alert(`${num1} + ${num2} = ${num1 + num2}`);
        break;

    case "2":
        num1 = parseFloat(prompt("Digite o primeiro numero: "));
        num2 = parseFloat(prompt("Digeite o segundo número: "));
        alert(`${num1} - ${num2} = ${num1 - num2}`);
        break;

    case "3":
        num1 = parseFloat(prompt("Digite o primeiro numero: "));
        num2 = parseFloat(prompt("Digeite o segundo número: "));
        alert(`${num1} * ${num2} = ${num1 * num2}`);
        break;

    case "4":
        num1 = parseFloat(prompt("Digite o primeiro numero: "));
        num2 = parseFloat(prompt("Digeite o segundo número: "));
        if (num2 === 0){
            alert("Operação Inválida!");
        } else {
                total = num1 / num2;
                alert(`${num1} / ${num2} = ${total.toFixed(2)}`);
            }
            break;

    case "5":
        num1 = parseFloat(prompt("Digite o primeiro numero: "));
        num2 = parseFloat(prompt("Digeite o segundo número: "));
        alert(`${num1} exp ${num2} = ${num1 ** num2}`);
        break;

    case "6":
        num1 = parseFloat(prompt("Digite o primeiro numero: "));
        num2 = parseFloat(prompt("Digeite o segundo número: "));
        let operacao = ""
        if (num2 == 2) {
            operacao = "quadrada";
        } else if (num2 == 3) {
            operacao = "cúbica";
        } else {
            operacao = num2.toString();
        }
        alert(`A raiz ${operacao} de ${num1} = ${num1 ** (1 / num2)}`);
        break;
    default:
        alert (`Operação Inválida`);
        break;
}