// @Marcus Barnes

// The number of correct answers starts off at 0
var numCorrect = 0;

// Question 1 is prompted to the user and the input value is stored in the question1 var
// **Note the prompt() converts all input into a string data type
var question1 = prompt("What is 2 * 2?");

// The question1 var is then passed to the if conditional statement for evaluation
// The parseInt() takes the string value in the question1 var and converts it into an integer
// If question1 is equal to the integer 4 in both data type & value then the numCorrect var increases by one
if (parseInt(question1) === 4) {
	numCorrect ++;
}

// Question 2 is prompted to the user and the input value is stored in the question2 var
var question2 = prompt("What color does red and yellow make when mixed?");

// The question2 var is then passed to the if conditional statement for evaluation
// The toLowerCase() converts the user input stored in the question2 var to be all lower case
// If question2 is equal to the string value in both data type & value then the numCorrect var increases by one
if (question2.toLowerCase() === 'orange') {
	numCorrect ++;
}

// Question 3 is prompted to the user and the input value is stored in the question3 var
var question3 = prompt("Where does milk come from?");

// The question3 var is then passed to the if double (OR) conditional statements for evaluation
// The toLowerCase() converts the user input stored in the question3 var to be all lower case
// This multiple test condition tests to see if question3 is equal to cow or cows
// If one of there conditions are true then the numCorrect var increases by one
if (question3.toLowerCase() === 'cow' || question3.toLowerCase() === 'cows' ) {
	numCorrect ++;
}

// Question 4 is prompted to the user and the input value is stored in the question4 var
var question4 = prompt("How do you spell 10?");

// The question4 var is then passed to the if conditional statement for evaluation
// The toLowerCase() converts the user input stored in the question4 var to be all lower case
// If question4 is equal to the string value 'ten' in both data type & value then the numCorrect var increases by one
if (question4.toLowerCase() === 'ten') {
	numCorrect ++;
}

// Question 5 is prompted to the user and the input value is stored in the question5 var
var question5 = prompt("How many years are in a decade?");

// The question5 var is then passed to the if conditional statement for evaluation
// The parseInt() takes the string value in the question5 var and converts it into an integer
// If question5 is equal to the integer 10 in both data type & value then the numCorrect var increases by one
if (parseInt(question5) === 10) {
	numCorrect ++;
}

// Question 5 is prompted to the user and the input value is stored in the question5 var
var question6 = prompt("BONUS! See if you can guess a number between 1 and 10.");

// This randomNum var will hold a number between 1 and 10
// 1)Math.random() returns a number between [0 , 1)
// 2)The Math.random() return value is multiplied by 10 ex.(0.45...... * 10) => 4.5
// 3)Math.floor will then round down 4.5 => 4
// 4)Then 4 + 1 will give the randomNum var the value of 5 thus the values will never be 0 to 10 but only 1 to 10
var randomNum = Math.floor(Math.random() * 10) + 1;

// The question6 var is then passed to the if conditional statement for evaluation
// The parseInt() takes the string value in the question5 var and converts it into an integer
// If question6 is equal to the randomNum integer in both data type & value then the numCorrect var increases by one
if (parseInt(question6) === randomNum) {
	numCorrect ++;
	// Dispalys an alert box letting the user know if they guessed the correct number
	alert("You guessed correct! The number was indeed " + randomNum + "!");
}

// The message var will hold the string of the number of questions the user got correct out of 5 with paragraph tag.
var message = "<p>You got <strong>" + numCorrect + "</strong> out of 5 correct.</p>";
// The massage var takes a string concatenation of the user input (guessed number) and the randomly generated number that is between 1 & 10
message += "<p>The number you guessed was <strong>" + question6 + "</strong> the random number was " + randomNum + "!</p>";

// This prints the message var to the page
document.write(message);

// These conditional statements check to see how many answers the user got correct out of 6
if (numCorrect === 6) {
	// if all quetions including the bonus question was answered correctly then user receives a Platinum crown!
	document.write("<p>Congratulations you've earned a Platinum crown!</p>")
} else if (numCorrect === 5) {
	// if only five questions were answered correctly then the user receives gold crown
	document.write("<p>Congratulations you've earned a Gold crown!</p>");
} else if (numCorrect >= 3) {
	// if three or four questions were answered correctly then the user receives silver crown
	document.write("<p>Congratulations you've earned a Silver crown!</p>");
} else if (numCorrect >= 1) {
	// if one or two questions were answered correctly then the user receives bronze crown
	document.write("<p>Congratulations you've earned a Bronze!</p>");
} else {
	// else if 0 were answered correctly then the user does not receive anything
	document.write("<p>Sorry try again next time.</p>");
}
