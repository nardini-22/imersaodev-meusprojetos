function converter(opcao){
    var input = parseFloat(document.querySelector('#valor').value)
    var divResultado = document.querySelector('#resultado')
    const dolar = 5.71
    const euro = 6.71
    const libra = 7.89
    const bitcoin = 338141
    var result
    switch(opcao){
        case 'dolar':
            var result = input / dolar 
            result = result.toFixed(2)
            break;
        case 'euro':
            var result = input / euro
            result = result.toFixed(2)
            break;
        case 'libra':
            var result = input / libra
            result = result.toFixed(2)
            break;
        case 'bitcoin':
            var result = input  / bitcoin
            break;
    }
    if(input){
        divResultado.innerHTML = "<p>Valor inserido: R$" + input.toFixed(2) + "</p>" 
        divResultado.innerHTML += "<p>Valor da conversão: " + result + "</p>"   
    }
}
