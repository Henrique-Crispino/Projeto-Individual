var questionNumber = document.querySelector(".question-number");
var questionText = document.querySelector(".question-text");
var optionContainer = document.querySelector(".option-container");

var questionCounter = 0;
var currentQuestion;
var availableQuestions = [];
var availableOptions = [];

function setAvailableQuestions() {
    var totalQuestion = quiz.length;

    for(var i = 0; i < totalQuestion; i++){
        availableQuestions.push(quiz[i]) 
    }
}

function getNewQuestion() {
    questionNumber.innerHTML = `Questão ${questionCounter + 1} de ${quiz.length}`;

    var questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    var index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1,1);

    var optionLen = currentQuestion.options.length;

    for(var i = 0; i < optionLen; i++) {
        availableOptions.push(i)
    }

    for(var i = 0; i < optionLen; i++) {
        var optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]
        var index2 = availableOptions.indexOf(optonIndex)
        availableOptions.splice(index2,1);
        console.log(optonIndex)
        var option = document.createElement("div")
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.className = "option";
        optionContainer.appendChild(option)
    }

   questionCounter++;
}

function next() {
    if (questionCounter === quiz.length) {
        console.log('Fim do quiz');
    } else {
        getNewQuestion();
    }
}

window.onload = function() {
    setAvailableQuestions();

    getNewQuestion();
}