import { useRef } from 'react';
import './contactForm.scss'

const ContactForm = ({openForm, setOpenForm}) => {

    const form = useRef(null);
    const closeForm = (e) => {
        if (e.target === form.current) {
            setOpenForm(false)
        }
    }
  return (
    <div ref={form} className={`container ${openForm ? '' : 'hide'}`} onClick={closeForm}>
        <div className='wrap'>
            <h1>Contact Form</h1>
            <p> Feel free to reach out to us for any questions! </p>
        <form>
            <div>Email Me 🚀</div>
            <input placeholder="Your Email" name="user_email" />
            <input placeholder="Your Name" name="user_name" />
            <textarea placeholder="Message" name="message" rows={8} ></textarea>
            <input type="submit" value="Send" />
        </form>
        </div>
      
    </div>
  )
}

export default ContactForm
