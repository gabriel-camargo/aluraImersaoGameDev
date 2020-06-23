class Personagem {
  constructor(imagem, w = 220, h = 270) {
    this.imagem = imagem
    this.w = w
    this.h = h
    
    this.matriz = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.matriz.push([j*this.w, i*this.h])
      }
    }
    
    this.frameAtual=0
  }

  exibir() {
    /**
     * @params(imagem, posX, posY, width, height, cropX, cropY, cropWidth, cropHeight)
     */
    image(
      this.imagem, 
      0, 
      height - (this.h / 2), 
      (this.w / 2), 
      (this.h / 2), 
      this.matriz[this.frameAtual][0], 
      this.matriz[this.frameAtual][1], 
      this.w, 
      this.h
    )
    
    this.animar()
  }

  animar() {
    this.frameAtual++
    
    if(this.frameAtual >= this.matriz.length) this.frameAtual=0
  }
}