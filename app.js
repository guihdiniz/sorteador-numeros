//Botão sortear
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;


    //Não repetir numeros
    for (let i = 0; i < quantidade; i++) {
        numero = numeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = numeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }    


    //Exibir os numero sorteados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    ativarBotaoReiniciar();
    document.getElementById('btnreiniciar').addEventListener('click', reiniciarSorteio);
}


//Número minimo e maximo
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Ativar botão reinicar
function ativarBotaoReiniciar() {
    let botao = document.getElementById('btnreiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
      } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
      }   
}


//Reiniciar sorteio
function reiniciarSorteio() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    let sorteados = [];
    ativarBotaoReiniciar();
}

