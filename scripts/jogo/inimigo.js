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
    this.velocidade = 8
  }

  mover() {
    this.posicaoTelaX -= this.velocidade

    if (this.posicaoTelaX < -this.largura) {
      this.posicaoTelaX = width
    }
  }
}
