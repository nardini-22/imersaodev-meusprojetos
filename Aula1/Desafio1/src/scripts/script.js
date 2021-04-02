//Transforma dólar em real
var dolar = parseFloat(prompt("Insira o valor, em reais, que você deseja converter em doláres: "))
alert("Valor em dólar inserido: " + dolar)

var real = dolar * 5.52
alert("Valor em real R$" + real.toFixed(2)) //to.Fixed() coloca x casas decimais