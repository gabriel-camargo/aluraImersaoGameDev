function setup() {
  createCanvas(windowWidth, windowHeight)

  trilha.loop()

  frameRate(50)
  jogo = new Jogo()
  telaInicial = new TelaInicial()
  jogo.setup()

  cenas = {
    jogo,
    telaInicial
  }

  botaoGerenciador = new BotaoGerenciador('INICIAR', width / 2, height / 2)
}

function keyPressed() {
  cenas[cenaAtual].keyPressed(key)
}

function draw() {
  cenas[cenaAtual].draw()
}
