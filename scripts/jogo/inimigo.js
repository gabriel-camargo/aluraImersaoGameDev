class Inimigo extends Animacao {
  constructor(
    linhas,
    colunas,
    imagem,
    posicaoTelaX,
    posicaoTelaY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    velocidade,
    delay,
    colunasExtras = -1
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
      alturaSprite,
      colunasExtras
    )

    this.delay = delay
    this.velocidade = velocidade
    this.posicaoTelaY -= 30
  }

  mover() {
    this.posicaoTelaX -= this.velocidade

    if (this.posicaoTelaX < -this.largura - this.delay) {
      this.posicaoTelaX = width
    }
  }
}
