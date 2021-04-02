//Desafio 2: Calculadora de números inteiros
var numero1 = parseInt(prompt("Insira o primeiro número: "))
var numero2 = parseInt(prompt("Insira o segundo número: "))
var operacao = prompt("Digite 1 para fazer a soma, 2 para a subtração, 3 para a multiplicação e 4 para a divisão: ")

if (operacao == 1){
        var resultado = numero1 + numero2
        document.write('<h2>' + numero1 + " + " + numero2 + " = " + resultado + '</h2>')
} else if(operacao == 2){
        var resultado = numero1 - numero2
        document.write('<h2>' + numero1 + " - " + numero2 + " = " + resultado + '</h2>')
} else if(operacao == 3){
        var resultado = numero1 * numero2
        document.write('<h2>' + numero1 + " * " + numero2 + " = " + resultado + '</h2>')
} else if(operacao == 4){
        var resultado = numero1 / numero2
        document.write('<h2>' + numero1 + " / " + numero2 + " = " + resultado + '</h2>')
}else {
        alert("ERRO! Insira um número entre 1 e 4!")
}
//Desafio: Faça um quiz