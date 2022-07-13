function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}
function draw() {
  background(imgEstrada);
  mostraImagens(imgPersonagem, xP, yP, lP, hP);
  movimentaPersonagem();
  for (let i = 0; i < imgCarros.length; i++) {
    mostraImagens(imgCarros[i], xCarros[i], yCarros[i], lCarros, hCarros);
  }
  movimentaCarros();
  resetPosCarros();
  verificaColisoes();
  pontuacao();
  marcaPontos();
}
