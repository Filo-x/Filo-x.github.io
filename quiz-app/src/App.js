let score = 0;
let currentQuestionIndex = 0;

const questions = [
  {
    question: "What is your favorite color?",
    answers: ["Pink", "Blue", "Yellow", "Green"],
    correctAnswer: "Pink"
  },
  {
    question: "Which animal do you like most?",
    answers: ["Bunny", "Dog", "Cat", "Fish"],
    correctAnswer: "Bunny"
  },
  {
    question: "What's your go-to snack?",
    answers: ["Cupcake", "Fruit", "Cookies", "Chips"],
    correctAnswer: "Cupcake"
  }
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');

function startQuiz() {
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtons.innerHTML = '';  // Clear previous buttons

  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer, question.correctAnswer));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResults();
  }
}

function showResults() {
  questionContainer.style.display = 'none';
  scoreElement.innerText = `You scored ${score} out of ${questions.length}!`;
}

// Start the quiz
startQuiz();
