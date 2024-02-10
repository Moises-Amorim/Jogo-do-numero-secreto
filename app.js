//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 100';
let numerosSorteados = [];
let maximoLista = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + maximoLista);
}

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', `Acertou!!`)
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled', false);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`);
    } else {
      exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`);
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * maximoLista + 1)
  let quantidadeDeNumerosNaLista = numerosSorteados.length;

  if (quantidadeDeNumerosNaLista == maximoLista) {
    numerosSorteados = [];
  }

  if (numerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else {
    numerosSorteados.push(numeroEscolhido);
    console.log(numerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled', true)
}

exibirMensagemInicial()