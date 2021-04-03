document.querySelector("#btnLimpar").disabled = true

function converter(opcao){
    var input = parseFloat(document.querySelector("#valor").value)
    var divResultado = document.querySelector('#resultado')
    const dolar = 5.71
    const euro = 6.71
    const libra = 7.89
    const bitcoin = 338141
    var result
    var simbolo
    switch(opcao){
        case 'dolar':
            var result = input / dolar 
            result = result.toFixed(2)
            simbolo = "$"
            break;
        case 'euro':
            var result = input / euro
            result = result.toFixed(2)
            simbolo = "€"
            break;
        case 'libra':
            var result = input / libra
            result = result.toFixed(2)
            simbolo = "£"
            break;
        case 'bitcoin':
            var result = input  / bitcoin
            simbolo = "₿"
            break;
    }
    if(input && input > 0){
        divResultado.style.display = "block"
        divResultado.innerHTML = "<p>Valor inserido: R$" + input.toFixed(2) + "</p>" 
        divResultado.innerHTML += "<p>Valor da conversão: " + simbolo + result + "</p>"   
    } if(input <= 0) {
        alert("Erro! Insira um valor acima de zero!")
    }
    document.querySelector("#btnLimpar").disabled = false
}

function limpar() {
    var divResultado = document.querySelector('#resultado')
    document.querySelector("#valor").value = ""
    document.querySelector("#valor").focus()
    divResultado.style.display = "none"
    document.querySelector("#btnLimpar").disabled = true
}
