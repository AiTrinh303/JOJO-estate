import './contactPage.scss'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const ContactPage = () => {
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
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">099 333 666 999</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>

              <div className="mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">099 333 666 999</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>

            {/* second row */}
            <div className="row">
              <div className="mode">
                <div className="flexStart">
                  <div className="icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">099 333 666 999</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">099 333 666 999</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
      </div>  

      <div className="imgContainer">
        <img src="/contact.png" alt="Contact" />
      </div>
    </div>
  )
}
 
export default ContactPage
