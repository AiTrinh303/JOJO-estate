import { useRef } from 'react';
import './contactForm.scss';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const ContactForm = ({ openForm, setOpenForm }) => {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_5ytr1n6", 
                "template_ejxnkkf", 
                formRef.current, {
                    publicKey: "HC-QiFRKEiF7eEu5i",
                })
            .then(
                () => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Message sent successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    formRef.current.reset(); 
                },
                (error) => {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Message could not be sent, please try again.',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                    });
                }
            );
    };
    const handleClose = () => {
        setOpenForm(false);
    };

    return (
        <div className={`container ${openForm ? '' : 'hide'}`}>
            <div className='wrap'>
                {/* Nút Close */}
                <button className={`closeButton  ${openForm ? '' : 'hide'}`} onClick={handleClose}>
                    X Close
                </button>

                <h1>Contact Form</h1>
                <p>Feel free to reach out to us for any questions!</p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div>Email Me 🚀</div>
                    <input placeholder="Your Email" name="user_email" required />
                    <input placeholder="Your Name" name="user_name" required />
                    <textarea placeholder="Message" name="message" rows={8} required></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

