import React, { useState } from "react";

type Question = {
  questionText: string;
  answers: { text: string; path: string }[];
};

const questions: Question[] = [
  {
    questionText: "How hands-on do you want to be in designing your jewelry?",
    answers: [
      {
        text: "I want to be very involved and customize everything",
        path: "DIY",
      },
      {
        text: "I’d like to pick from existing designs and make a few adjustments",
        path: "PreDesigned",
      },
      {
        text: "I prefer to have an expert guide me through a personal consultation",
        path: "Consultation",
      },
    ],
  },
  {
    questionText: "What’s your budget for custom jewelry?",
    answers: [
      {
        text: "I’m looking for an affordable option I can personalize myself",
        path: "DIY",
      },
      {
        text: "I’m open to spending more for a unique piece that’s mostly designed for me",
        path: "PreDesigned",
      },
      {
        text: "I’m ready to invest in a high-quality, bespoke piece",
        path: "Consultation",
      },
    ],
  },
  {
    questionText: "How much time can you dedicate to the process?",
    answers: [
      { text: "I prefer something quick and easy", path: "DIY" },
      {
        text: "I have some time to explore and customize designs",
        path: "PreDesigned",
      },
      {
        text: "I want a fully personalized experience, even if it takes longer",
        path: "Consultation",
      },
    ],
  },
  {
    questionText: "What’s most important to you in a custom jewelry piece?",
    answers: [
      {
        text: "I want to have creative control and enjoy the process",
        path: "DIY",
      },
      {
        text: "I’d like something beautiful, but prefer a semi-customized approach",
        path: "PreDesigned",
      },
      {
        text: "I want a completely unique piece made just for me",
        path: "Consultation",
      },
    ],
  },
];

const QuizComponent: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    DIY: 0,
    PreDesigned: 0,
    Consultation: 0,
  });
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState("");

  const handleAnswerClick = (path: string) => {
    setScores({
      ...scores,
      [path]: scores[path as keyof typeof scores] + 1,
    });

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Determine the final path based on the highest score
      const finalResult = Object.keys(scores).reduce((a, b) =>
        scores[a as keyof typeof scores] > scores[b as keyof typeof scores]
          ? a
          : b
      );
      setResult(finalResult);
      setShowResults(true);
    }
  };

  const comparisonChart = (
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Pros</th>
          <th>Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DIY Jewelry Builder</td>
          <td>Affordable, customizable, quick turnaround, more control</td>
          <td>Limited customization options, less unique overall</td>
        </tr>
        <tr>
          <td>Pre-designed Custom Jewelry</td>
          <td>Semi-custom, quicker process, balance of design freedom</td>
          <td>Still not fully unique, limited creative input</td>
        </tr>
        <tr>
          <td>One-on-One Consultation</td>
          <td>Completely unique, expert consultation, highly personalized</td>
          <td>Higher cost, longer lead time, requires more involvement</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div>
      <header>
        <h1>Find Your Custom Jewelry Path</h1>
      </header>

      {showResults ? (
        <div>
          <h2>Your recommended path is: {result}</h2>
          {result === "DIY" ? (
            <div>
              <h3>DIY Jewelry Builder</h3>
              <p>
                This option is perfect for those who want to be hands-on with
                their designs, allowing them to customize key aspects without
                starting from scratch.
              </p>
              <p>
                It offers affordability and a faster turnaround, ideal for those
                who know what they want and want control.
              </p>
              {comparisonChart}
            </div>
          ) : result === "PreDesigned" ? (
            <div>
              <h3>Pre-designed Custom Jewelry</h3>
              <p>
                This option blends customization with convenience by letting you
                modify existing designs, providing a balance of personal touch
                and speed.
              </p>
              <p>
                It’s perfect if you want something unique but don't need to
                design from scratch.
              </p>
              {comparisonChart}
            </div>
          ) : (
            <div>
              <h3>One-on-One Consultation</h3>
              <p>
                In this fully bespoke process, you'll work closely with an
                expert to create a one-of-a-kind piece, from concept to
                completion.
              </p>
              <p>
                This option takes time but results in a completely unique,
                high-quality custom piece.
              </p>
              {comparisonChart}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestionIndex].questionText}</h2>
          {questions[currentQuestionIndex].answers.map((answer, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswerClick(answer.path)}
              style={{ margin: "10px" }}
            >
              {answer.text}
            </button>
          ))}
        </div>
      )}

      <footer>
        <p>&copy; 2024 Papio Creek Gems</p>
      </footer>
    </div>
  );
};

export default QuizComponent;
