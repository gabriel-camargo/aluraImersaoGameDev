let imgCenario
let imgPersonagem
let imgInimigo
let imgInimigoTroll
let imgInimigoVoador
let imgGameOver

let cenario
let personagem
let trilha
let somPulo
let somPuloDuplo

let txtPontuacao

const widthWitch = 220
const heightWitch = 270

const widthEnemy = 105
const heightEnemy = 101

const widthEnemyTroll = 400
const heightEnemyTroll = 400

const widthEnemyFly = 200
const heightEnemyFly = 150
const velocidade = 5

const inimigos = []

function preload() {
  imgCenario = loadImage('imagens/cenario/floresta.png')
  imgPersonagem = loadImage('imagens/personagem/correndo.png')
  imgInimigo = loadImage('imagens/inimigos/gotinha.png')
  imgInimigoTroll = loadImage('imagens/inimigos/troll.png')
  imgInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  imgGameOver = loadImage('imagens/assets/game-over.png')
  trilha = loadSound('sons/trilha_jogo.mp3')
  somPulo = loadSound('sons/pulo.wav')
  somPuloDuplo = loadSound('sons/pulo_duplo.wav')

  frameRate(50)
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
  const inimigo = new Inimigo(
    7,
    4,
    imgInimigo,
    width - widthEnemy / 2,
    height - 50,
    widthEnemy / 2,
    heightEnemy / 2,
    widthEnemy,
    heightEnemy,
    0,
    400
  )
  const inimigoTroll = new Inimigo(
    5,
    5,
    imgInimigoTroll,
    width - widthEnemyTroll / 2,
    height - heightEnemyTroll / 2,
    widthEnemyTroll / 2,
    heightEnemyTroll / 2,
    widthEnemyTroll,
    heightEnemyTroll,
    6,
    1,
    3
  )
  const inimigoVoador = new Inimigo(
    5,
    3,
    imgInimigoVoador,
    width - widthEnemyFly / 2,
    height - heightEnemyFly / 2 - heightWitch,
    widthEnemyFly / 2,
    heightEnemyFly / 2,
    widthEnemyFly,
    heightEnemyFly,
    0,
    6000,
    1
  )

  inimigos.push(inimigo)
  inimigos.push(inimigoTroll)
  inimigos.push(inimigoVoador)

  txtPontuacao = new Pontuacao()

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

  txtPontuacao.exibir()
  txtPontuacao.adicionarPonto()

  personagem.exibir()
  personagem.aplicarGravidade()

  inimigos.forEach((inimigo) => {
    inimigo.exibir()
    inimigo.mover()

    if (personagem.estaColidindo(inimigo)) {
      image(imgGameOver, width / 2 - 200, height / 3)
      noLoop()
    }
  })
}
