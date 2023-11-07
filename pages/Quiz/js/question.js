//Vetor de objetos
var quiz = [

  //Perguntas fáceis
  {
    q: "Qual é a disciplina de equitação que envolve saltos sobre obstáculos? - Fácil",
    opcoes: ["Adestramento", "Polo", "Salto", "Rédeas"],
    resposta: 2,
  },

  {
    q: "Qual é o nome da competição de equitação que envolve três disciplinas: adestramento, cross-country e salto? - Fácil",
    opcoes: ["Copa do Mundo", "Tríplice Coroa", "Pentatlo Moderno", "Eventing"],
    resposta: 3,
  },

  {
    q: "Qual cavalo é conhecido por ser uma raça originária da Espanha e muitas vezes associado à equitação clássica? - Fácil",
    opcoes: ["Pônei Shetland", "Puro-sangue Árabe", "Andaluz", "Mustang"],
    resposta: 2,
  },

  {
    q: 'Em que esporte equestre os cavaleiros competem em um campo circular com o objetivo de marcar gols contra a equipe adversária? - Fácil',
    opcoes: [
      "Hipismo Paralímpico",
      "Corrida de Barris",
      "Equitação a Rédeas",
      "Polo",
    ],
    resposta: 3,
  },

  {
    q: "Em que país o polo é um esporte muito popular? - Fácil",
    opcoes: ["Estados Unidos", "Reino Unido", "Brasil", "Rússia"],
    resposta: 1,
  },

  {
    q: 'O que é um obstáculo de salto usado em competições de salto a cavalo, composto por uma série de barras que podem ser ajustadas em altura? - Fácil',
    opcoes: ["Trave de Equilíbrio", "Portão", "Cavalo de Balanço", "Obstáculo de Salto"],
    resposta: 3,
  },

  {
    q: "Qual é o esporte equestre que envolve a habilidade de treinar um cavalo para executar movimentos complexos e elegantes? - Fácil",
    opcoes: ["Salto", "Adestramento", "Corrida de Barris", "Enduro"],
    resposta: 1,
  },

  {
    q: "Qual é o nome do evento de equitação onde os competidores correm uma trilha longa e desafiadora através do campo? - Fácil",
    opcoes: ["Derby de Polo", "Corrida de Barris", "Enduro", "Pentatlo Moderno"],
    resposta: 2,
  },

  {
    q: "Qual cavalo é conhecido por sua velocidade e é frequentemente usado em corridas de puro-sangue? - Fácil",
    opcoes: ["Clydesdale", "Puro-sangue Inglês", "Shire", "Appaloosa"],
    resposta: 1,
  },

  {
    q: "Qual é a disciplina de equitação em que os cavaleiros competem em jogos a cavalo, como corrida de sacos e corrida de anel? - Fácil",
    opcoes: ["Polo", "Cowboy Mounted Shooting", "Esportes a Cavalo", "Ginástica Equestre"],
    resposta: 2,
  },

  {
    q: "Em que país o esporte equestre chamado 'charrería' é tradicionalmente praticado? - Fácil",
    opcoes: [
      "Espanha",
      "Estados Unidos",
      "México",
      "França",
    ],
    resposta: 2,
  },

  {
    q: "Qual destes não é um equipamento de montaria equestre? - Fácil",
    opcoes: [
      "Espora",
      "Ferradura",
      "Espaçador",
      "Bridão",
    ],
    resposta: 2,
  },

  {
    q: "O que é o 'trote' em equitação? - Fácil",
    opcoes: ["Uma corrida de longa distância", "Um tipo de salto alto", "Um passo intermediário entre o passo e o galope", "Um tipo de salto sem obstáculos"],
    resposta: 2,
  },

  {
    q: "Qual é o termo usado para descrever um cavalo que tem um casco branco com manchas escuras? - Fácil",
    opcoes: ["Overo", "Tobiano", "Palomino", "Pampa"],
    resposta: 0,
  },

  {
    q: "O termo 'Hípica' é geralmente associado a quais tipos de esportes equestres? - Fácil",
    opcoes: [
      "Polo e Corrida de Barris",
      "Adestramento e Salto",
      "Enduro e Rédeas",
      "Hipismo Paralímpico e Pentatlo Moderno",
    ],
    resposta: 1,
  },

  {
    q: "Qual é o esporte equestre em que os cavaleiros competem em uma série de eventos de velocidade e habilidade? - Fácil",
    opcoes: ["Enduro", "Rédeas", "Cowboy Mounted Shooting", "Ginástica Equestre"],
    resposta: 2,
  },

  {
    q: "Quem é o cavaleiro de salto a cavalo mais decorado da história, com inúmeras medalhas olímpicas? - Fácil",
    opcoes: ["Beezie Madden", "Rodrigo Pessoa", "Michael Jung", "Ludger Beerbaum"],
    resposta: 1,
  },

  {
    q: "Qual é o termo usado para descrever o ato de escovar o pelo de um cavalo para mantê-lo limpo e saudável? - Fácil",
    opcoes: ["Escovação", "Escovação a Seco", "Escovação a Molhado", "Escovação a Vácuo"],
    resposta: 1,
  },

  {
    q: "Qual é o nome da competição de hipismo que reúne os melhores saltadores do mundo em uma série de etapas? - Fácil",
    opcoes: ["Grande Prêmio de Saltos", "Campeonato Mundial de Salto", "Copa das Nações", "Copa do Mundo de Salto"],
    resposta: 3,
  },

  {
    q: "Qual é o esporte equestre em que os cavaleiros demonstram sua habilidade em laçar um boi em movimento? - Fácil",
    opcoes: ["Adestramento", "Laço de Bezerro", "Rédeas", "Corrida de Barris"],
    resposta: 1,
  },

  {
    q: "O termo dressage é frequentemente associado a qual esporte equestre? - Fácil",
    opcoes: ["Polo", "Salto", "Adestramento", "Rédeas"],
    resposta: 2,
  },

  {
    q: 'Qual é a disciplina de equitação em que os cavaleiros tem que dar a volta em três tambores colocados em formato de trevo na arena? - Fácil',
    opcoes: [
      "Salto",
      "Corrida de Barris",
      "Rédeas",
      "Polo",
    ],
    resposta: 1,
  },

  {
    q: "O que é um galope na equitação? - Fácil",
    opcoes: ["Um passo lento", "Um passo médio", "Um passo rápido", "Um tipo de salto"],
    resposta: 2,
  },

  {
    q: 'Qual é o esporte equestre em que os cavaleiros competem em uma série de eventos de perícia, como cortar o gado? - Fácil',
    opcoes: [
      "Laço de Bezerro",
      "Ginástica Equestre",
      "Cowboy Mounted Shooting",
      "Enduro",
    ],
    resposta: 0,
  },

  {
    q: 'Qual é a parte do equipamento de montaria que é colocada na cabeça do cavalo e é usada para controlá-lo? - Fácil',
    opcoes: [
      "Sela",
      "Bridão",
      "Espora",
      "Rédea",
    ],
    resposta: 1,
  },

  {
    q: 'Qual é o termo usado para descrever um cavalo de pêlo amarelo-dourado com crina e cauda brancas? - Fácil',
    opcoes: ["Appaloosa", "Tobiano", "Palomino", "Pampa"],
    resposta: 2,
  },

  {
    q: 'O salto é uma disciplina de equitação que envolve corridas em alta velocidade. - Fácil',
    opcoes: [
      "Verdadeiro",
      "Falso",
    ],
    resposta: 1,
  },

  {
    q: "O puro-sangue árabe é uma raça de cavalo conhecida por sua resistência em corridas de longa distância. - Fácil",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 0,
  },

  {
    q: 'O hipismo paralímpico é uma categoria de esportes equestres adaptada para atletas com deficiências físicas. - Fácil',
    opcoes: [
      "Verdadeiro", "Falso"
    ],
    resposta: 0,
  },

  {
    q: "Um casco de cavalo deve ser cortado regularmente para evitar doenças nos cascos. - Fácil",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 0,
  },

  {
    q: 'A equitação a rédeas é uma disciplina de hipismo que se originou na França. - Fácil',
    opcoes: [
      "Verdadeiro", "Falso",
    ],
    resposta: 1,
  },

  {
    q: "O cowboy mounted shooting é uma disciplina de equitação em que os cavaleiros atiram em alvos enquanto montam a cavalo. - Fácil",
    opcoes: ["Verdadeiro", "Fácil"],
    resposta: 0,
  },

  {
    q: "A maioria das competições de salto a cavalo acontece em pistas retas. - Fácil",
    opcoes: [
      "Verdadeiro", "Falso"
    ],
    resposta: 1,
  },

  {
    q: "O termo mangalarga se refere a uma raça de cavalo originária do Brasil. - Fácil",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 0,
  },

  {
    q: 'Os eventos de enduro equestre podem cobrir grandes distâncias em terrenos variados. - Fácil',
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 0,
  },

  {
    q: "O termo cavalo de sela se refere a um cavalo utilizado principalmente para tração pesada. - Fácil",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 1,
  },

  {
    q: 'O que é uma "estrebaria" em termos de equitação?',
    opcoes: [
      "Um lugar para limpar o cavalo",
      "Um tipo de sela",
      "Um abrigo para cavalos",
      "Um movimento de salto",
    ],
    resposta: 2,
  },

  {
    q: "Qual é o termo para a prática de montar um cavalo em ritmo acelerado?",
    opcoes: ["Trote", "Galope", "Andadura", "Marcha"],
    resposta: 1,
  },

  {
    q: "Em que esporte equestre os cavaleiros correm em uma pista oval?",
    opcoes: ["Polo", "Rédeas", "Enduro", "Corrida de cavalos"],
    resposta: 3,
  },

  {
    q: "Em que disciplina equestre os cavalos executam uma série de movimentos de alta escola, incluindo saltos no lugar e meia-volta?",
    opcoes: ["Doma clássica", "CCE", "Rédeas", "Corrida de cavalos"],
    resposta: 0,
  },

  {
    q: "Qual é o termo para a área em uma pista de corrida onde os cavalos correm em círculos antes de começar a corrida?",
    opcoes: ["Box de largada", "Linha de chegada", "Curva", "Reta final"],
    resposta: 2,
  },

  {
    q: "Qual é o nome da peça que cobre as costas do cavalo e fornece suporte para o cavaleiro?",
    opcoes: ["Estribo", "Sela", "Barrigueira", "Cabresto"],
    resposta: 1,
  },

  {
    q: "Qual é o termo para o ato de controlar o cavalo com rédeas?",
    opcoes: ["Doma clássica", "Enduro", "Rédeas", "Hipismo"],
    resposta: 2,
  },

  {
    q: 'Que parte do cavalo é frequentemente coberta por uma "cabeçada"?',
    opcoes: ["Cabeça", "Casco", "Pescoço", "Boca"],
    resposta: 0,
  },

  {
    q: 'O que é um "paddock" em termos de equitação?',
    opcoes: [
      "Uma competição de salto",
      "Um pequeno cercado para cavalos",
      "Um tipo de cela",
      "Uma corrida de longa distância",
    ],
    resposta: 1,
  },

  {
    q: "Qual é o termo para a ferramenta usada para limpar os cascos de um cavalo?",
    opcoes: ["Escova", "Espora", "Ferradura", "Picadeira"],
    resposta: 2,
  },

  {
    q: 'O que é um "trote" em equitação?',
    opcoes: [
      "Um movimento lento do cavalo",
      "Um som feito pelo cavaleiro",
      "Um tipo de rédea",
      "Um cavalo de grande porte",
    ],
    resposta: 0,
  },

  {
    q: 'O que é uma "cauda de cavalo"?',
    opcoes: [
      "Uma raça de cavalo",
      "Um tipo de penteado",
      "Uma competição de salto",
      "Uma peça de arreio",
    ],
    resposta: 1,
  },

  {
    q: "Qual é o termo para a estrutura que segura a sela nas costas do cavalo?",
    opcoes: ["Barrigueira", "Estribo", "Cabeçada", "Rédea"],
    resposta: 0,
  },

  {
    q: 'O que é o "sprint final" em corridas de cavalos?',
    opcoes: [
      "A parte mais lenta da corrida",
      "Uma corrida de longa distância",
      "O treinamento inicial",
      "A parte mais rápida da corrida",
    ],
    resposta: 3,
  },

  {
    q: "Qual é o termo para um cavalo com uma pelagem branca e preta?",
    opcoes: ["Alazão", "Malhado", "Pampa", "Baio"],
    resposta: 1,
  },

  {
    q: 'O que é um "jóquei"?',
    opcoes: [
      "Um tipo de corrida",
      "Um tipo de cavalo",
      "Um piloto de corrida de cavalos",
      "Um treinador de cavalos",
    ],
    resposta: 2,
  },

  {
    q: "Qual é o termo para o espaço onde os cavalos vivem e são cuidados?",
    opcoes: ["Circuito", "Hipódromo", "Haras", "Sela"],
    resposta: 2,
  },

  {
    q: 'O que é o "passo" em equitação?',
    opcoes: [
      "Um movimento rápido do cavalo",
      "Um tipo de alimentação",
      "Um movimento lento do cavalo",
      "Um tipo de cavalo",
    ],
    resposta: 2,
  },

  {
    q: 'O que é um "trote" em equitação?',
    opcoes: [
      "Um movimento rápido do cavalo",
      "Um som feito pelo cavaleiro",
      "Um movimento lento do cavalo",
      "Um tipo de rédea",
    ],
    resposta: 2,
  },

  {
    q: 'O que é uma "prova de obstáculos"?',
    opcoes: [
      "Um teste de resistência",
      "Uma competição de salto",
      "Um tipo de corrida",
      "Uma exposição de cavalos",
    ],
    resposta: 1,
  },

  {
    q: "Qual é o termo para a área onde os cavalos se exercitam e são treinados?",
    opcoes: ["Barrigueira", "Circuito", "Picadeira", "Haras"],
    resposta: 2,
  },

  {
    q: 'O que é o "galope"?',
    opcoes: [
      "Um movimento lento do cavalo",
      "Um tipo de corrida",
      "Um cavalo de grande porte",
      "Uma peça de arreio",
    ],
    resposta: 1,
  },
];
