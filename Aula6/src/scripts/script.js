var paulo = {  //Objeto
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var rafa = {
    nome: "Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

rafa.pontos = calculaPontos(rafa) //Coloca o objeto "Rafa" dentro da função
paulo.pontos = calculaPontos(paulo)
    

function calculaPontos(jogador){ 
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos;
}

var jogadores = [rafa, paulo]

exibirJogadores(jogadores)

function exibirJogadores(jogadores){ 
    var html = ''
    for(i = 0; i < jogadores.length; i++){
        html += '<tr><td>' + jogadores[i].nome + '</td>'
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias ++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas ++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates ++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
}