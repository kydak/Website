//Luke's super awesome technology quiz; quizzes people on their knowledge of the history of computers
function startthequiz() {
	var score = [] //Array that tracks the scores.
	var cancel = 0 //tracks the cancel button's status
	var choice = 0 //quiz uses this to track the users choice - 1,2,3, or 4
	var correct = [] //array to track the number of correct questions.
	var question = ["Question 1. What year did the IBM 5150 release?\n1. 1980.\n2. 1981.\n3. 1983.\n4. 1984.",
		"Question 2. What year did CP/m release?\n1. 1973.\n2. 1974.\n3. 1975.\n4. 1976.",
		"Question 3. What year did Windows XP release?\n1. 2000.\n2. 2001\n3. 2002.\n4. 2003.",
		"Question 4. What does TB stand for?\n1. Terabyte.\n2. Trillionbyte.\n3. Tablebyte.\n4. Terriblebyte",
		"Question 5. What year was the first terabyte Hard Drive released?\n1. 1901.\n2. 2007.\n3. 2011.\n4. 2017.",
		"Question 6. What programming language is Netflix' frontend client based on?\n1. Javascript.\n2. Python.\n3. C++.\n4. HTML.",
		"Question 7. What is the world's most complicated programming language?\n1. Moo.\n2. Chef.\n3. COBOL.\n4. COW",
		"Question 8. What is the world's most understandable programming language?\n1. HTML.\n2. PHP.\n3. Python.\n4. Javascript.",
		"Question 9. What computer component has the most direct affect on boot-up speed?\n1. RAM.\n2. Storage.\n3. CPU.\n4. Graphics Card.",
		"Question 10. What year was Javascript released?\n1. 1987.\n2. 1994.\n3. 1995.\n4. 1999.",
		"Question 11. What year was Windows 10 released?\n1. 2014.\n2. 2015.\n3. 2016.\n4. 2017.",
		"Question 12. Why is Windows 10 so awful?\n1. Forced updates.\n2. Randomly restarting.\n3. Randomly breaking.\n4. All of the above."]; //The array of the questions

	var answer = ["2", "2", "2", "1", "2", "1", "4", "1", "2", "3", "2", "4"]; //The array of the numerical answers

	while (true) {
		var playernumz = prompt("How many players?") //prompts the user for the number of players

		if (playernumz >= 1 && playernumz <= 9) {
			break 										//if it's a numerical value between 1 and 9, continue
		}
		else {
			alert("Please enter a number between 1 and 9.") // if it's not a numerical answer between 1 and 9, answer again.
		}
	}

	var names = []; // declares an empty array for holding the names
	for (var player = 0; player < playernumz; player++) {						//repeat for each of the # of players.
		names.push(prompt("Hello, Player " + player + ". What is your name?")) // push the player's name into hte name array
		score.push(0) //push a 0 into the (player #) slot in the score array.
		correct.push(0) // push another 0 into the correct array

		alert("Quiz begin.\nYou can press cancel at any time to quit.")
		for (var qnum = 0; qnum != question.length; qnum++) //Declares Qnum as 0, repeats 10 times (as long as qnum is less than 10, which is the length of the array "question") and after each loop, increases qnum by 1
		{
			choice = null // nulls out choice so that the cancel to quit works
			while (true) //An otherwise infinite loop will be broken out of if they answer the question
			{
				choice = prompt(question[qnum]) //prompts the user from the number qnum question from the array of questions
				if (choice == answer[qnum] || choice == answer[qnum] + ".") //Checks if the user's prompt equals the qnum number in the array of answers. also compensates for the user adding a period.
				{
					score[player] = score[player] + 4671
					correct[player] = correct[player] + 1
					alert("Correct! Your score is " + score[player] + ".") //Increases score, correct questions, and declares that the user has answered the question.
					break //break out of the infinite loop, to advance the question
				}
				else if (choice >= 1 && choice <= 4) //if user got the question incorrect, checks if the user answered a numberical value between 1 and 4. if not, restart the loop.
				{
					alert("Incorrect. Your score is " + score[player] + ".") //The user actually answered the question, but got it wrong. set answered to 1 so that the while loop can continue
					break //break out of the infinite loop, to advance the question
				}
				else if (choice === null) //if the user clicks cancel, break out of both of the loops and terminate the quiz early. displays a special message
				{
					cancel = 1
					break
				}
				else //everything else (variables, letters, gibberish, etc.)
				{
					alert("Answer the question.")
				}
			}
			if (cancel == 1) { break } // if cancel = 1 (they clicked the cancel button) break and quit the quiz.

		}

		if (cancel == 0) {
			alert("Well done, " + names[player] + "! Thank you for your participation.") // if the player didn't quit, congratulate the player. scores are given out later.

		}
		else {
			alert("Boo! You quit! Shame on you for quitting, " + names[player] + "!") // if the player quits, shame them and move on to the next player
		}
		cancel = 0 //resets cancel to 0
	} // if this is the last player, continue. otherwise, increment the variable "player" and loop.

	alert("Well done, everyone! Here comes the results!")

	for (var playerxyz = 0; playerxyz != playernumz; playerxyz++) // for each player, read out their name, player number, score, and correct answers.
	{
		alert("Player " + playerxyz + ", " + names[playerxyz] + ", got " + correct[playerxyz] + " questions right, and attained a score of " + score[playerxyz] + "!")
	}
}