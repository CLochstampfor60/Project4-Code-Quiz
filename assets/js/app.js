
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector("option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

// push the questions into availableQuestionsArray
function setAvailableQuestions() {
	const totalQuestions = quiz.length;
	for(let i=0; i<totalQuestions; i++){
		availableQuestions.push(quiz[i])
	}
}

function getNewQuestion() {
	questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;
	const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
	currentQuestion = questionIndex;
	questionText.innerHTML = currentQuestion.q;
	const index1 = availableQuestions.indexOf(questionIndex);
	console.log(index1);
	console.log(questionIndex);


	questionCounter++
}

function next() {
	if (questionCounter === quiz.length) {
		console.log("quiz over")
	}
	else{
		getNewQuestion();
	}
}

window.onload = function() {

	setAvailableQuestions();
	getNewQuestion();
}









// console.log(quiz[0]);