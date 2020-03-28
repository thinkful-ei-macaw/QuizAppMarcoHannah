'use strict';

// import { start } from "repl";

/**
 * Example questionnaire structure
 */
const questionnaire = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Best way to prevent coronavirus?',
      answers: ['Stay home', 'Go out with friends', 'Visit with Family', 'Eat garlic!'],
      correctAnswer: 'Stay home'
    },
    {
      question: 'What does social distancing mean?',
      answers: ['To not congregate in large numbers', 'To not talk to friends', 'To stop peting your dog', 'Not calling family'],
      correctAnswer: 'To not congregate in large numbers'
    },
    {
      question: 'What is the main symptom of Coronavirus?',
      answers: [
        'Feeling great',
        'Swollen feet',
        'Having a fever!',
        'Being thirsty'
      ],
      correctAnswer: 'Having a fever!'
    },

    {
      question: 'Who have the highest risk of infection',
      answers: ['Asians', 'Left handed people', 'Teenagers', 'People over 70'],
      correctAnswer: 'People over 70'
    },
    {
      question: 'What to do if you have symptoms',
      answers: ['Go to the emergency room', 'Call your doctor after 4 days', 'Nothing', 'Call 911'],
      correctAnswer: 'Call your doctor after 4 days'
    }
  ],
  quizStarted: false,
  currentQuestion: 0,
  score: 0
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the questionnaire is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING ??
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/
//**THINGS I NEED */
//Start button
//Form with multiple choice (one at a time)
//Response with correct/false
//Next button
//Get score button after fifth question
//Score revealed and play again button

function generateStartButton() {
  return `
  <div class="start-screen">
  <button type="button" id="start">Start Quiz!</button>
  </div>`;
}

function printQuestion() {
  let currentQuestion = questionnaire.questions[questionnaire.currentQuestion];
  return `<ul class="question">
  <li class="current-question">
    Question Number: ${questionnaire.currentQuestion + 1}/${
  questionnaire.questions.length
}
  </li>
  <li id='score'>
  Score: ${questionnaire.score}/${questionnaire.questions.length}
  </li>
</ul>`;
}

function printAnswers() {
  const answersArray =
    questionnaire.questions[questionnaire.currentQuestion].answers;
  let answersHtml = '';
  let i = 0;

  //---------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  answersArray.forEach(answer => {
    answersHtml += `
      <div class= "multipleChoice' id="option-container-${i}">
        <input type="radio" name="options" id="option${i +
          1}" value= "${answer}" tabindex ="${i + 1}" required> 
        <label for="option${i + 1}"> ${answer}</label>
      </div>
    `;
    i++;
  });
  return answersHtml;
}
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

function printQuiz() {
  let currentQuestion = questionnaire.questions[questionnaire.currentQuestion];
  return  `
  <form id = "multipleChoice" class="question-form">
    <div class="question">
      <legend> ${currentQuestion.question}</legend>
    </div>
    <div class="options">
      <div class="answers">
       ${printAnswers()}
      </div>
      <div class ="container">
              <div class="submit-answer" >
                  <button type="submit" value="submit" onClick = "validate()" id = "submitAtoQ">Submit Your Answer</button>
              </div>
              <div class="next-button">
                  <button type="button" id = "nextQ">Next Question</button>
              </div> 
              <div class="submit-button">
                  <button type="submit" id = "submitB">Play Again</div>
              
              <div id="message">
              </<div>
    </div>
    </div>
</form >`;
}

function generateHighScore() {
  return `<div>
    Total Score = ${score / questionnaire.length}
  </div>`;
}

function generateRestartButton() {
  `<button type="button">Restart Quiz</button>`;
}


function generateResultsScreen() {
  return `
    <div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="finalScreen">
            <div class="answersScreen">
              <legend>Your Score is: ${questionnaire.score}/${questionnaire.questions.length}</legend>
            </div>
            <button type="submit" id = "submitB">Play Again</div>
          </div>`
}
// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the questionnaire

function render() {
  let html = '';

  if (questionnaire.quizStarted === false) {
    $('main').html(generateStartButton());
     
    return;
  } else if (
    questionnaire.currentQuestion >= 0 &&
    questionnaire.currentQuestion < questionnaire.questions.length) {

              $("header").css({ "margin-top": "50px" });
              
              html = printQuiz();
              html += printQuestion();
              $('main').html(html);
              $('.submit-button').css({'display':'none'});
              $('.next-button').css({'display':'none'});
            } 
  
  
  else  {
    
        $('main').html(generateResultsScreen());
      
        }

}

$(render());

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)









function clickonStartManager() {
  $('main').on('click', '#start', function(event) {
    questionnaire.quizStarted = true;
    render();
  });
}






function submitManager() {
  $('main').on('click', '.submit-answer', function(event) {
    event.preventDefault();
    let radios = document.getElementsByName("options");
    let formValid = false;
    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {alert("Must check some option!")
    return formValid;
  }

    console.log(radios);
    console.log('I dance when I submit');
    const currentQ = questionnaire.questions[questionnaire.currentQuestion];
    console.log(currentQ);
    let choice = $('input[type="radio"]:checked').val();
    console.log(choice);
    $('#submitAtoQ').css({'display':'none'});
    console.log(currentQ.correctAnswer);

    if (choice === currentQ.correctAnswer) {
      
      $("#message").text("That was right!");
      questionnaire.score++;
      
           
         
    } 
    else {
      
      $("#message").text("That's not correct!");
    }      
                     
    $('.next-button').css({'display':'inline'});
  
  });
}

function nextQManager() {
  $('main').on('click', '#nextQ', function(event) {
    event.preventDefault();
    questionnaire.currentQuestion++;
    console.log('i heard the click on next');
    render();
  });
}





function handleQuiz() {
  render();
  clickonStartManager();
 
  nextQManager();
  submitManager();
  determineScore();
}

$(handleQuiz);