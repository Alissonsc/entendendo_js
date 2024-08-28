let nome = prompt("Informe seu nome");
let textoMenu = `Informe qual período você estuda:
                M - Matutino
                V - Vespetino
                N - Noturno`;
let turnoInformado = (prompt(textoMenu));
let turnoAtual;

switch (turnoInformado) {
    case "M":
        turnoAtual = "tudo bem? Bom dia!";
        break;
    case "V":
        turnoAtual = "tudo bem? Boa tarde!";
        break;
    case "N":
        turnoAtual = "tudo bem? Boa noite!";
        break;
    default:
        turnoAtual = "Inválido";
        break;
}

alert(`${nome}, ${turnoAtual}`);