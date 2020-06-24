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

    this.alturaPulo = 20
    this.gravidade = 1.4

    this.yInicial = this.posicaoTelaY
  }

  pular() {
    if (this.posicaoTelaY >= this.yInicial) {
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
    this.velocidadePulo += this.gravidade

    if (this.posicaoTelaY > this.yInicial) this.posicaoTelaY = this.yInicial
  }

  estaColidindo(inimigo) {
    noFill()
    const precisao = 0.7

    rect(
      this.posicaoTelaX,
      this.posicaoTelaY,
      this.largura * precisao,
      this.altura * precisao
    )
    rect(
      inimigo.posicaoTelaX,
      inimigo.posicaoTelaY,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )

    const colisao = collideRectRect(
      this.posicaoTelaX,
      this.posicaoTelaY,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.posicaoTelaX,
      inimigo.posicaoTelaY,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )

    return colisao
  }
}
