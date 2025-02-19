class BotaoGerenciador {
  constructor(txt, x, y) {
    this.txt = txt
    this.x = x
    this.y = y

    this.botao = createButton(this.txt)
    this.botao.addClass('botao-tela-inicial')
    this.botao.mousePressed(() => {
      this._alteraCena()
    })
  }

  draw() {
    this.botao.position(this.x, this.y)
    this.botao.center('horizontal')
  }

  _alteraCena() {
    this.botao.remove()
    cenaAtual = 'jogo'
  }
}
