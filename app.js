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
      correctAnswer: 0
    },
    {
      question: 'What color is the sky?',
      answers: [
        'green',
        'black',
        'blue',
        'pink'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the best thing in the world?',
      answers: [
        'puppies crying',
        'dropping your ice cream',
        'coding!',
        'someone eating your leftovers'
      ],
      correctAnswer: 2
    },
    {
      question: 'What number comes after 9?',
      answers: [
        '3',
        '10',
        '8',
        '11'
      ],
      correctAnswer: 1
    },
    {
      question: 'What desert is standard at birthday parties?',
      answers: [
        'cake',
        'hot dogs',
        'pizza',
        'lollipops'
      ],
      correctAnswer: 0
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

function generateQuestion(){
  return `<ul class="question">
  <li class="current-question">
    Question Number: ${STORE.currentQuestion + 1}
  </li>
</ul>`
}

function generateQuizForm(){
  return `<form class="question-form">
    <div class="question">
      <legend> ${currentQuestion.question}</legend>
    </div>
    <div class="options">
      <div class="answers">
        ${generateQuestion()}
      </div>
      <div class="next-button">
      <button type="button">Next</button>
      </div>
    </div>
</form >`
}

function generateHighScore(){
  return `<div>
    Total Score = score/STORE.length
  </div>`;
}

function generateRestartButton(){
  `<button>Restart Quiz</button>`;
}


// These functions return HTML templates 

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render(){
  let html = '';
  if (quizStarted === false){
    $('main').html(generateStartButton());
  }
  else if (STORE.currentQuestion >= 0 && STORE.currentQuestion < STORE.questions.length){
    html = generateQuestion();
    html += generateQuizForm();
    $('main').html(html);
  }
  else{
    $('main').html(generateHighScore());
  }
}

$(render());


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)