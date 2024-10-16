import './contactPage.scss'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="textContainer">  
        <h3 >For All</h3>
        <h1 >Easy to contact us</h1>
        <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            beleive a good blace to live can make your life better{" "}
        </span>
      </div>  

      <div className="imgContainer">
        <img src="/contact.png" alt="Contact" />
      </div>
    </div>
  )
}
 
export default ContactPage
