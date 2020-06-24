let imgCenario
let imgPersonagem
let imgInimigo

let cenario
let personagem
let inimigo
let trilha
let somPulo
let somPuloDuplo

const widthWitch = 220
const heightWitch = 270

const widthEnemy = 105
const heightEnemy = 101
const velocidade = 5

function preload() {
  imgCenario = loadImage('imagens/cenario/floresta.png')
  imgPersonagem = loadImage('imagens/personagem/correndo.png')
  imgInimigo = loadImage('imagens/inimigos/gotinha.png')
  trilha = loadSound('sons/trilha_jogo.mp3')
  somPulo = loadSound('sons/pulo.wav')
  somPuloDuplo = loadSound('sons/pulo_duplo.wav')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  cenario = new Cenario(imgCenario, velocidade)
  personagem = new Personagem(
    4,
    4,
    imgPersonagem,
    20,
    height - heightWitch / 2,
    widthWitch / 2,
    heightWitch / 2,
    widthWitch,
    heightWitch
  )
  inimigo = new Inimigo(
    7,
    4,
    imgInimigo,
    width - widthEnemy / 2,
    height - heightEnemy / 2,
    widthEnemy / 2,
    heightEnemy / 2,
    widthEnemy,
    heightEnemy
  )
  trilha.loop()
}

function keyPressed() {
  if (key === 'ArrowUp') {
    let tipoPulo = personagem.pular()
    if (tipoPulo === 'pulo') {
      somPulo.play()
    } else if (tipoPulo === 'pulo_duplo') {
      somPuloDuplo.play()
    }
  }
}

function draw() {
  cenario.exibir()
  cenario.mover()

  personagem.exibir()
  personagem.aplicarGravidade()

  inimigo.exibir()
  inimigo.mover()

  if (personagem.estaColidindo(inimigo)) {
    console.log('perdeu')
    noLoop()
  }
}
