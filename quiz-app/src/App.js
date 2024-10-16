import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      question: "What is your favorite color?",
      answers: [
        { text: "Pink", isCorrect: true },
        { text: "Blue", isCorrect: false },
        { text: "Yellow", isCorrect: false },
        { text: "Green", isCorrect: false }
      ]
    },
    {
      question: "Which animal do you like most?",
      answers: [
        { text: "Bunny", isCorrect: true },
        { text: "Dog", isCorrect: false },
        { text: "Cat", isCorrect: false },
        { text: "Fish", isCorrect: false }
      ]
    },
    {
      question: "What's your go-to snack?",
      answers: [
        { text: "Cupcake", isCorrect: true },
        { text: "Fruit", isCorrect: false },
        { text: "Cookies", isCorrect: false },
        { text: "Chips", isCorrect: false }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}!
        </div>
      ) : (
        <div className="quiz-section">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answer.isCorrect)}>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
