/* -------- Variables and Arrays--------- */

//this variable will store the data of the selected choice of the user in the displayQuestions function so that it can be evaluated 
//by the checkAnswer function,
// let currentChoice = null;

//this variable will be used to check if the show results function is called, if it was then it will show the reset button
let wasShowResultsCalled = false;

// const listItem = document.createElement("li");
// const choicesInput = document.createElement("input");

//this questions array will hold the question, answers, and choices
//
const AOTquestions = [
    {
        question: "What was the name of the female member in the Levi squad of season 1?",
        choices: ["Petra Ral", "Rico Brzenska", "Annie Leonhart", "Hange Zoe"],
        answers: "Petra Ral"
    },
    
    {
        question: "At the end of season 2, Why was Eren able to use the founder's power?",
        choices: ["He touched Dina Fritz", "Hannes's death motivated him", "He always could use it", "Erwin's speach motivated him"],
        answers: "He touched Dina Fritz"
    },
    {
        question: "What motivates Grisha Jaegar to join the Eldian Restorationists?",
        choices: ["When he found out about sister", "When he found out Zeke was born", "When Eren was born", "When he arrived outside the Wall Maria"],
        answers: "When he found out about sister"
    }, 
    {
        question: "Why did the titan kneel to Ilse Langnar?",
        choices: ["She looked like Ymir", "It was dark, titans need sun to move", "It was healing it's wounds", "No reason, titans just do things"],
        answers: "She looked like Ymir"
    },
    {
        question: "What was the name of Levi's mom?",
        choices: ["Kuchel Ackerman", "Mikasa Ackermen", "Kenny Ackerman", "Historia Reiss"],
        answers: "Kuchel Ackerman"
    },
    {
        question: "In season 4 episode 20, why did Eren get so angry when Freida Reiss was speaking?",
        choices: ["she was cursing him out", "Freida stated that eldians do not deserve to live", 
                "frieda had the founding titan", "frieda was under the influence of the first king's will"],
        answers: "Freida stated that eldians do not deserve to live"
    },
    {
        question: "What caused the Marleyan persecution and enslavement of Eldians occur?",
        choices: ["the first king gave up the fight", "Ymir Fritz's death", "Historia accepted her family name", "Kenny Ackerman murdered Reeve's comapny CEO"],
        answers: "the first king gave up the fight"
    }
    
];


// will hold player's score
//
let score = 0;

//will hold the value of the currenct question
//
let currentQuestion = 0;

// //this will hold the document elements so that the questions can be displayed in the appropriate location on the UI
const questionElement = document.getElementById("question-container");
const choicesElement = document.getElementById("choices-container");

// //this will create variables to hold the values of each array value
// //at the index of current question
// //
// const  questionsChange = AOTquestions[currentQuestion].question;
// const choicesChange = AOTquestions[currentQuestion].choices;
// const answersChange = AOTquestions[currentQuestion].answers;

// //this will contain the div with the id question-container to display the question
// // 
// const questionContainer = document.getElementById("question-container");
// const enterButton = document.getElementById("Enter-btn")

// //this variable will create an H3 element to place the question in
// //the second line will create an unordered list element for the questions
// //
// const questionHeading = document.createElement("h3")
// const choicesList = document.createElement("ul");



// //array to store the selected answers
// const selectedAnswers = [];


/*--------------Other Tools and built in functions--------------*/







/* --------------functions--------------*/

//this function targets a document element and sets the CSS display property to "block" 
//which will help with filling out the complete div width
//conversly hidenextbuntton function will use the css property display set to "none" so it doesnt show
function showNextButton() {
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.style.display = "block";
  }


function hideNextButton() {
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.style.display = "none";
  }
  
//   function hideResetButton() {
//     const resetButton = document.getElementById("resetButton");
//     resetButton.style.display = "none";
// }

// function showResetButton() {
//     currentQuestion = 0;
//     const resetButton = document.getElementById("resetButton");
//     resetButton.style.display = "block";
//    // resetButton.addEventListener("click", displayQuestion)
// //    resetButton.addEventListener("click", => () {
// //     currentQuestion = 0;
//    })
// }



//this function will pull the data from the question property of each array object and display them with the .textContent function
//
function displayQuestion() {

    //this variable will dynamically display each question using the value of currentQuestion as its index
    const displayingQuestion = AOTquestions[currentQuestion];
  

//text content 
    questionElement.textContent = displayingQuestion.question;

//Clearing the answer choices from the previous question
    choicesElement.innerHTML = "";
  

//Creating buttons for each answer choice 
//and adding the text content to match the value of the choice property
//then add an event listener that calls the checkAnswer function created below 
//then we append the value of choice button to the choiceElement created above so that the ui shows these selections
    displayingQuestion.choices.forEach((choice) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", checkAnswer);
        choicesElement.appendChild(choiceButton);
    });
  }





//this function will be used to evaluate the answer given by the UI to the value withing the array
//the event argument allows us to access information about the event happening ie; clicks 
//then the score will increment if the user selected the correct answer.
function checkAnswer(event) {

    //this assigns the text content to a variable so that we can use it to compare values
    const selectedChoice = event.target.textContent;
    //this is the value we are comparing to current question will dynamically increment
    const displayingQuestion = AOTquestions[currentQuestion];
    

    //if the value of rhe selection matches the value of the current answer
    if (selectedChoice === displayingQuestion.answers) {
        score++;
    }
  

    //here we call the hide function so that 
    hideChoices();
  }



//this will select all buttons with the choice-container id and remove listeners after the answer has been eval-ed
function hideChoices() {

    //we use the querySelectorAll built in to select all the button and assigns it to the choice button varibale 
    const choiceButtons = document.querySelectorAll("#choices-container button");

    //then we use the for each method to iterate through the container for each button element
    //listener from the check answer function created above
    //this will make it so  checkasnwer function will no longer be called on the event of clicking
    choiceButtons.forEach((button) => {
        button.removeEventListener("click", checkAnswer);
    });

    //then we call the show next button
    showNextButton();
  }  


//calling the display question function may need to put all functions in an emcompassing function 
//calling init


//this function will assist iterating through the array with the currentQuestion variable as its index
//also it will verify if the currentQuestion value is 
//it will also call the displayQuestion function and hide Nextbutton function so that the user can make a descision 
//without actidentally pressing the next button
//if the current question variable exceeds the lenght of the array it will show the user the final score with showresult
function nextQ() {
    currentQuestion++;
    if (currentQuestion < AOTquestions.length) {
        displayQuestion();
        hideNextButton();
    } else {
        showResults();
        
    }
  }

/*
this function will check the selected answer's index value compare 
it to the index value of the correct answer
then give a score based on if those values match

this function will also end the game if the value of current question exceeds
the lenght of indexes in the array AOTquestions

i will need to add an event listener to the button tag in the HTML document 
so that it will call this method/
 */



//calling the check answer function



//with query selector we will select the first document with the class of container
//then we insert the text concatenated with the score the user got right(incremement value from checkAnswer) and the array lenght of AOT questions
//should read "Results (new line) You score # out of #!"
function showResults() {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h1>Results:</h1>
        <p>You scored ${score} out of ${AOTquestions.length}!</p>
    `;
    // wasShowResultsCalled = true
    // showResetButton();
  }  


//initialize the game  
function init() {
    displayQuestion();
    hideNextButton();
    // hideResetButton()

    // if(wasShowResultsCalled === true){
    //     showResetButton()
    // }
}

init()



