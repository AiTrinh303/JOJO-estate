import { useState } from "react";
import { questions } from "../../lib/questions";

import "./FAQPage.scss"; // Import the SCSS file
import SingleQuestion from "../../components/singleQuestion/singleQuestion";

export default function FAQPage() {
  const [cards] = useState(questions);

  return (
    <div className="faq-container">
      <section className="faq-wrapper">
        <h1 className="faq-title">Challenge FAQs</h1>

        <section className="faq-grid">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </div>
  );
}

