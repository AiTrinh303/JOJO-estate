import { useRef } from 'react';
import './contactForm.scss'
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'

const ContactForm = ({openForm, setOpenForm}) => {

    const form = useRef(null);
    const closeForm = (e) => {
        if (e.target === form.current) {
            setOpenForm(false)
        }const handleSubmit = (e) => {
            e.preventDefault();
          
            emailjs
              .sendForm(
                "service_5ytr1n6", 
                template_ejxnkkf, 
                form.current, {
                   publicKey: process.env.REACT_APP_PUBLIC_KEY,
                })
              .then(
                () => {
                  console.log('SUCCESS!');
                  Swal.fire({
                    title: 'Success!',
                    text: 'Message sent successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })  
                  form.current.reset();      
                },
                (error) => {
                  console.log('FAILED...', error.text);
                  Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
                },
              );
          };
    }




  return (
    <div ref={form} className={`container ${openForm ? '' : 'hide'}`} onClick={closeForm}>
        <div className='wrap'>
            <h1>Contact Form</h1>
            <p> Feel free to reach out to us for any questions! </p>
        <form onSubmit={handleSubmit} >
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
