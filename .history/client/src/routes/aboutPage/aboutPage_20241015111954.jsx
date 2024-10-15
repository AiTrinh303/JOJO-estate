import './aboutPage.scss'
import React, { useState } from "react";
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
            ABOUT PAGE
        </div>
          
      <div className="imgContainer">
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  )
}

export default AboutPage
