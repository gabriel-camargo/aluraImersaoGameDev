class Animacao {
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
    this.imagem = imagem
    this.posicaoTelaX = posicaoTelaX
    this.posicaoTelaY = posicaoTelaY
    this.largura = largura
    this.altura = altura
    this.larguraSprite = larguraSprite
    this.alturaSprite = alturaSprite

    this.matriz = []
    for (let i = 0; i < linhas; i++) {
      for (let j = 0; j < colunas; j++) {
        this.matriz.push([j * this.larguraSprite, i * this.alturaSprite])
      }
    }

    this.frameAtual = 0
  }

  exibir() {
    /**
     * @params(imagem, posX, posY, width, height, cropX, cropY, cropWidth, cropHeight)
     */
    image(
      this.imagem,
      this.posicaoTelaX,
      this.posicaoTelaY,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.larguraSprite,
      this.alturaSprite
    )

    this.animar()
  }

  animar() {
    this.frameAtual++

    if (this.frameAtual >= this.matriz.length) this.frameAtual = 0
  }
}
