class Pontuacao {
  constructor() {
    this.pontos = 0
  }

  exibir() {
    fill('#fff')
    textAlign(RIGHT)
    textSize(50)
    text(parseInt(this.pontos), width - 30, 50)
  }

  adicionarPonto() {
    this.pontos += 10 / 50
  }
}
