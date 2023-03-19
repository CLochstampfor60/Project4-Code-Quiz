
var questions = [
{
	prompt: "The full form of CSS is:\n(a) Cascading Style Sheets\n(b) Coloured Special Sheets\n(c) Color and Style Sheets\n(d) None of the above",
	answer: "a"
},
{
	prompt: "How can we change the background color of an element?\n(a) background-color\n(b) color\n(c) Both A and B\n(d) None of the above",
	answer: "a"
},
{
	prompt: "How can we change the text color of an element?\n(a) background-color\n(b) color\n(c) Both A and B\n(d) None of the above",
	answer: "b"
},
{
	prompt: "In how many ways can CSS be written in?\n(a) 1\n(b) 2\n(c) 3\n(d) 4",
	answer: "c"
},
{
	prompt: "What type of CSS is the following code snippet? <h1 style='color:blue;'>A Blue Heading</h1> \n(a) Inline\n(b) Internal\n(c) External\n(d) None of the above",
	answer: "b"
},
]
// {
// 	prompt: "?\n(a) \n\ (b) \n(c) \n (d) ",
// 	answer: " ",
// },


var score = 0;

for (var i=0; i < questions.length; i++) {
	var response = window.prompt(questions[i].prompt);
	if(response == questions[i].answer) {
		score++;
		alert("Correct!");
	} else {
		alert("WRONG!");
	}
}

alert("You got " + score + "/" + questions.length + " correct.");