/*-------------- Variable --------------*/
// will hold player's score
//
let score = 0;

//will hold the value of the currenct question
//
let currentQuestion = 0;

const listItem = document.createElement("li");
const choicesInput = document.createElement("input");


//this questions array will hold the question, answers, and choices
//
const AOTquestions = [
    {
        question: "What was the name of the female member in the Levi squad of season 1?",
        choices: ["Petra Ral", "Rico Brzenska", "Annie Leonhart", "Hange Zoe"],
        answers: "Petra Ral"
    },
    /* 
    {
        question: "In Attack on Titan Season 4 Episode 19, Two Brothers, who were the 3 sets of brothers. (select all that apply)",
        choices: ["Eren and Zeke", "Reiner and Armin", "Falco and Colt", "Porco and Marcel"],
        answers: [0, 2, 3]
    },
    {
        question: "At the end of season 2, Why was Eren able to use the founder's power?",
        choices: ["He touched Dina Fritz", "Hannes's death motivated him", "He always could use it", "Erwin's speach motivated him"],
        answers: 
    },
    {
        question: "When motivates Grisha Jaegar to join the Eldian Restorationists",
        choices: ["When he found out about sister", "When he found out Zeke was born", "When Eren was born", "When he arrived outside the Wall Maria"],
        answers: 0
    },
    {
        question: "Why did the titan kneel to Ilse Langnar",
        choices: ["She looked like Ymir", "It was dark, titans need sun to move", "It was healing it's wounds", "No reason, titans just do things"],
        answers: 0
    },
    {
        question: "What was the name of Levi's mom?",
        choices: ["Kuchel Ackerman", "Mikasa Ackermen", "Kenny Ackerman", "Historia Reiss"],
        answers: 0
    },
    {
        question: "In season 4 episode 20, why did Eren get so angry when Freida Reiss was speaking?",
        choices: ["she was cursing him out", "Freida stated that eldians do not deserve to live", 
                "frieda had the founding titan", "frieda was under the influence of the first king's will"],
        answers: 1
    },
    {
        question: "What caused the Marleyan persecution and enslavement of Eldians occur?",
        choices: ["the first king gave up the fight", "Ymir Fritz's death", "Historia accepted her family name", "Kenny Ackerman murdered Reeve's comapny CEO"],
        answers: 0
    }
    */
];



//this will create variables to hold the values of each array value
//at the index of current question
//
const  questionsChange = AOTquestions[currentQuestion].question;
const choicesChange = AOTquestions[currentQuestion].choices;
const answersChange = AOTquestions[currentQuestion].answers;

//this will contain the div with the id question-container to display the question
// 
const questionContainer = document.getElementById("question-container");
const enterButton = document.getElementById("Enter-btn")

//this variable will create an H3 element to place the question in
//the second line will create an unordered list element for the questions
//
const questionHeading = document.createElement("h3")
const choicesList = document.createElement("ul");



//array to store the selected answers
const selectedAnswers = [];


/*--------------Other Tools and built in functions--------------*/



/* --------------functions--------------*/
/*
this function will display the question and choices
first we select the div containing the question with the id question-container
then we use innerHTML to to map the the values the question and choices indexes
function displayQuestion() {
    
    const  questionsChange = AOTquestions[currentQuestion].question;
    const choicesChange = AOTquestions[currentQuestion].choices

    //questionContainer.innerHTML( questionsChange)
    //choicesChanges.map((choice, index) =>

    //console.log( questionsChange)
};

displayQuestion();
*/
function displayQuestion() {
       //this variable is to dynamically insert the questions in an h2 element we created above
    questionHeading.textContent = AOTquestions[currentQuestion].question;

    //here we append the text content created in above to the questionContainer 
    //so that it is inside the div
    //
    questionContainer.appendChild(questionHeading)
}    
 
//this will iterate through my AOTquestions array's choices within each array object 
//and create a list item for each one
//each list item will have a type of radio, etc.
//and then
//text content at whatever index of that choice item at that index
//interate through the indexes
//then finally append all items 
//

function displayChoices() {

    choicesChange.forEach(function(choice, index) { 
        let currentChoice = null;
        const listItem = document.createElement("li");
        const choicesInput = document.createElement("input");

        choicesInput.type = "radio";
        choicesInput.name = "choice";
        choicesInput.value = choice
        choicesInput.id = 'choice${index +1}' 
    
    
        const choiceLabel = document.createElement("label");
        choiceLabel.textContent = choice;
        choiceLabel.setAttribute("for", 'choice${index +1}');


        listItem.appendChild(choicesInput);
        listItem.appendChild(choiceLabel);
        choicesList.appendChild(listItem);
        
       const chosenAnswer = choicesInput.addEventListener("change", (e) => {
                currentChoice = e.target.value;
        });
        console.log
        enterButton.addEventListener("click", (chosenAnswer) =>{
            if(choicesInput.addEventListener("change", (e) => {
                currentChoice = e.target.value}) === AOTquestions[currentQuestion].answers){

            score++
            console.log(score)
        }
        //this is to incremement the current question so that 
        //it will show the next question after
        
        
    
        // if(currentQuestion < AOTquestions.length){
        //     displayQuestion()
        // }
        // else {
        //     endGame()
        // }
    
    
})
        
            
            


        // console.log(choicesInput)


});


//this is to append the results of the foreach loop for the choices into the question container 
questionContainer.appendChild(choicesList)




}


//calling the display question function may need to put all functions in an emcompassing function 
//calling init
displayChoices()

/*
this function will check the selected answer's index value compare 
it to the index value of the correct answer
then give a score based on if those values match

this function will also end the game if the value of current question exceeds
the lenght of indexes in the array AOTquestions

i will need to add an event listener to the button tag in the HTML document 
so that it will call this method
 */



//calling the check answer function
//checkAnswer() 


function endGame() {

}