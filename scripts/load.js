function preload() {
  imgCenario = loadImage('imagens/cenario/floresta.png')
  imgTelaInicial = loadImage('imagens/cenario/telaInicial.png')

  fontTelaInical = loadFont('fonts/fonteTelaInicial.otf')

  imgPersonagem = loadImage('imagens/personagem/correndo.png')

  imgInimigo = loadImage('imagens/inimigos/gotinha.png')
  imgInimigoTroll = loadImage('imagens/inimigos/troll.png')
  imgInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')

  imgGameOver = loadImage('imagens/assets/game-over.png')

  trilha = loadSound('sons/trilha_jogo.mp3')
  somPulo = loadSound('sons/pulo.wav')
  somPuloDuplo = loadSound('sons/pulo_duplo.wav')
}
