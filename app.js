'use strict';

// import { start } from "repl";

/**
 * Example questionnaire structure
 */
const questionnaire = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color are roses?',
      answers: ['red', 'orange', 'pink', 'green'],
      correctAnswer: 'red'
    },
    {
      question: 'What color is the sky?',
      answers: ['green', 'black', 'blue', 'pink'],
      correctAnswer: 'blue'
    },
    {
      question: 'What is the best thing in the world?',
      answers: [
        'puppies crying',
        'dropping your ice cream',
        'coding!',
        'someone eating your leftovers'
      ],
      correctAnswer: 'coding!'
    },
    {
      question: 'What number comes after 9?',
      answers: ['3', '10', '8', '11'],
      correctAnswer: '10'
    },
    {
      question: 'What desert is standard at birthday parties?',
      answers: ['cake', 'hot dogs', 'pizza', 'lollipops'],
      correctAnswer: 'cake'
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
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
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
  return `
  <form id = "multipleChoice" class="question-form">
    <div class="question">
      <legend> ${currentQuestion.question}</legend>
    </div>
    <div class="options">
      <div class="answers">
       ${printAnswers()}
      </div>
      <div class="submit-answer" >
          <button type="button" id = "submitAtoQ">Submit Your Answer</button>
      </div>
      <div class="next-button">
          <button type="button" id = "nextQ">Next Question</button>
      </div> 
      
      <div class="submit-button">
          <button type="submit" id = "submitB">Restart</div>
      </div> 
      <div id="message"></<div>
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

function correctAnswer(){
  return
  `
    </div>
    <p class="colorgreen">You are CORRECT!!</p> 
  </div>
`;

}

function generateResultsScreen() {
  return `
    <div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="row">
            <div class="col-12">
              <legend>Your Score is: ${questionnaire.score}/${questionnaire.questions.length}</legend>
            </div>
            <button type="submit" id = "submitB">Restart</div>
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
    questionnaire.currentQuestion < questionnaire.questions.length
  ) {
    html = printQuestion();
    html += printQuiz();
    $('main').html(html);
  } else {
    
    
    $('main').html(generateResultsScreen());
    




    
    $('main').html(code);
  }
}

$(render());

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function clickonStartManager() {
  $('main').on('click', '#start', function(event) {
    console.log('i hear you');
    questionnaire.quizStarted = true;
    render();
  });
}

function submitManager() {
  $('main').on('click', '.submit-answer', function(event) {
    event.preventDefault();
    console.log('I dance when I submit');
    const currentQ = questionnaire.questions[questionnaire.currentQuestion];
    console.log(currentQ);
    let choice = $('input[type="radio"]:checked').val();
    console.log(choice);
    console.log(currentQ.correctAnswer);
    if (choice === currentQ.correctAnswer) {
      alert('You are correct!');
      $("#message").text("That was right!");
      questionnaire.score++;
      render();
      clickonStartManager();
      correctAnswer();
      
      
      

      
    } 
    else {
      alert('Sorry... That was incorrect. Try again!');

    }      
                     

    render();
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
