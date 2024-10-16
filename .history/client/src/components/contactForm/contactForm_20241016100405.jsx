import { useRef } from 'react';
import './contactForm.scss';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const ContactForm = ({ openForm, setOpenForm }) => {
    const formRef = useRef(null); // For form submission
    const containerRef = useRef(null); // For checking outside clicks

    // Close form when clicking outside the form area
    const closeForm = (e) => {
        if (e.target === containerRef.current) {  // Ensure the click is on the outer container
            setOpenForm(false);
        }
    };

    // Handle form submission via emailJS
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
                    formRef.current.reset(); // Reset form after success
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

    return (
        <div 
            ref={containerRef} 
            className={`container ${openForm ? '' : 'hide'}`} 
            onClick={closeForm} // Detect clicks outside the form
        >
            <div className='wrap'>
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

