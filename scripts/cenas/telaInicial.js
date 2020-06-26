class TelaInicial {
  constructor() {}

  setup() {}

  keyPressed(key) {
    // cenaAtual = 'jogo'
  }

  draw() {
    this._imagemDeFundo()
    this._texto()
    this._botao()
  }

  _imagemDeFundo() {
    image(imgTelaInicial, 0, 0, width, height)
  }

  _texto() {
    textFont(fontTelaInical)
    textSize(50)
    textAlign(CENTER)
    text('As aventuras de', width / 2, height / 3)
    textSize(90)
    text('Hipsta', width / 2, height / 3 + 80)
  }

  _botao() {
    botaoGerenciador.y = (height / 7) * 5
    botaoGerenciador.draw()
  }
}
