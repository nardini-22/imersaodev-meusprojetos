var nome = "Arthur"
var idade = 19
alert("Esse ano o " + nome + " tem " + idade + " anos!")
idade += 1
alert("Ano que vem o " + nome + " terá " + idade + " anos!")


var idadeArthur = prompt("Quantos anos o " + nome + 
" terá daqui a 2 anos? ")
var idadeInt = parseInt(idadeArthur) //Transforma string em int
if(idadeArthur == 21){ 
    alert("Correto! A idade do Arthur daqui a 2 anos será " + 
idadeInt + " anos!")
} else {
    alert("Errado!! Tente novamente!")
}

