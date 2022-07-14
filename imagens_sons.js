//imagens utilizadas no jogo
let imgEstrada;
let imgPersonagem;
let imgCarros;
let somTrilha;
let somColisao;
let somPontos;

function preload() {
  imgEstrada = loadImage("imagens/estrada.png");
  imgPersonagem = loadImage("imagens/Douglas.jpg");
  imgCarros = [loadImage("imagens/carro-1.png"), loadImage("imagens/carro-2.png"), loadImage("imagens/carro-3.png"), loadImage("imagens/carro-1.png"), loadImage("imagens/carro-3.png"), loadImage("imagens/carro-2.png")];
  somTrilha = loadSound("sons/roygbiv.mp4");
  somColisao = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
}

function mostraImagens(i, x, y, l, h) {
  image(i, x, y, l, h);
}
