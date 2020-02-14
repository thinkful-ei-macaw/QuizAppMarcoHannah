'use strict';
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color are roses?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'red'
    },
    {
      question: 'What color is the sky?',
      answers: [
        'green',
        'black',
        'blue',
        'pink'
      ],
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
      answers: [
        '3',
        '10',
        '8',
        '11'
      ],
      correctAnswer: '10'
    },
    {
      question: 'What desert is standard at birthday parties?',
      answers: [
        'cake',
        'hot dogs',
        'pizza',
        'lollipops'
      ],
      correctAnswer: 'cake'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
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

function generateStartButton(){
  return `<button>Start Quiz!</button>`;
}

function generateQuizForm(){
  return `<form>
<input id="1" type="radio" name="choice" value="${item.answers[0]}" /> ${item.answers[0]}
<input id="2" type="radio" name="choice" value="${item.answers[1]}" /> ${item.answers[1]}
<input id="3" type="radio" name="choice" value="${item.answers[2]}" /> ${item.answers[2]}
<input id="4" type="radio" name="choice" value="${item.answers[3]}" /> ${item.answers[3]}
</form>`;
}

function generateCorrectResponse(){
  return `'Correct!`;
}

function generateFalseResponse(){
  return `'Incorrect.'`;
}

function generateNextButton(){
  return `<button>Start Quiz!</button>`;
}

function generateHighScore(){
  return `score`;
}

function generateRestartButton(){
  `<button>Restart Quiz</button>`;
}


// These functions return HTML templates 

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderStartButton(){
  $('main').html('generateStartButton()');
}

function renderCorrectResponse(){
  $('main').html('generateCorrectResponse()');
}
function renderFalseResponse(){
  $('main').html('generateFalseResponse()');
}

function render(){
  renderStartButton();
  renderCorrectResponse();
  renderFalseResponse();

}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)