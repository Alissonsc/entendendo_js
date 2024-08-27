let textoMenu = `Escolha o Dia da Semana para a festa:
                1- Domingo
                7- Sábado` ;
//Converse a string do campo digitado no prompt para numero inteiro
let diaEscolhido = parseInt(prompt(textoMenu));
let diaNome;

switch (diaEscolhido) {
        case 1:
            diaNome = "Domingo";
            break;
        case 7:
            diaNome = "Sábado";
            break;
        default:
            diaNome = "Dian Inválido";
            break;
}
alert(`O dia escolhido foi: ${diaNome}`);

/*let textoMenu = `Informe sua altura selecioanando uma das opções
                1 - Tenho 1,70 ou mais de altura.
                2 - Tenho 1,60 ou mais de altura.
                3 - Tenho menos de 1,60 de altura.`;
let alturaInformada = parseInt(prompt(textoMenu));
let acessoMontanha;

switch (alturaInformada) {
    case 1:
        acessoMontanha = "Você está liberedo para se divertir na Montanha russa!";
        break;
    case 2:
        let idade = parseFloat(prompt`Q`)
        acessoMontanha = "Caso tenha mais que 18 anos, você pode curtir a Motanha Russa!";
        break;
    case 3:
        acessoMontanha = "Infelizmente você não tem altura suficiente para curtir a Montanha Russa!";
        break;
    default:
        acessoMontanha = "Opção Inválida";
}
alert (`Olá!  ${acessoMontanha}`);*/
