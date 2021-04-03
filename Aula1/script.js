document.querySelector("#btnLimpar").disabled = true

function converter() {
    var input = parseFloat(document.querySelector("#valor").value)
    var divResultado = document.querySelector("#resultado")
    var opcao = document.querySelector("#moedas1").value
    var opcao2 = document.querySelector("#moedas2").value
    var result
    var simbolo
    var simbolo2
    var error = false
    switch (opcao) {
        case 'dolar':
            simbolo2 = "$"
            switch (opcao2) {
                case 'euro':
                    result = input * 0.85
                    result = result.toFixed(2)
                    simbolo = "€"
                    break;
                case 'libra':
                    result = input * 0.72
                    result = result.toFixed(2)
                    simbolo = "£"
                    break;
                case 'bitcoin':
                    result = input * 0.000017
                    simbolo = "₿"
                    break;
                case 'real':
                    result = input * 5.71
                    result = result.toFixed(2)
                    simbolo = "R$"
                    break;
                case 'dolar':
                    alert("Erro! Selecione duas opções distintas!")
                    limpar()
                    error = true
                    break
            }
            break;

        case 'euro':
            simbolo2 = "€"
            switch (opcao2) {
                case 'euro':
                    alert("Erro! Selecione duas opções distintas!")
                    limpar()
                    error = true
                    break
                case 'libra':
                    result = input * 0.85
                    result = result.toFixed(2)
                    simbolo = "£"
                    break
                case 'bitcoin':
                    result = input * 0.000020
                    simbolo = "₿"
                    break
                case 'real':
                    result = input * 6.71
                    result = result.toFixed(2)
                    simbolo = "R$"
                    break
                case 'dolar':
                    result = input * 1.18
                    result = result.toFixed(2)
                    simbolo = "$"
                    break
            }
            break;

        case 'libra':
            simbolo2 = "£"
            switch (opcao2) {
                case 'euro':
                    result = input * 1.18
                    result = result.toFixed(2)
                    simbolo = "€"
                    break
                case 'libra':
                    alert("Erro! Selecione duas opções distintas!")
                    limpar()
                    error = true
                    break
                case 'bitcoin':
                    result = input * 0.000023
                    simbolo = "₿"
                    break
                case 'real':
                    result = input * 7.89
                    result = result.toFixed(2)
                    simbolo = "R$"
                    break
                case 'dolar':
                    result = input * 1.38
                    result = result.toFixed(2)
                    simbolo = "$"
                    break
            }
            break;

        case 'bitcoin':
            simbolo2 = "₿"
            switch (opcao2) {
                case 'euro':
                    result = input * 50538.73
                    result = result.toFixed(2)
                    simbolo = "€"
                    break
                case 'libra':
                    result = input * 42971.80
                    simbolo = "£"
                    break
                case 'bitcoin':
                    alert("Erro! Selecione duas opções distintas!")
                    limpar()
                    error = true
                    break
                case 'real':
                    result = input * 339226.44
                    result = result.toFixed(2)
                    simbolo = "R$"
                    break
                case 'dolar':
                    result = input * 59430
                    result = result.toFixed(2)
                    simbolo = "$"
                    break
            }
            break

        case 'real':
            simbolo2 = "R$"
            switch (opcao2) {
                case 'euro':
                    result = input * 0.15
                    result = result.toFixed(2)
                    simbolo = "€"
                    break
                case 'libra':
                    result = input * 0.13
                    simbolo = "£"
                    break
                case 'bitcoin':
                    result = input * 0.0000029
                    result = result.toFixed(2)
                    simbolo = "₿"
                    break
                case 'real':
                    alert("Erro! Selecione duas opções distintas!")
                    limpar()
                    error = true
                    break
                case 'dolar':
                    result = input * 0.18
                    result = result.toFixed(2)
                    simbolo = "$"
                    break
            }
            break
    }
    if (input && input > 0 && error == false) {
        divResultado.style.display = "block"
        divResultado.innerHTML = "<p>Valor inserido: " + simbolo2 + input + "</p>"
        divResultado.innerHTML += "<p>Valor da conversão: " + simbolo + result + "</p>"
    } if (input <= 0) {
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
