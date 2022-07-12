//código personagem

let xP = 100;
let yP = 370;
let lP = 25;
let hP = 25;
let colisao = false;
let pontos = 0;

function movimentaPersonagem() {
  if (keyIsDown(UP_ARROW)) {
    yP -= 9/4;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yP <= 370) {
      yP += 9/4; 
    }
  }
}

function verificaColisoes() {
  for (i = 0; i < imgCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], lCarros, hCarros, xP, yP, 12);
    if (colisao) {
      resetPosPersonagem();
      if (pontos > 0) {
        pontos--;
    }
      somColisao.play();
    }
  }
}

function pontuacao() {
  textAlign(CENTER);
  textSize(20);
  text("Pontos: " + pontos, (width - width/7), height/(33/2));
}

function marcaPontos() {
  if (yP < 20) {
    pontos++;
    somPontos.play();
    resetPosPersonagem();
  }
}

function resetPosPersonagem() {
 yP = 370;
}