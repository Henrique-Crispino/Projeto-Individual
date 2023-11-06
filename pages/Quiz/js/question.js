//Vetor de objetos
var quiz = [
  {
    q: "Qual é o nome do esporte equestre em que os competidores pulam obstáculos em uma pista?",
    options: ["Hipismo", "Adestramento", "Polo", "Corrida de cavalos"],
    answer: 0,
  },

  {
    q: "Qual destas opções é uma prova de resistência para cavalos?",
    options: [
      "Salto em altura",
      " Corrida de cavalos",
      "Enduro equestre",
      "Adestramento",
    ],
    answer: 2,
  },

  {
    q: "Qual é o nome da disciplina em que os cavalos executam movimentos precisos em resposta a comandos do cavaleiro?",
    options: ["Hipismo", "Polo", "Corrida de cavalos", "Adestramento"],
    answer: 3,
  },

  {
    q: 'Qual é o objetivo do esporte equestre chamado "CCE" (Concurso Completo de Equitação)?',
    options: [
      "Salto de obstáculos",
      "Corrida de cavalos",
      "Polo",
      "Combinação de adestramento, cross-country e salto",
    ],
    answer: 3,
  },

  {
    q: "Em que país o polo é um esporte muito popular?",
    options: ["Estados Unidos", "Reino Unido", "Brasil", "Rússia"],
    answer: 1,
  },

  {
    q: 'O termo "cernelha" refere-se à parte inferior da pata de um cavalo.',
    options: ["Verdadeiro", "Falso"],
    answer: 1,
  },

  {
    q: "No polo, os jogadores montam pôneis em vez de cavalos.",
    options: ["Verdadeiro", "Falso"],
    answer: 1,
  },

  {
    q: "Qual é o nome do esporte equestre em que os cavaleiros competem em um circuito de obstáculos de salto em uma pista fechada?",
    options: ["Polo", "Corrida de cavalos", "Hipismo", "Adestramento"],
    answer: 2,
  },

  {
    q: "Qual é o termo usado para descrever a cor de um cavalo que é completamente branca?",
    options: ["Alazão", "Baio", "Pampa", "Albinismo"],
    answer: 3,
  },

  {
    q: "Qual destas disciplinas equestres envolve o treinamento e o controle da movimentação de um cavalo sem a necessidade de sela?",
    options: ["Hipismo", "Adestramento", "Polo", "Equitação à rédea"],
    answer: 3,
  },

  {
    q: "Qual é o nome da competição de corrida de cavalos mais famosa do mundo?",
    options: [
      "Kentucky Derby",
      "Grande Prêmio de Belmont",
      "Corrida de Preakness",
      "Derby de Epsom",
    ],
    answer: 0,
  },

  {
    q: "Qual é a função principal do chicote no hipismo?",
    options: [
      "Acelerar o cavalo",
      "Dirigir o cavalo",
      "Sinalizar desobediência",
      "Limpar a pista",
    ],
    answer: 2,
  },

  {
    q: "Qual é a altura média de um cavalo de raça Pônei Shetland?",
    options: ["12 mãos", "15 mãos", "18 mãos", "10 mãos"],
    answer: 0,
  },

  {
    q: "Qual é a parte da rédea em que o cavaleiro segura enquanto monta?",
    options: ["Bridão", "Cabresto", "Tala", "Barrigueira"],
    answer: 0,
  },

  {
    q: "Qual é o nome da primeira corrida da Tríplice Coroa de corrida de cavalos nos Estados Unidos?",
    options: [
      "Kentucky Derby",
      "Belmont Stakes",
      "Preakness Stakes",
      "Derby de Santa Anita",
    ],
    answer: 0,
  },

  {
    q: "Qual é o nome do esporte equestre que envolve o uso de bois como gado para pastoreio?",
    options: ["Hipismo", "Rédeas", "Rodeio", "Team Penning"],
    answer: 3,
  },

  {
    q: "Que equipamento é usado para proteger a cabeça do cavalo durante o salto em hipismo?",
    options: ["Peitoral", "Capa", "Boquilha", "Protetor de cabeça"],
    answer: 3,
  },

  {
    q: "Qual é o termo usado para a área de uma pista de corrida onde as corridas começam e terminam?",
    options: ["Linha de chegada", "Curva", "Reto final", "Reto oposto"],
    answer: 0,
  },

  {
    q: "Qual é o nome do esporte equestre que envolve o uso de uma bola e um taco montado a cavalo?",
    options: ["Polo", "Hipismo", "Corrida de cavalos", "Adestramento"],
    answer: 0,
  },

  {
    q: "Qual é a cor mais comum de um cavalo no mundo?",
    options: ["Preto", "Castanho", "Alazão", "Tordilho"],
    answer: 1,
  },

  {
    q: "Qual é o termo para o ato de escovar o pelo de um cavalo para limpeza e cuidado?",
    options: ["Pentear", "Pastoreio", "Adestramento", "Escovação"],
    answer: 3,
  },

  {
    q: 'O que é uma "sela" em termos de equipamento equestre?',
    options: [
      "Parte da cabeça do cavalo",
      "Um tipo de couro",
      "Uma espécie de arreio",
      "Uma raça de cavalo",
    ],
    answer: 2,
  },

  {
    q: "Qual é a parte da sela onde o cavaleiro senta?",
    options: ["Barrigueira", "Estribo", "Travessão", "Assento"],
    answer: 3,
  },

  {
    q: 'O que é um "freio" em termos de equipamento equestre?',
    options: [
      "Um tipo de alimento para cavalos",
      "Um método de controle do cavalo",
      "Uma peça de roupa para o cavalo",
      "Uma corrida de cavalos",
    ],
    answer: 1,
  },

  {
    q: 'O que é o "derby" em corridas de cavalos?',
    options: [
      "Uma raça de cavalo",
      "Um tipo de sela",
      "Uma competição de saltos",
      "Uma corrida de longa distância",
    ],
    answer: 3,
  },

  {
    q: 'Qual é a parte do cavalo que é mais frequentemente medida em "mãos"?',
    options: ["Cauda", "Cabeça", "Altura", "Comprimento"],
    answer: 2,
  },

  {
    q: 'Onde é realizada a competição de "Rédeas"?',
    options: [
      "Circuito fechado",
      "Circuito aberto",
      "Pista de salto",
      "Pista de corrida",
    ],
    answer: 0,
  },

  {
    q: "Qual é a competição equestre que envolve movimentos coreografados de dança a cavalo?",
    options: ["Balé a cavalo", "Adestramento", "Dança de salão", "Hipismo"],
    answer: 1,
  },

  {
    q: 'O que é uma "pista de treinamento" em termos de equitação?',
    options: [
      "Uma pista para corrida de cavalos",
      "Uma área cercada para treinamento de cavalos",
      "Um tipo de equipamento para cavalos",
      "Um local de descanso para cavalos",
    ],
    answer: 1,
  },

  {
    q: "Qual é o termo para um cavalo que tem manchas brancas em sua pelagem?",
    options: ["Baio", "Alazão", "Pampa", "Malhado"],
    answer: 2,
  },

  {
    q: 'O que é um "arreio" em termos de equipamento equestre?',
    options: [
      "Uma coleira para cavalos",
      "Um tipo de selim",
      "Uma ferramenta para limpeza de cascos",
      "Um tipo de comida para cavalos",
    ],
    answer: 1,
  },

  {
    q: "Em que esporte equestre os cavaleiros competem em uma arena para guiar um boi?",
    options: ["Rodeio", "Polo", "Rédeas", "Enduro"],
    answer: 2,
  },

  {
    q: "Qual é a função principal do capacete em equitação?",
    options: [
      "Proteger os joelhos",
      "Proteger os cotovelos",
      "Proteger a cabeça",
      "Proteger os pés",
    ],
    answer: 2,
  },

  {
    q: "Qual é o termo para uma raça de cavalo de trabalho conhecida por sua força e tração?",
    options: ["Pônei", "Arábico", "Percheron", "Quarto de milha"],
    answer: 2,
  },

  {
    q: 'O que é um "trote" em equitação?',
    options: [
      "Um tipo de comida para cavalos",
      "Um movimento rápido",
      "Um passo lento e controlado",
      "Um tipo de salto",
    ],
    answer: 2,
  },

  {
    q: "Qual é o termo para um cavalo com uma pelagem marrom avermelhada?",
    options: ["Tordilho", "Alazão", "Preto", "Pampa"],
    answer: 1,
  },

  {
    q: 'O que é uma "estrebaria" em termos de equitação?',
    options: [
      "Um lugar para limpar o cavalo",
      "Um tipo de sela",
      "Um abrigo para cavalos",
      "Um movimento de salto",
    ],
    answer: 2,
  },

  {
    q: "Qual é o termo para a prática de montar um cavalo em ritmo acelerado?",
    options: ["Trote", "Galope", "Andadura", "Marcha"],
    answer: 1,
  },

  {
    q: "Em que esporte equestre os cavaleiros correm em uma pista oval?",
    options: ["Polo", "Rédeas", "Enduro", "Corrida de cavalos"],
    answer: 3,
  },

  {
    q: "Em que disciplina equestre os cavalos executam uma série de movimentos de alta escola, incluindo saltos no lugar e meia-volta?",
    options: ["Doma clássica", "CCE", "Rédeas", "Corrida de cavalos"],
    answer: 0,
  },

  {
    q: "Qual é o termo para a área em uma pista de corrida onde os cavalos correm em círculos antes de começar a corrida?",
    options: ["Box de largada", "Linha de chegada", "Curva", "Reta final"],
    answer: 2,
  },

  {
    q: "Qual é o nome da peça que cobre as costas do cavalo e fornece suporte para o cavaleiro?",
    options: ["Estribo", "Sela", "Barrigueira", "Cabresto"],
    answer: 1,
  },

  {
    q: "Qual é o termo para o ato de controlar o cavalo com rédeas?",
    options: ["Doma clássica", "Enduro", "Rédeas", "Hipismo"],
    answer: 2,
  },

  {
    q: 'Que parte do cavalo é frequentemente coberta por uma "cabeçada"?',
    options: ["Cabeça", "Casco", "Pescoço", "Boca"],
    answer: 0,
  },

  {
    q: 'O que é um "paddock" em termos de equitação?',
    options: [
      "Uma competição de salto",
      "Um pequeno cercado para cavalos",
      "Um tipo de cela",
      "Uma corrida de longa distância",
    ],
    answer: 1,
  },

  {
    q: "Qual é o termo para a ferramenta usada para limpar os cascos de um cavalo?",
    options: ["Escova", "Espora", "Ferradura", "Picadeira"],
    answer: 2,
  },

  {
    q: 'O que é um "trote" em equitação?',
    options: [
      "Um movimento lento do cavalo",
      "Um som feito pelo cavaleiro",
      "Um tipo de rédea",
      "Um cavalo de grande porte",
    ],
    answer: 0,
  },

  {
    q: 'O que é uma "cauda de cavalo"?',
    options: [
      "Uma raça de cavalo",
      "Um tipo de penteado",
      "Uma competição de salto",
      "Uma peça de arreio",
    ],
    answer: 1,
  },

  {
    q: "Qual é o termo para a estrutura que segura a sela nas costas do cavalo?",
    options: ["Barrigueira", "Estribo", "Cabeçada", "Rédea"],
    answer: 0,
  },

  {
    q: 'O que é o "sprint final" em corridas de cavalos?',
    options: [
      "A parte mais lenta da corrida",
      "Uma corrida de longa distância",
      "O treinamento inicial",
      "A parte mais rápida da corrida",
    ],
    answer: 3,
  },

  {
    q: "Qual é o termo para um cavalo com uma pelagem branca e preta?",
    options: ["Alazão", "Malhado", "Pampa", "Baio"],
    answer: 1,
  },

  {
    q: 'O que é um "jóquei"?',
    options: [
      "Um tipo de corrida",
      "Um tipo de cavalo",
      "Um piloto de corrida de cavalos",
      "Um treinador de cavalos",
    ],
    answer: 2,
  },

  {
    q: "Qual é o termo para o espaço onde os cavalos vivem e são cuidados?",
    options: ["Circuito", "Hipódromo", "Haras", "Sela"],
    answer: 2,
  },

  {
    q: 'O que é o "passo" em equitação?',
    options: [
      "Um movimento rápido do cavalo",
      "Um tipo de alimentação",
      "Um movimento lento do cavalo",
      "Um tipo de cavalo",
    ],
    answer: 2,
  },

  {
    q: 'O que é um "trote" em equitação?',
    options: [
      "Um movimento rápido do cavalo",
      "Um som feito pelo cavaleiro",
      "Um movimento lento do cavalo",
      "Um tipo de rédea",
    ],
    answer: 2,
  },

  {
    q: 'O que é uma "prova de obstáculos"?',
    options: [
      "Um teste de resistência",
      "Uma competição de salto",
      "Um tipo de corrida",
      "Uma exposição de cavalos",
    ],
    answer: 1,
  },

  {
    q: "Qual é o termo para a área onde os cavalos se exercitam e são treinados?",
    options: ["Barrigueira", "Circuito", "Picadeira", "Haras"],
    answer: 2,
  },

  {
    q: 'O que é o "galope"?',
    options: [
      "Um movimento lento do cavalo",
      "Um tipo de corrida",
      "Um cavalo de grande porte",
      "Uma peça de arreio",
    ],
    answer: 1,
  },
];
