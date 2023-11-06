var num_questao = document.querySelector(".question-number");
var texto_questao = document.querySelector(".question-text");
var optionContainer = document.querySelector(".option-container");
var answersIndicatorContainer = document.querySelector(".answers-indicator");
var homeBox = document.querySelector(".home-box");
var quizBox = document.querySelector(".quiz-box");
var resultBox = document.querySelector(".result-box");

var limite_de_questoes = 5;
var questionCounter = 0;
var currentQuestion;
var availableQuestions = [];
var availableOptions = [];
var correctAnswers = 0;
var attempt = 0;

function setAvailableQuestions() {
  var totalQuestion = quiz.length;

  for (var i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}

function getNewQuestion() {
  num_questao.innerHTML = `Questão ${questionCounter + 1} de ${limite_de_questoes}`;

  var questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  texto_questao.innerHTML = currentQuestion.q;

  var index1 = availableQuestions.indexOf(questionIndex);
  availableQuestions.splice(index1, 1);

  var optionLen = currentQuestion.options.length;

  for (var i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }

  optionContainer.innerHTML = "";
  var animationDelay = 0.2;

  for (var i = 0; i < optionLen; i++) {
    var optonIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];

    var index2 = availableOptions.indexOf(optonIndex);
    availableOptions.splice(index2, 1);

    var option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optonIndex];
    option.id = optonIndex;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.2;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }

  questionCounter++;
}

function getResult(element) {
  var id = Number(element.id);

  if (id === currentQuestion.answer) {
    element.classList.add("correto");
    updateAnswerIndicator("correto");
    correctAnswers++;
  } else {
    element.classList.add("incorreto");
    updateAnswerIndicator("incorreto");

    var optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (Number(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correto");
      }
    }
  }
  attempt++;
  unclickableOptions();
}

function unclickableOptions() {
  var optionLen = optionContainer.children.length;

  for (var i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add("ja_respondido");
  }
}

function answersIndicator() {
  answersIndicatorContainer.innerHTML = "";
  var totalQuestion = limite_de_questoes;

  for (var i = 0; i < totalQuestion; i++) {
    var indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}

function next() {
  if (questionCounter === limite_de_questoes) {
    quizOver();
  } else {
    getNewQuestion();
  }
}

function quizOver() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  quizResult();
}

function quizResult() {
  var porcentagem = (correctAnswers / limite_de_questoes) * 100;
  resultBox.querySelector(".total-question").innerHTML = limite_de_questoes;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  resultBox.querySelector(".percentage").innerHTML =
    porcentagem.toFixed(2) + "%";
  resultBox.querySelector(".total-score").innerHTML =
    correctAnswers + " / " + limite_de_questoes;
}

function resetar_quiz() {
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    availableQuestions = [];
}

function tentar_novamente() {
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  resetar_quiz();
  iniciar_quiz();
}

function volte_inicio() {
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetar_quiz()
}

function iniciar_quiz() {
  homeBox.classList.add("hide");
  quizBox.classList.remove("hide");
  setAvailableQuestions();
  getNewQuestion();
  answersIndicator();
};

window.onload = function () {
    homeBox.querySelector(".total-question").innerHTML = limite_de_questoes;
}
