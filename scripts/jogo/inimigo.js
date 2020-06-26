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

    this.velocidade = velocidade
    this.posicaoTelaY -= 30
  }

  mover() {
    this.posicaoTelaX -= this.velocidade
  }

  reaparecer() {
    this.posicaoTelaX = width
  }
}
