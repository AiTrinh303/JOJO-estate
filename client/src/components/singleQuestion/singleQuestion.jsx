import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import "./singleQuestion.scss";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question-container">
      <article className="question-header">
        <h2 className="question-title" onClick={() => setShowAnswer(!showAnswer)}>
          {question}
        </h2>
        <ul className="question-icon">
          {!showAnswer && (
            <li>
              <button onClick={() => setShowAnswer(true)}>
                <BsPlusLg />
              </button>
            </li>
          )}
          {showAnswer && (
            <li>
              <button onClick={() => setShowAnswer(false)}>
                <BiMinus />
              </button>
            </li>
          )}
        </ul>
      </article>

      {showAnswer && (
        <article className="question-answer">
          <p>{answer}</p>
        </article>
      )}
    </div>
  );
}
