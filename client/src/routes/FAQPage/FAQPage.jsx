import { useState } from "react";
import { questions } from "../../lib/questions";

import "./FAQPage.scss"; // Import the SCSS file
import SingleQuestion from "../../components/singleQuestion/singleQuestion";

export default function FAQPage() {
  const [cards] = useState(questions);

  return (
   <div className="faqPage">
      <div className="faq-container">
        <section className="faq-wrapper">
          <h1 className="faq-title">Frequently FAQs</h1>
  
          <section className="faq-grid">
            {cards.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>
        </section>
      </div>
      <div className="imgContainer">
        <img src="/about.png" alt="About" />
      </div>
   </div>
  );
}

