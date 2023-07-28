-I will display a welcome image with instructions for the player

-i will initialize a variable to create track of the player's score(similar to the tictactoe game)

-create an array of objects to store the trivia questions, eah with their respective options and correct answer

-use a function to shuffle the order of the questions to make the game more dynamic

-iterate through each questionin a trivia arrray

    -display the question to the player
    
    -display the options for the question
    
    -prompt the player to enter their answer 
    
    -validate their answer against the correct answer
    
    
    -if the answer is correct incremement the score
    
    -if it is incorrect do nothing and move to the next question

-after all questions have been answered display the players final

    score, with an option to view their answers
-display a message asking the user if they want to play again, if yes  
    restart the game if no display a 
    "thanks for playing message" and end the application.







---------------------------------------------------------------------------------------------------------------------------






    1. A user can see information about the game - title, instructions etc (HTML/CSS) and question data should be loaded in JS (init(). 
- Build static HTML / Layout CSS
- Have initialized variables and init() function setting initial values (currentQuestion = 0, etc)
- In your init() provide your buttons with a click event listener - that runs a stubbed function (handleClick)

2. A user can see one question with some way of selecting from multiple answers (radio + submit button) or a button click (DOM update - render () function)
- create a renderQuestion() that populates the question heading content of your HTML with the currentQuestion content
- create a renderOptions() that populates the current answer options (textContent of the button) for your current Question 
- test that the button clicked on returns the text content and store it in a 'currentGuess' variable 

3. When a user selects the answer the game should evaluate if the guess selected is correct and notify the player (a highlighted color, score increase, and/or status message) (evaluateAnswer + render())
- inside of the handleClick function you should compare the selected answer value against the currentQueestion's answer property- if the answer is correct or incorrect update the scoring values
- create a renderOutcome function that changes the UI to let the player know if they answered correctly, or not
- invoke the renderOutcomes

4. After the answer status is updated, a user should be shown a new question and answer combinations (changeQuestion() + render())
- changeQuestion should do the following
	- clear out current guess value 
	- increment the index of the Current question
	- if the currentQuestion is defined (the index value does not exceed the length of the questions list) call renderQuestion()
	   - else call gameOver()
	- update the player that is game over and tell them how many questions they got right / wrong

5. Game over - hide the last question and show the score along with a 'restart button' when the button is clicked it should refresh the page, or re-run your init function and start the game over. 
