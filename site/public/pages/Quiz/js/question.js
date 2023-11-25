//Vetor de objetos
var quiz = [
  //Começo fáceis
  {
    q: "Cavalos têm uma visão binocular, o que significa que conseguem enxergar um objeto com ambos os olhos ao mesmo tempo",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 0,
    dificuldade: "Fácil",
  },

  {
    q: 'A modalidade de hipismo "salto" consiste em percorrer um percurso de obstáculos no menor tempo possível.',
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 1,
    dificuldade: "Fácil",
  },

  {
    q: "O esporte conhecido como polo é tradicionalmente praticado com elefantes em vez de cavalos.",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 1,
    dificuldade: "Fácil",
  },

  {
    q: "Qual destas não é uma raça de cavalo?",
    opcoes: ["Puro-sangue inglês", "Quarto de Milha", "Shiba Inu", "Árabe"],
    resposta: 2,
    dificuldade: "Fácil",
  },

  {
    q: "Qual é o nome do esporte equestre em que os participantes devem realizar uma série de movimentos pré-determinados em uma ordem específica?",
    opcoes: ["Salto", "Adestramento", "Enduro", "Laço"],
    resposta: 1,
    dificuldade: "Fácil",
  },

  {
    q: "Em que país o Kentucky Derby, uma famosa corrida de cavalos, é realizado anualmente?",
    opcoes: ["França", "Estados Unidos", "Inglaterra", "Austrália"],
    resposta: 1,
    dificuldade: "Fácil",
  },

  {
    q: "Qual é a peça de equipamento equestre usada para controlar um cavalo, geralmente conectada à embocadura?",
    opcoes: ["Sela", "Estribo", "Rédea", "Cabeçada"],
    resposta: 2,
    dificuldade: "Fácil",
  },

  {
    q: 'O que é a "ferroada de cavalo"?',
    opcoes: [
      "Um tipo de coice",
      "Uma marca na pele causada por espinhos",
      "Uma alergia à saliva de cavalo",
      "A pegada de um cavalo na lama",
    ],
    resposta: 1,
    dificuldade: "Fácil",
  },

  {
    q: "Qual é o nome do esporte equestre que envolve a prática de saltos em obstáculos naturais, como rios e troncos de árvores?",
    opcoes: ["Salto", "Concurso Completo de Equitação (CCE)", "Enduro", "Polo"],
    resposta: 1,
    dificuldade: "Fácil",
  },

  {
    q: 'O que é um "galope" no contexto dos cavalos?',
    opcoes: [
      "Um tipo de sela",
      "Uma raça de cavalo",
      "Uma velocidade de corrida",
      "Um tipo de alimentação equina",
    ],
    resposta: 2,
    dificuldade: "Fácil",
  },
  //Fim fáceis

  //Início médias
  {
    q: "O cavalo Mustang é uma raça nativa da América do Norte?",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 0,
    dificuldade: "Média",
  },

  {
    q: 'O termo "dressage" refere-se a uma forma específica de equitação utilizada em competições de salto.',
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 1,
    dificuldade: "Média",
  },

  {
    q: "O evento de tríplice coroa no turfe consiste em três corridas: o Kentucky Derby, o Preakness Stakes e o Belmont Stakes.",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 0,
    dificuldade: "Média",
  },

  {
    q: "Qual é a altura média de um cavalo de corrida Puro-sangue inglês?",
    opcoes: [
      "14.2 a 15.2 mãos",
      "15.3 a 16.3 mãos",
      "16.4 a 17.4 mãos",
      "17.5 a 18.5 mãos",
    ],
    resposta: 1,
    dificuldade: "Média",
  },

  {
    q: "Qual desses eventos equestres faz parte do pentatlo moderno?",
    opcoes: [
      "Salto",
      "Concurso Completo de Equitação (CCE)",
      "Enduro",
      "Adestramento",
    ],
    resposta: 3,
    dificuldade: "Média",
  },

  {
    q: 'Qual é a diferença entre um "galope" e um "trote" no contexto da equitação?',
    opcoes: [
      "O galope é uma marcha lenta, enquanto o trote é rápido.",
      "O galope é uma marcha rápida, enquanto o trote é lento.",
      "O galope tem quatro tempos, enquanto o trote tem dois tempos.",
      "O galope é uma marcha lateral, enquanto o trote é uma marcha diagonal.",
    ],
    resposta: 2,
    dificuldade: "Média",
  },

  {
    q: "Qual é a função do estribo na equitação?",
    opcoes: [
      "Controlar a direção do cavalo",
      "Dar equilíbrio ao cavaleiro",
      "Proteger os cascos do cavalo",
      "Aumentar a velocidade do cavalo",
    ],
    resposta: 1,
    dificuldade: "Média",
  },

  {
    q: 'Em que país originou-se a modalidade de equitação conhecida como "doma vaquera"?',
    opcoes: ["México", "Itália", "França", "Espanha"],
    resposta: 3,
    dificuldade: "Média",
  },

  {
    q: "Qual é o nome da corrida de cavalos mais longa do mundo, com uma distância de mais de 5.600 quilômetros?",
    opcoes: [
      "Kentucky Derby",
      "Grand National",
      "Melbourne Cup",
      "Mongol Derby",
    ],
    resposta: 3,
    dificuldade: "Média",
  },

  {
    q: 'O que significa a expressão "amblar" no contexto dos cavalos?',
    opcoes: [
      "Uma forma de galope",
      "Uma marcha lateral",
      "Um tipo de salto",
      "Um movimento de trote",
    ],
    resposta: 1,
    dificuldade: "Média",
  },
  //Fim médias

  //Início Difíceis

  {
    q: "O cavalo de corrida mais rápido registrado atingiu uma velocidade de mais de 88 km/h.",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 0,
    dificuldade: "Difícil",
  },

  {
    q: 'O esporte equestre chamado "enduro" envolve provas de resistência de longa distância, geralmente de 160 km ou mais.',
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 0,
    dificuldade: "Difícil",
  },

  {
    q: 'A modalidade de hipismo conhecida como "coudelaria" é focada na reprodução seletiva de cavalos para melhorar características específicas.',
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 1,
    dificuldade: "Difícil",
  },

  {
    q: "Qual é a altura mínima exigida para um cavalo de competição no esporte de salto?",
    opcoes: ["14.2 mãos", "15.2 mãos", "16 mãos", "17 mãos"],
    resposta: 2,
    dificuldade: "Difícil",
  },

  {
    q: 'O que é a "sela de rédeas" no contexto do hipismo ocidental?',
    opcoes: [
      "Uma sela com rédeas mais curtas para maior controle",
      "Uma sela usada exclusivamente em competições de rédeas",
      "Uma sela de alta tecnologia com sensores de movimento",
      "Uma sela específica para cavalos de rédeas árabes",
    ],
    resposta: 0,
    dificuldade: "Difícil",
  },

  {
    q: "Qual é o nome do padrão de pelagem de um cavalo que tem manchas brancas em uma base escura, semelhante a um dálmata?",
    opcoes: ["Tobiano", "Tobiano", "Palomino", "Appaloosa"],
    resposta: 3,
    dificuldade: "Difícil",
  },

  {
    q: 'Em qual país o esporte equestre chamado "charreria" é mais tradicionalmente praticado?',
    opcoes: ["Argentina", "México", "Espanha", "França"],
    resposta: 1,
    dificuldade: "Difícil",
  },

  {
    q: 'O que é a "voltige", uma disciplina equestre praticada internacionalmente?',
    opcoes: [
      "Corrida de cavalos em linha reta",
      "Salto sobre obstáculos em alta velocidade",
      "Ginástica acrobática em cima de um cavalo em movimento",
      "Adestramento avançado com movimentos coreografados",
    ],
    resposta: 2,
    dificuldade: "Difícil",
  },

  {
    q: "Qual é a altura média do obstáculo mais alto em competições de salto de obstáculos?",
    opcoes: ["1 metro", "1,30 metros", "1,60 metros", "2 metros"],
    resposta: 2,
    dificuldade: "Difícil",
  },

  {
    q: 'O que é a "sela vaquera" no contexto dos esportes equestres?',
    opcoes: [
      "Uma sela exclusiva para vaqueiros",
      "Uma sela utilizada em competições de rédeas",
      "Uma sela de salto com design ocidental",
      "Uma sela usada em competições de corrida de barris",
    ],
    resposta: 0,
    dificuldade: "Difícil",
  },
  //Fim Difícil
];
