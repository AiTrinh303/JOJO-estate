import './aboutPage.scss'
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
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from '../../lib/accordion'

const AboutPage = () => {
  return (
    <div className="aboutPage">
        <div className="textContainer">  
            <span className="orangeText">Our Value</span>

            <span className="primaryText">Value We Give to You</span>

            <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
            </span>

            <Accordion
                className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
            >
            {data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                    <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton ">
                        <AccordionItemState>
                            {({ expanded }) =>
                                expanded
                                ? setClassName("expanded")
                                : setClassName("collapsed")
                            }
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span
                        className="primaryText"
                        >
                        {item.heading}
                        </span>
                        <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                        </div>
                    </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                </AccordionItem>
                );
            })}
            </Accordion>
        </div>
          
      <div className="imgContainer">
        <img src="/about.png" alt="about" />
      </div>
    </div>
  )
}

export default AboutPage
