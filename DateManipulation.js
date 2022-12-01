function dateToYYYYMM(fcData) {
    fcData = fcData.split('/').reverse().join('-');
    fcData = fcData.replace(/-/g, '');
    return fcData.substring(0, (fcData.length - 2));
} 

function SomarMeses(data, meses) { // retornar uma nova data com a quantidade de meses inserido
    data = data.split('/');

    var dia = parseInt(data[0], 10);
    var mesfuturo = parseInt(data[1], 10) + meses;
    var ano = parseInt(data[2], 10);

    if (mesfuturo > 12) {
        while (mesfuturo > 12) {
            mesfuturo -= 12;
            ano++;
        }
    }

    if (mesfuturo < 10) {
        mesfuturo = '0' + mesfuturo;
    }

    return dia + "/" + mesfuturo + "/" + ano;

}
