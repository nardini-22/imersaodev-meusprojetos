var cartaPaulo = { //Objeto
    nome: "Seiya de pégaso",
    imagem: "https://i.pinimg.com/originals/e9/c1/77/e9c1778727e6c604ace92a2ec73ce52b.jpg",
    atributos: { //Objeto dentro de um objeto
    ataque: "80",
    defesa: "60",
    magia: "90"
    }  
}

var cartaRafa = {
    nome: "Bulbasaur",
    imagem: "https://i.pinimg.com/originals/3d/f2/db/3df2dbe82ab0a446ef57bada79b5b277.png",
    atributos: {
    ataque: "70",
    defesa: "65",
    magia: "85"
    }
}

var cartaGui = {
    nome: "Lord Dart Vader",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
    atributos: {
    ataque: "88",
    defesa: "62",
    magia: "90"
    }
}

var cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 80
    }
}

var cartaMaquina //Carta que a maquina vai jogar
var cartaJogador //Carta que o jogador vai jogar
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaBatman, cartaHarry, cartaLol, cartaNaruto, cartaMarvel] //Array que armazena todas as cartas

var pontosJogador = 0 //Variável que armazena os pontos do jogador
var pontosMaquina = 0 //Variável que armazena os pontos da máquina

atualizaPlacar() //Chama uma função
atualizaQtdeCartas()

function atualizaQtdeCartas(){
    //Função que atualiza a quantidade de cartas
    var divQtdeCartas = document.getElementById('quantidade-cartas')  
    divQtdeCartas.innerHTML = "Quantidade de cartas no jogo: " + cartas.length
}

function atualizaPlacar(){
    //Função que atualiza a quantidade de cartas
    var divPlacar = document.getElementById('placar') //Variável que armazena uma "div" de html em js
    divPlacar.innerHTML = "Jogador " + pontosJogador + "x" + pontosMaquina + " Máquina" //Adiciona um texto dentro da div
}

function sortearCarta(){
    //Função que sorteia cartas
    var numeroCartaMaquina = parseInt(Math.floor(Math.random() * (cartas.length - 0)) + 0)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1) //Retira um elemento do array
//                  ^                 ^ 
//               Posição         quantidade

    var numeroCartaJogador = parseInt(Math.floor(Math.random() * (cartas.length - 0)) + 0)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true //Desabilita um botão
    exibeCartaJogador()
}

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for(atributo in cartaJogador.atributos){
        opcoesTexto += "<input onclick='habilitaBotao()' type = 'radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>"

}
function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
        for(i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}
function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById('resultado')

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'> Parabéns! Sua carta venceu😍</p>"
        pontosJogador ++
    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'> Que pena! Sua carta perdeu😥</p>"
        pontosMaquina ++
    } else{
        htmlResultado = "<p class='resultado-final'> Uau! É um empate😳</p>"
    }

    if(cartas.length == 0){
        alert("Fim de jogo! 😃")
        document.getElementById('btnProximaRodada').disabled = true
        if(pontosJogador > pontosMaquina){
            htmlResultado = "<p class='resultado-final'>Parabéns! Você ganhou o jogo! 😎</p>"
        } else if (pontosJogador < pontosMaquina){
            htmlResultado = "<p class='resultado-final'>Que pena! Você perdeu o jogo! 😭</p>"
        } else if (pontosJogador == pontosMaquina){ 
            htmlResultado = "<p class='resultado-final'>Uau! O jogo acabou empatado! 🙄</p>"
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false

    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true


    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQtdeCartas()

    
}

function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for(atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type = 'text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>"

}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')
    
    divCartas.innerHTML = `<div id='carta-jogador' class='carta'></div> <div id='carta-maquina' class='carta'></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}

function habilitaBotao(){
    return document.getElementById('btnJogar').disabled = false //Habilita um botão
}