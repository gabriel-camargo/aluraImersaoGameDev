class Jogo {
  constructor() {
    this.indiceAtual = 0
    this.mapa = fita.mapa
  }

  setup() {
    cenario = new Cenario(imgCenario, velocidade)
    txtPontuacao = new Pontuacao()
    vida = new Vida(
      fita.configuracoes.vidaMaxima,
      fita.configuracoes.vidaInicial
    )

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
      8
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

    vida.draw()

    txtPontuacao.exibir()
    txtPontuacao.adicionarPonto()

    personagem.exibir()
    personagem.aplicarGravidade()

    if (vida.vidas <= 0) {
      image(imgGameOver, width / 2 - 200, height / 3)
      noLoop()
    }

    const linhaAtual = this.mapa[this.indiceAtual]

    const inimigo = inimigos[linhaAtual.inimigo]
    inimigo.velocidade = linhaAtual.velocidade

    const inimigoVisivel = inimigo.posicaoTelaX < -inimigo.largura
    inimigo.exibir()
    inimigo.mover()

    if (inimigoVisivel) {
      this.indiceAtual++
      inimigo.reaparecer()
      if (this.indiceAtual > this.mapa.length - 1) {
        this.indiceAtual = 0
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perderVida()
      personagem.tornarInvencivel()
    }
  }
}
