//Vetor de objetos
var quiz = [
  {
    q: "Qual é o nome do esporte equestre em que os competidores pulam obstáculos em uma pista?",
    opcoes: ["Hipismo", "Adestramento", "Polo", "Corrida de cavalos"],
    resposta: 0,
  },

  {
    q: "Qual destas opções é uma prova de resistência para cavalos?",
    opcoes: [
      "Salto em altura",
      " Corrida de cavalos",
      "Enduro equestre",
      "Adestramento",
    ],
    resposta: 2,
  },

  {
    q: "Qual é o nome da disciplina em que os cavalos executam movimentos precisos em resposta a comandos do cavaleiro?",
    opcoes: ["Hipismo", "Polo", "Corrida de cavalos", "Adestramento"],
    resposta: 3,
  },

  {
    q: 'Qual é o objetivo do esporte equestre chamado "CCE" (Concurso Completo de Equitação)?',
    opcoes: [
      "Salto de obstáculos",
      "Corrida de cavalos",
      "Polo",
      "Combinação de adestramento, cross-country e salto",
    ],
    resposta: 3,
  },

  {
    q: "Em que país o polo é um esporte muito popular?",
    opcoes: ["Estados Unidos", "Reino Unido", "Brasil", "Rússia"],
    resposta: 1,
  },

  {
    q: 'O termo "cernelha" refere-se à parte inferior da pata de um cavalo.',
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 1,
  },

  {
    q: "No polo, os jogadores montam pôneis em vez de cavalos.",
    opcoes: ["Verdadeiro", "Falso"],
    resposta: 1,
  },

  {
    q: "Qual é o nome do esporte equestre em que os cavaleiros competem em um circuito de obstáculos de salto em uma pista fechada?",
    opcoes: ["Polo", "Corrida de cavalos", "Hipismo", "Adestramento"],
    resposta: 2,
  },

  {
    q: "Qual é o termo usado para descrever a cor de um cavalo que é completamente branca?",
    opcoes: ["Alazão", "Baio", "Pampa", "Albinismo"],
    resposta: 3,
  },

  {
    q: "Qual destas disciplinas equestres envolve o treinamento e o controle da movimentação de um cavalo sem a necessidade de sela?",
    opcoes: ["Hipismo", "Adestramento", "Polo", "Equitação à rédea"],
    resposta: 3,
  },

  {
    q: "Qual é o nome da competição de corrida de cavalos mais famosa do mundo?",
    opcoes: [
      "Kentucky Derby",
      "Grande Prêmio de Belmont",
      "Corrida de Preakness",
      "Derby de Epsom",
    ],
    resposta: 0,
  },

  {
    q: "Qual é a função principal do chicote no hipismo?",
    opcoes: [
      "Acelerar o cavalo",
      "Dirigir o cavalo",
      "Sinalizar desobediência",
      "Limpar a pista",
    ],
    resposta: 2,
  },

  {
    q: "Qual é a altura média de um cavalo de raça Pônei Shetland?",
    opcoes: ["12 mãos", "15 mãos", "18 mãos", "10 mãos"],
    resposta: 0,
  },

  {
    q: "Qual é a parte da rédea em que o cavaleiro segura enquanto monta?",
    opcoes: ["Bridão", "Cabresto", "Tala", "Barrigueira"],
    resposta: 0,
  },

  {
    q: "Qual é o nome da primeira corrida da Tríplice Coroa de corrida de cavalos nos Estados Unidos?",
    opcoes: [
      "Kentucky Derby",
      "Belmont Stakes",
      "Preakness Stakes",
      "Derby de Santa Anita",
    ],
    resposta: 0,
  },

  {
    q: "Qual é o nome do esporte equestre que envolve o uso de bois como gado para pastoreio?",
    opcoes: ["Hipismo", "Rédeas", "Rodeio", "Team Penning"],
    resposta: 3,
  },

  {
    q: "Que equipamento é usado para proteger a cabeça do cavalo durante o salto em hipismo?",
    opcoes: ["Peitoral", "Capa", "Boquilha", "Protetor de cabeça"],
    resposta: 3,
  },

  {
    q: "Qual é o termo usado para a área de uma pista de corrida onde as corridas começam e terminam?",
    opcoes: ["Linha de chegada", "Curva", "Reto final", "Reto oposto"],
    resposta: 0,
  },

  {
    q: "Qual é o nome do esporte equestre que envolve o uso de uma bola e um taco montado a cavalo?",
    opcoes: ["Polo", "Hipismo", "Corrida de cavalos", "Adestramento"],
    resposta: 0,
  },

  {
    q: "Qual é a cor mais comum de um cavalo no mundo?",
    opcoes: ["Preto", "Castanho", "Alazão", "Tordilho"],
    resposta: 1,
  },

  {
    q: "Qual é o termo para o ato de escovar o pelo de um cavalo para limpeza e cuidado?",
    opcoes: ["Pentear", "Pastoreio", "Adestramento", "Escovação"],
    resposta: 3,
  },

  {
    q: 'O que é uma "sela" em termos de equipamento equestre?',
    opcoes: [
      "Parte da cabeça do cavalo",
      "Um tipo de couro",
      "Uma espécie de arreio",
      "Uma raça de cavalo",
    ],
    resposta: 2,
  },

  {
    q: "Qual é a parte da sela onde o cavaleiro senta?",
    opcoes: ["Barrigueira", "Estribo", "Travessão", "Assento"],
    resposta: 3,
  },

  {
    q: 'O que é um "freio" em termos de equipamento equestre?',
    opcoes: [
      "Um tipo de alimento para cavalos",
      "Um método de controle do cavalo",
      "Uma peça de roupa para o cavalo",
      "Uma corrida de cavalos",
    ],
    resposta: 1,
  },

  {
    q: 'O que é o "derby" em corridas de cavalos?',
    opcoes: [
      "Uma raça de cavalo",
      "Um tipo de sela",
      "Uma competição de saltos",
      "Uma corrida de longa distância",
    ],
    resposta: 3,
  },

  {
    q: 'Qual é a parte do cavalo que é mais frequentemente medida em "mãos"?',
    opcoes: ["Cauda", "Cabeça", "Altura", "Comprimento"],
    resposta: 2,
  },

  {
    q: 'Onde é realizada a competição de "Rédeas"?',
    opcoes: [
      "Circuito fechado",
      "Circuito aberto",
      "Pista de salto",
      "Pista de corrida",
    ],
    resposta: 0,
  },

  {
    q: "Qual é a competição equestre que envolve movimentos coreografados de dança a cavalo?",
    opcoes: ["Balé a cavalo", "Adestramento", "Dança de salão", "Hipismo"],
    resposta: 1,
  },

  {
    q: 'O que é uma "pista de treinamento" em termos de equitação?',
    opcoes: [
      "Uma pista para corrida de cavalos",
      "Uma área cercada para treinamento de cavalos",
      "Um tipo de equipamento para cavalos",
      "Um local de descanso para cavalos",
    ],
    resposta: 1,
  },

  {
    q: "Qual é o termo para um cavalo que tem manchas brancas em sua pelagem?",
    opcoes: ["Baio", "Alazão", "Pampa", "Malhado"],
    resposta: 2,
  },

  {
    q: 'O que é um "arreio" em termos de equipamento equestre?',
    opcoes: [
      "Uma coleira para cavalos",
      "Um tipo de selim",
      "Uma ferramenta para limpeza de cascos",
      "Um tipo de comida para cavalos",
    ],
    resposta: 1,
  },

  {
    q: "Em que esporte equestre os cavaleiros competem em uma arena para guiar um boi?",
    opcoes: ["Rodeio", "Polo", "Rédeas", "Enduro"],
    resposta: 2,
  },

  {
    q: "Qual é a função principal do capacete em equitação?",
    opcoes: [
      "Proteger os joelhos",
      "Proteger os cotovelos",
      "Proteger a cabeça",
      "Proteger os pés",
    ],
    resposta: 2,
  },

  {
    q: "Qual é o termo para uma raça de cavalo de trabalho conhecida por sua força e tração?",
    opcoes: ["Pônei", "Arábico", "Percheron", "Quarto de milha"],
    resposta: 2,
  },

  {
    q: 'O que é um "trote" em equitação?',
    opcoes: [
      "Um tipo de comida para cavalos",
      "Um movimento rápido",
      "Um passo lento e controlado",
      "Um tipo de salto",
    ],
    resposta: 2,
  },

  {
    q: "Qual é o termo para um cavalo com uma pelagem marrom avermelhada?",
    opcoes: ["Tordilho", "Alazão", "Preto", "Pampa"],
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
