class Personagem extends Animacao {
  constructor(
    linhas,
    colunas,
    imagem,
    posicaoTelaX,
    posicaoTelaY,
    largura,
    altura,
    larguraSprite,
    alturaSprite
  ) {
    super(
      linhas,
      colunas,
      imagem,
      posicaoTelaX,
      posicaoTelaY,
      largura,
      altura,
      larguraSprite,
      alturaSprite
    )
    this.velocidadePulo = 0

    this.puloDuplo = false
    this.penalidadePuloDuplo = 1.35
    this.alturaPulo = 22
    this.gravidade = 1.2

    this.posicaoTelaY -= 30

    this.chao = this.posicaoTelaY

    this.invencivel = false
  }

  pular() {
    if (this.posicaoTelaY >= this.chao) {
      this.velocidadePulo = -this.alturaPulo
      this.puloDuplo = true

      return 'pulo'
    } else if (this.puloDuplo) {
      this.velocidadePulo = -this.alturaPulo / this.penalidadePuloDuplo
      this.puloDuplo = false

      return 'pulo_duplo'
    }

    return false
  }

  aplicarGravidade() {
    this.posicaoTelaY += this.velocidadePulo

    if (this.posicaoTelaY >= this.chao) {
      this.posicaoTelaY = this.chao
      this.velocidadePulo = 0
    } else this.velocidadePulo += this.gravidade
  }

  tornarInvencivel() {
    this.invencivel = true

    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }

  estaColidindo(inimigo) {
    noFill()
    const precisao = 0.5

    rect(
      this.posicaoTelaX + (this.largura * precisao) / 2,
      this.posicaoTelaY,
      this.largura * precisao,
      this.altura
    )
    rect(
      inimigo.posicaoTelaX + (inimigo.largura * precisao) / 2,
      inimigo.posicaoTelaY,
      inimigo.largura * precisao,
      inimigo.altura
    )

    if (this.invencivel) return false

    const colisao = collideRectRect(
      this.posicaoTelaX + (this.largura * precisao) / 2,
      this.posicaoTelaY,
      this.largura * precisao,
      this.altura,
      inimigo.posicaoTelaX + (inimigo.largura * precisao) / 2,
      inimigo.posicaoTelaY,
      inimigo.largura * precisao,
      inimigo.altura
    )

    return colisao
  }
}
