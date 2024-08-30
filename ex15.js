/*15. O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia 
da tabelinha. Você foi contratado para desenvolver o programa que monta a tabela de preços 
de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário, conforme o 
exemplo abaixo:
Preço do pão: R$ 0,25 unid. 
 1 = R$ 0,25
 2 = R$ 0,50 
...
50 = R$ 12,50 */
let valor = parseFloat(prompt("Informe o valor dos pães"));
let taboada = "";
for (let index = 1; index <= 50; index++) {
    taboada += `${index} pães = R$${(valor * index).toFixed(2)} <br>`
}
document.write (taboada);