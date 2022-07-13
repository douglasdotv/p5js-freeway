//código carros

let xCarros = [500, 500, 500, -100, -100, -100];
let yCarros = [45, 96, 270, 150, 210, 318];
let lCarros = 40;
let hCarros = 30;
let vCarros = [2, 10/3, 5/2, 5, 5/4, 13/5];

function movimentaCarros() {
  for (let i = 0; i < imgCarros.length/2; i++) {
    xCarros[i] -= vCarros[i];
  }
  for (let i = 3; i < imgCarros.length; i++) {
    xCarros[i] += vCarros[i];
  }
}

function resetPosCarros() {
  for (let i = 0; i < imgCarros.length/2; i++) {
    if (atravessouTelaEsq(xCarros[i])) {
      xCarros[i] = 500;
    }
  }
  for (let i = 3; i < imgCarros.length; i++) {
    if (atravessouTelaDir(xCarros[i])) {
      xCarros[i] = -100;
    }
  }
}

function atravessouTelaEsq(x) {
    return x < -50;
}
function atravessouTelaDir(x) {
    return x > 450;
}