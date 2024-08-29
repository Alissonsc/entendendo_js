let textoMenu = `Escolha o tipo de conversão desejada:
                1 - Celsus
                2 - Fahrenheit`;

let temp = 0, celsius = fahrenheit = 0;
let opcao = prompt(textoMenu);

switch (opcao)) {
    case 1:
        celsius = parseInt("Informe quantos graus celssius a converter!");
        fahrenheit = (celsius * 9/5) + 32;
        alert(`${celsius} °C representa ${fahrenheit.toFixed(2)}°F!`);
        
        break;
    case 2:
        fahrenheit = parseInt("Informe quantos graus fahrenheit a converter!");
        celsius = (fahrenheit - 32) * 5 / 9;
        alert(`${fahrenheit}`)
    default:
        break;
}