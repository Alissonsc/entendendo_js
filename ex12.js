let numero = parseInt(
    prompt("Informe um número entre 1 e 999"));

    if(numero<1 || numero >=1000) {
        alert("Operação Inválida");
    } else {

        let centenas = parseInt(numero / 100);
        let txtresultado = "";
        if(centenas > 1){
            txtresultado = ` ${centenas} centenas`;
        } else if (centenas == 1) {
            txtresultado = `${centenas} centena`;
        }
        let dezenas = ((numero % 100) / 10)
        if(dezenas > 1) {
            if(txtresultado !=='') {

            txtresultado = `${txtresultado}, ${dezenas} dezenas`
        } else {
            txtresultado = `${dezenas} dezenas`

        } else if

    }
    