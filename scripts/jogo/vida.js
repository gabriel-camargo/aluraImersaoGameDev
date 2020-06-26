class Vida {
  constructor(vidaMaxima, vidaInicial) {
    this.vidaMaxima = vidaMaxima
    this.vidaInicial = vidaInicial

    this.vidas = this.vidaInicial

    this.largura = 45
    this.altura = 40
    this.xInicial = 20
    this.y = 20
  }

  draw() {
    for (let index = 0; index < this.vidas; index++) {
      const margem = index * 30
      const posicao = this.xInicial * (index + 1)
      image(imgVida, posicao + margem, this.y, this.largura, this.altura)
    }
  }

  ganharVida() {
    if (this.vidas <= this.vidaMaxima) this.vidas++
  }

  perderVida() {
    this.vidas--
  }
}
