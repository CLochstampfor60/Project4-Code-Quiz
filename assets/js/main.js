// Starting work, constants to use later in the functions below.
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionsContainer = document.querySelector(".option-container");
const answersContainer = document.querySelector(".answers-container");
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

	// Pushes the assigned question
	const optionsLen = currentQuestion.options.length;
	for(let i=0; i<optionsLen; i++) {
		availableOptions.push(i);
	}

	// Loads to the html the animation that generates when a physical choice is made on the Quiz Box.
	optionsContainer.innerHTML = '';
	let animationDelay = 0.3;

// Creates the options in html (aka, answer choices to the question on the screen pop-up).
	for(let i=0; i<optionsLen; i++) {
		// Randomized options.
		const optionsIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
		// Pulls the exact position/location of 'optionsIndex' from the availableOptions list.
		const index2 = availableOptions.indexOf(optionsIndex);
				// / Ensures we don't repeat a question, by removing the question from the available array in that specific quiz taking event.
		availableOptions.splice(index2, 1);
		const option = document.createElement("div");
		option.innerHTML = currentQuestion.options[optionsIndex];
		// extra animation commented out to leave for later if I choose to add it back later.
		// options.style.animateDelay = animationDelay + 's';
		// animationDelay = animationDelay + 0.2;
		option.id = optionsIndex;
		option.className = "option";
		optionsContainer.appendChild(option);
		option.setAttribute("onclick", "getResult(this)");
	}

//Once the user is completes their choice, it is accounted for within the console to be used for the Quiz Results page.
// A '1' is added each time to the console for each correctly answered question. 
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
		updateAnswerIndicator("correct");
		correctAnswers++;
		console.log("correct: " + correctAnswers);
	} else {
		// A wrong answer option chosen will turn to the color of 'red'.
		element.classList.add("wrong")
		updateAnswerIndicator("wrong");
		unclickableOptions();
	}
}

// Make all the options unclickable after the user makes a choice. Restricts player from abusing the game's system to earn a higher score.
function unclickableOptions() {
	const optionsLen = optionsContainer.children.length;
	for (let i=0 ; i<optionsLen; i++) {
			optionsContainer.children[i].classList.add("already-answered");
	}
}

// Allows the game to keep track of the amount of correct and incorrect answer choices.
// Keeping track of it allows the information to push to the Quiz Results page at the end.
function answerIndicators() {
	const totalQuestions = quiz.length;
	for(let i=0; i<totalQuestions; i++) {
		const indicator = document.createElement("div");
		answersContainer.appendChild(indicator);
	}
}
// Changes the text to show 'correct/wrong' instead of other words or numbers on the console.
function updateAnswerIndicator(markType) {
	answersContainer.children[questionCounter-1].classList.add(markType);
}
// Method to continue the game based on the remaining questions left. Once complete, the game is over.
function next() {
	if (questionCounter === quiz.length) {
		// console.log("quiz over")
		quizOver();
	}
	else{
		getNewQuestion();
	}
}
// Switches between different boxes once a certain function is complete. Hides one box, 'reveals' another by removing the 'hide' element already implanted.
function quizOver () {
	quizBox.classList.add("hide");
	resultBox.classList.remove("hide");
	quizResult();
}

// Quiz Result page, showing the results on a clean table.
function quizResult () {
	resultBox.querySelector(".total-questions").innerHTML = quiz.length;
	resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
	resultBox.querySelector(".total-wrong").innerHTML = quiz.length - correctAnswers;
	resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + quiz.length;
	// resultBox.querySelector(".your-initials").innerHTML = 
}

function resetQuiz() {
	questionCounter = 0;
	correctAnswers = 0;
}

function tryAgainQuiz() {
	resultBox.classList.add("hide");
	quizBox.classList.remove("hide");
	resetQuiz();
	startQuiz();
}

function goHome() {
	resultBox.classList.add("hide");
	homeBox.classList.remove("hide");
	resetQuiz();
}

// --------------------------Starting Point for the entire game and resetting it.------------------------
function startQuiz() {
	homeBox.classList.add("hide");
	quizBox.classList.remove("hide");
	setAvailableQuestions();
	getNewQuestion();
	answerIndicators();

}

window.onload = function () {
	homeBox.querySelector(".total-questions").innerHTML = quiz.length;
}
