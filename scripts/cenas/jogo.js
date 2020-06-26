class Jogo {
  constructor() {
    this.inimigoAtual = 0
  }

  setup() {
    cenario = new Cenario(imgCenario, velocidade)

    txtPontuacao = new Pontuacao()

    personagem = new Personagem(
      4,
      4,
      imgPersonagem,
      20,
      height - heightWitch / 2,
      widthWitch / 2,
      heightWitch / 2,
      widthWitch,
      heightWitch
    )
    const inimigo = new Inimigo(
      7,
      4,
      imgInimigo,
      width - widthEnemy / 2,
      height - 50,
      widthEnemy / 2,
      heightEnemy / 2,
      widthEnemy,
      heightEnemy,
      8,
      400
    )
    const inimigoTroll = new Inimigo(
      5,
      5,
      imgInimigoTroll,
      width - widthEnemyTroll / 2,
      height - heightEnemyTroll / 2,
      widthEnemyTroll / 2,
      heightEnemyTroll / 2,
      widthEnemyTroll,
      heightEnemyTroll,
      6,
      200,
      3
    )
    const inimigoVoador = new Inimigo(
      5,
      3,
      imgInimigoVoador,
      width - widthEnemyFly / 2,
      height - heightEnemyFly / 2 - heightWitch,
      widthEnemyFly / 2,
      heightEnemyFly / 2,
      widthEnemyFly,
      heightEnemyFly,
      10,
      600,
      1
    )

    inimigos.push(inimigo)
    inimigos.push(inimigoTroll)
    inimigos.push(inimigoVoador)
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      let tipoPulo = personagem.pular()
      if (tipoPulo === 'pulo') {
        somPulo.play()
      } else if (tipoPulo === 'pulo_duplo') {
        somPuloDuplo.play()
      }
    }
  }

  draw() {
    cenario.exibir()
    cenario.mover()

    txtPontuacao.exibir()
    txtPontuacao.adicionarPonto()

    personagem.exibir()
    personagem.aplicarGravidade()

    const inimigo = inimigos[this.inimigoAtual]

    const inimigoVisivel = inimigo.posicaoTelaX < -inimigo.largura

    inimigo.exibir()
    inimigo.mover()

    if (inimigoVisivel) {
      this.inimigoAtual = parseInt(random(0, inimigos.length))
      if (this.inimigoAtual >= inimigos.length) {
        this.inimigoAtual--
      }
      inimigo.velocidade = random(10, 18)
    }

    if (personagem.estaColidindo(inimigo)) {
      image(imgGameOver, width / 2 - 200, height / 3)
      // noLoop()
    }
  }
}
