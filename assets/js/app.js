
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;

// push the questions into availableQuestionsArray.
function setAvailableQuestions() {
	const totalQuestions = quiz.length;
	for(let i=0; i<totalQuestions; i++){
		availableQuestions.push(quiz[i])
	}
}

// Get a new question.
function getNewQuestion() {
	questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;
	
	// Random question generator and posting it to the html.
	const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
	currentQuestion = questionIndex;
	questionText.innerHTML = currentQuestion.q;
	const index1 = availableQuestions.indexOf(questionIndex);
	// Ensures we don't repeat a question, by removing the question from the available array in that specific quiz taking event.
	availableQuestions.splice(index1, 1);

	// Pushes the assigned 
	const optionsLen = currentQuestion.options.length;
	for(let i=0; i<optionsLen; i++) {
		availableOptions.push(i);
	}

	optionContainer.innerHTML = '';
	let animationDelay = 0.2;
// Creates the options in html.
	for(let i=0; i<optionsLen; i++) {
		// Randomized option.
		const optionsIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
		// Pulls the exact position/location of 'optionsIndex' from the availableOptions list.
		const index2 = availableOptions.indexOf(optionsIndex);
				// / Ensures we don't repeat a question, by removing the question from the available array in that specific quiz taking event.
		availableOptions.splice(index2, 1);
		// console.log(optionsIndex);
		// console.log(availableOptions);
		const option = document.createElement("div");
		option.innerHTML = currentQuestion.options[optionsIndex];
		// options.style.animateDelay = animationDelay + 's';
		// animationDelay = animationDelay + 0.2;
		option.id = optionsIndex;
		option.className = "option";
		optionContainer.appendChild(option);
		option.setAttribute("onclick", "getResult(this)");
	}

	console.log(currentQuestion.options);
	questionCounter++;
}

// Get the result of the current attempted question.
function getResult (element) {
	const id = parseInt(element.id);
	console.log(typeof id);
	// Compare the player's chosen answer to the correct answer in the availableIndex associated with question.
	if (id === currentQuestion.answer) {
		// A correct answer option chosen will turn to the color of 'color'.
		element.classList.add("correct");
		// correctAnswers+++;
		console.log("correct: " + correctAnswers);
	} else {
		// A wrong answer option chosen will turn to the color of 'red'.
		element.classList.add("wrong")

		unclickableOptions();
	}
}

// Make all the options unlickable after one of the options are chosen. Restricts player from abusing the game's system to earn a higher score.
function unclickableOptions() {
	const optionsLen = optionContainer.children.length;
	for (let i=0 ; i<optionsLen; i++) {
			optionContainer.children[i].classList.add("already-answered");
	}
}

function next() {
	if (questionCounter === quiz.length) {
		console.log("quiz over")
	}
	else{
		getNewQuestion();
	}
}

function quizOver () {
	quizBox.classList.add("hide");
	resultBox.classList.remove("hide");
	quizResult();
}

function quizResult () {
	resultBox.querySelector(".total-questions").innerHTML = quiz.length;
	resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
	resultBox.querySelector(".total-wrong").innerHTML = quiz.length - correctAnswers;
	resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + quiz.length;
	// resultBox.querySelector(".your-initials").innerHTML = 
}

window.onload = function() {
	setAvailableQuestions();
	getNewQuestion();
}









// console.log(quiz[0]);