var questionNumber = document.querySelector(".question-number");
var questionText = document.querySelector(".question-text");
var optionContainer = document.querySelector(".option-container");

var questionCounter = 0;
var currentQuestion;
var availableQuestions = [];
var availableOptions = [];

function setAvailableQuestions() {
  var totalQuestion = quiz.length;

  for (var i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}

function getNewQuestion() {
  questionNumber.innerHTML = `Questão ${questionCounter + 1} de ${quiz.length}`;

  var questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;

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
  } else {
    element.classList.add("incorreto");

    var optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (Number(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correto");
      }
    }
  }

  unclickableOptions();
}

function unclickableOptions() {
  var optionLen = optionContainer.children.length;

  for (var i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add("ja_respondido");
  }
}

function next() {
  if (questionCounter === quiz.length) {
    console.log("Fim do quiz");
  } else {
    getNewQuestion();
  }
}

window.onload = function () {
  setAvailableQuestions();

  getNewQuestion();
};
