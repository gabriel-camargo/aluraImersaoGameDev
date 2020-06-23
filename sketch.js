let imgCenario;
let imgPersonagem;
let cenario;
let personagem;
let trilha;


const widthWitch = 220;
const heightWitch = 270;
const velocidade = 5;

function preload() {
  imgCenario = loadImage('imagens/cenario/floresta.png');
  imgPersonagem = loadImage('imagens/personagem/correndo.png');
  trilha = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, velocidade);
  personagem = new Personagem(imgPersonagem, widthWitch, heightWitch);
  trilha.loop();
}

function draw() {

  cenario.exibir();
  cenario.mover();

  personagem.exibir();

}