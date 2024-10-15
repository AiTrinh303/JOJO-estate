import './aboutPage.scss';
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../../lib/accordion';

const AboutPage = () => {
  const [expandedItem, setExpandedItem] = useState('collapsed');

  return (
    <div className="aboutPage">
      <div className="textContainer">  
        <h3>Our Value</h3>
        <h1>Value We Give to You</h1>
        <span>
          We are always ready to help by providing the best services for you.
          <br />
          We believe a good place to live can make your life better.
        </span>

        <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {data.map((item, i) => (
            <AccordionItem
              className={`accordionItem ${expandedItem === i ? 'expanded' : 'collapsed'}`}
              uuid={i}
              key={i}
            >
              <AccordionItemHeading>
                <AccordionItemButton
                  className="accordionButton"
                  onClick={() => setExpandedItem(expandedItem === i ? null : i)}
                >
                  <div className="icon">{item.icon}</div>
                  <span className="primaryText">{item.heading}</span>
                  <div className="icon">
                    <MdOutlineArrowDropDown
                      size={20}
                      className={expandedItem === i ? 'rotated' : ''}
                    />
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="secondaryText">{item.detail}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="imgContainer">
        <img src="/about.png" alt="About" />
      </div>
    </div>
  );
};

export default AboutPage;
