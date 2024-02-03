const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar  = document.getElementById('posterior');
const botaoAnterior  = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo  = document.getElementById('capitulo');
const faixas = 10;

let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}
function tocarOuPausar(){
    if (taTocando === 0){
    tocarFaixa();
    taTocando = 1;
    } else{
        pausarFaixa();
        taTocando = 0;
    }
}
function proximaFaixa(){
    if (capituloAtual === faixas){
        capituloAtual = 1;
    }  else{
    capituloAtual = capituloAtual + 1
    }
    audioCapitulo.src = './books/' + capituloAtual + '.mp3';
tocarFaixa();
taTocando = 1;
trocarNome();
}

function anteriorFaixa(){
    if (capituloAtual === 1){
        capituloAtual = faixas;
    }  else{
    capituloAtual = capituloAtual - 1
    }
    audioCapitulo.src = './books/' + capituloAtual + '.mp3';
tocarFaixa();
taTocando = 1;
trocarNome();
}

function trocarNome(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual
}
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', anteriorFaixa);