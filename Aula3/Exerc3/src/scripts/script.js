//Número aleatório 
var numero = parseInt(Math.floor(Math.random() * (20 - 0 + 1) + 0)) //Gera um número inteiro aleatório
alert(numero)
var tentativas = 3

while (tentativas > 0) {
    var palpite = parseInt(prompt("Insira um número entre 0 e 10: "))
    if(numero == palpite) {
        alert("Acertou!!")
        break;
    } else if(palpite > numero){
        alert("O número é menor que o seu palpite!")
        tentativas = tentativas - 1;
    } else if(palpite < numero){
        alert("O número é maior que o seu palpite!")
        tentativas = tentativas - 1;
    } else if(palpite > 20){

    }
}

if(palpite != numero){
    alert("Suas tentativas acabaram. O número era " + numero)
}

//Desafio: gerar um número entre 0 e 20