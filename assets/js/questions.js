
// Array of Questions
// ****** NOTE: Questions temporarilly 'Commented-Out' until the web developer is able to properly add them to the HTML. **********
// Commented-out questions contain code or items that trigger the html to produce code, rather than the requested 'markType'
// Web developer will come back to this project at a later date to attempt to update the game and correct the above bug.
const quiz = [
{
	q: 'The full form of CSS is:',
	options: ['Cascading Style Sheets', 'Coloured Special Sheets', 'Color and Style Sheets', 'None of the above'],
	answer: 0
},
{
	q: 'How can we change the background color of an element?',
	options: ['background-color', 'color', 'Both A and B', 'None of the above'],
	answer: 0
},
{
	q: 'How can we change the text color of an element?',
	options: ['background-color', 'color', 'Both A and B', 'None of the above'],
	answer: 1
},
{
	q: 'In how many ways can CSS be written in?',
	options: ['1', '2', '3', '4'],
	answer: 3
},
// {
// 	q: 'What type of CSS is the following code snippet? <h1 style="color:blue;">A Blue Heading</h1>',
// 	options: ['Inline', 'Internal', 'External', 'None of the above'],
// 	answer: 0
// },
{
	q: 'What type of CSS is generally recommended for designing large web pages?',
	options: ['Inline', 'Internal', 'External ', 'None of the above'],
	answer: 2
},
// {
// 	q: 'Which HTML tag is used to declare internal CSS?',
// 	options: ['<style> ', '<link>', '<script>', 'None of the above'],
// 	answer: 0
// },
{
	q: 'How can we select an element with a specific ID in CSS?',
	options: ['#', '.', '^', 'None of the above'],
	answer: 0
},
{
	q: 'How can we select an element with a specific Class in CSS?',
	options: ['#', '.', '^', 'None of the above'],
	answer: 1
},
{
	q: 'How can we write comments in CSS?',
	options: ['/* */', '//', '#', 'All of the above'],
	answer: 0
},
{
	q: 'In the below code snippet, in what order will the margins be added? p {margin: 25px 50px 75px 100px;}',
	options: ['Top, Right, Bottom, Left', 'Top, Left, Bottom, Right', 'Top, Bottom, Right, Left', 'Right, Left, Top, Bottom'],
	answer: 0
},
{
	q: 'Can negative values be allowed in padding property?',
	options: ['Yes', 'No', 'Depends on the property', 'None of the above'],
	answer: 1
},
{
	q: 'The CSS property used to specify the transparency of an element is?',
	options: ['opacity ', 'visibility', 'filter', 'None of the above'],
	answer: 0
},
{
	q: 'How can we specify the spacing between each letter in a text in CSS?',
	options: ['alpha-spacing', 'letter-spacing', 'character-spacing', 'None of the above'],
	answer: 1
},
// {
// 	q: 'What is the correct syntax for referring an external CSS?',
// 	options: ['<link rel="stylesheet" type="text/css" href="style.css">', '<style rel="stylesheet" type="text/css" href="style.css">', 'Both A and B', 'None of the above'],
// 	answer: 0
// },
{
	q: 'HTML stands for -',
	options: ['HighText Machine Language', 'HyperText and links Markup Language', 'HyperText Markup Language', 'None of the above'],
	answer: 2
},
{
	q: 'The correct sequence of HTML tags for starting a webpage is -',
	options: ['Head, Title, HTML, body', 'HTML, Body, Title, Head', 'HTML, Head, Title, Body', 'HTML, Head, Title, Body'],
	answer: 3
},
// {
// 	q: 'Which of the following element is responsible for making the text bold in HTML?',
// 	options: ['<pre>', '<a>', '<b>', '<br>'],
// 	answer: 2
// },
// {
// 	q: 'Which of the following tag is used for inserting the largest heading in HTML?',
// 	options: ['<h3>', '<h1>', '<h4>', '<h5>'],
// 	answer: 1
// },
// {
// 	q: 'Which of the following tag is used to insert a line-break in HTML?',
// 	options: ['<br>', '<a>', '<pre>', '<b>'],
// 	answer: 0
// },
// {
// 	q: 'How to create an unordered list (a list with the list items in bullets) in HTML?',
// 	options: ["'<ul>', '<ol>', '<li>', '<i>'"],
// 	answer:0
// },
// {
// 	q: 'Which character is used to represent the closing of a tag in HTML?',
// 	options: [["'\', '!', '/', '.'"]],
// 	answer: 2
// },
// {
// 	q: 'How to create a hyperlink in HTML?',
// 	options: ['<a href = "www.javatpoint.com"> javaTpoint.com </a>', '<a url = "www.javatpoint.com" javaTpoint.com /a>', '<a link = "www.javatpoint.com"> javaTpoint.com </a>', '<a> www.javatpoint.com <javaTpoint.com /a>'],
// 	answer: 0
// },
// {
// 	q: 'How to create an ordered list (a list with the list items in numbers) in HTML?',
// 	options: ['<ul>', '<ol>', '<li>', '<i>'],
// 	answer: 1
// },
// {
// 	q: 'Which of the following element is responsible for making the text italic in HTML?',
// 	options: ['<i>', '<italic>', '<it>', '<pre>'],
// 	answer: 0
// },
// {
// 	q: 'How to insert an image in HTML?',
// 	options: ['<img href = "jtp.png" />', '<img url = "jtp.png" />', '<img link = "jtp.png" /> ', '<img src = "jtp.png" />'],
// 	answer: 3
// },
// {
// 	q: 'How to add a background color in HTML?',
// 	options: ['<marquee bg color: "red">', '<marquee bg-color = "red">', '<marquee bgcolor = "red"> ', '<marquee color = "red">'],
// 	answer: 2
// },
{
	q: '<input> is -',
	options: ['a format tag', 'an empty tag', 'All of the above', 'None of the above'],
	answer: 1
},
// {
// 	q: 'Which of the following tag is used to make the underlined text?',
// 	options: ['<i>', '<ul>', '<u>', '<pre>'],
// 	answer: 2
// },
// {
// 	q: 'How to create a checkbox in HTML?',
// 	options: ['<input type = "checkbox">', '<input type = "button">', '<input type = "button">', '<input type = "check">'],
// 	answer: 0
// },
// {
// 	q: 'Which of the following tag is used to define options in a drop-down selection list?',
// 	options: ['<select>', '<list>', '<dropdown>', '<option>'],
// 	answer: 3
// },
{
	q: 'Javascript is an _______ language?',
	options: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
	answer: 0
},
{
	q: 'Which of the following keywords is used to define a variable in Javascript?',
	options: ['var', 'let', 'Both A and B', 'None of the above'],
	answer: 2
},
{
	q: 'Which of the following methods is used to access HTML elements using Javascript?',
	options: ['getElementbyId()', 'getElementsByClassName()', 'Both A and B', 'None of the above'],
	answer: 2
},
{
	q: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
	options: ['Throws an error', 'Ignores the statements', 'Gives a warning', 'None of the above'],
	answer: 1
},
{
	q: 'Which of the following methods can be used to display data in some form using Javascript?',
	options: ['document.write()', 'console.log()', 'window.alert()', 'None of the above'],
	answer: 3
},
{
	q: 'How can a datatype be declared to be a constant type?',
	options: ['const', 'var', 'let', 'constant'],
	answer: 1
},
// {
// 	q: 'What will be the output of the following code snippet? <script type="text/javascript"> a = 5 + "9"; document.write(a); </script>',
// 	options: ['Compilation Error', '14', 'Runtime Error', '59'],
// 	answer: 3
// },
// {
// 	q: ' What will be the output of the following code snippet? <script type="text/javascript" language="javascript"> var a = "Scaler"; var result = a.substring(2, 4); document.write(result); </script>}',
// 	options: ['al', 'ale', 'cal', 'caler'],
// 	answer: 0
// },
// {
// 	q: 'What will be the output of the following code snippet? <script type="text/javascript" language="javascript"> var x=12; var y=8; var res=eval("x+y"); document.write(res);  </script>',
// 	options: ['20', 'x+y', '128', 'None of the above'],
// 	answer: 0
// },
{
	q: 'When the switch statement matches the expression with the given labels, how is the comparison done?',
	options: ['Both the datatype and the result of the expression are compared.', 'Only the datatype of the expression is compared', 'Only the value of the expression is compared', 'None of the above'],
	answer: 0
},
{
	q: 'What keyword is used to check whether a given property is valid or not?',
	options: ['in', 'is in', 'exists', 'lies'],
	answer: 0
},
{
	q: 'What is the use of the <noscript> tag in JavaScript?',
	options: ['The contents are displayed by non-JS-based browsers.', 'Clears all the cookies and cache', 'Both A and B', 'None of the above'],
	answer: 0
},
// {
// 	q: 'What will be the output of the following code snippet? (function(){setTimeout(()=> console.log(1),2000); console.log(2); setTimeout(()=> console.log(3),0); console.log(4); })();',
// 	options: ['1 2 3 4', '2 3 4 1', '2 4 3 1', '4 3 2 1'],
// 	answer: 2
// },
// {
// 	q: 'What will be the output of the following code snippet? function solve(arr, rotations){ if(rotations == 0) return arr; for(let i = 0; i < rotations; i++){ let element = arr.pop(); arr.unshift(element); } return arr; } solve([44, 1, 22, 111], 5);',
// 	options: ['[111, 44, 1, 22]', '[44, 1, 22, 111]', '[111, 44, 1, 22]', '[1, 22, 111, 44]'],
// 	answer: 0
// },

// {
// 	q: 'What will be the output of the following code snippet? <p id="example"></p> <script> function Func() { document.getElementById("example").innerHTML=Math.sqrt(81); } </script>',
// 	options: ['9', '81', 'Error', '0'],
// 	answer: 0
// },
// {
// 	q: 'What will be the output of the following code snippet? (function(a){ return (function(){ console.log(a); a = 6; })() )(21);',
// 	options: ['6', 'NaN', '21', 'None of the above'],
// 	answer: 2
// },

]


