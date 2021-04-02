var filmes = ["Star Wars", "Toy Story", "Interestellar", "Esqueceram de mim"] //--> Método simplificado

//var filmes = []
//filmes.push("Star Wars", "Toy Story", "Interestellar") --> "Empurra" um valor pra dentro de um array não definido 

//console.log(filmes) --> Imprime todos os valores de dentro do array
//console.log(filmes[2]) --> Imprime um valor definido de dentro da array
//console.log(filmes.length) --> Tamanho do array(quantidade de elementos)

for(i = 0; i < filmes.length; i++){
    console.log(filmes[i])
}