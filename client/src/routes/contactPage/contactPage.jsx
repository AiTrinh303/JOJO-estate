import './contactPage.scss'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import { useState } from 'react';
import ContactForm from '../../components/contactForm/contactForm';

const ContactPage = () => {

  const [openForm, setOpenForm] = useState(false)

  return (
    <div className="contactPage">
      <div className="textContainer">  
        <h3 >For All</h3>
        <h1 >Easy to contact us</h1>
        <span className="secondaryText">
            We always ready to help by providing the best services for you. 
            We believe a good place to live can make your life better.
        </span>

        <div className="contactContainer">
            {/* first row */}
            <div className="row">
              <div className="mode">
                <div className="flexStart">
                  <div className="icon">
                    <MdCall size={25} />
                  </div>
                  <div className="detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">099 333 666 999</span>
                  </div>
                </div>
                <div className="button" onClick={() => window.location.href = 'tel:099333666999'}>Call now</div>

              </div>

              <div className="mode">
                <div className="flexStart">
                  <div className="icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">099 333 666 999</span>
                  </div>
                </div>
                <div className="button">Chat now</div>
              </div>
            </div>

            {/* second row */}
            <div className="row">
              <div className="mode">
                <div className="flexStart">
                  <div className="icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">099 333 666 999</span>
                  </div>
                </div>
                <div className="button">Video Call now</div>
              </div>

              <div className="mode">
                <div className="flexStart">
                  <div className="icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">099 333 666 999</span>
                  </div>
                </div>
                <div className="button" onClick={()=> {setOpenForm(true)}}>Message now</div>
              </div>
            </div>
          </div>

          {/* Conditionally render ContactForm based on openForm state */}
          {openForm && <ContactForm openForm={openForm} setOpenForm={setOpenForm} />}
      </div>  

      <div className="imgContainer">
        <img src="/contact.png" alt="Contact" />
      </div>
    </div>
  )
}
 
export default ContactPage
