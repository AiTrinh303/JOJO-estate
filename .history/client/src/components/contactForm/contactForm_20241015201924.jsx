import React from 'react'

const contactForm = () => {
  return (
    <div className='container'>
        <div className='wrap'>
            <h1>Contact Form</h1>
            <p> Feel free to reach out to us for any questions! </p>
        </div>
        <form>
            <div>Email Me 🚀</div>
            <input  placeholder="Your Email" name="user_email" />
        </form>
      
    </div>
  )
}

export default contactForm
