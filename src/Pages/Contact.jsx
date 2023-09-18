import React from 'react'
import ContactForm from '../Components/ContactForm'

export default function Contact() {
    return (
        <section class="contact-section">
            <div class="container">
                <div class="contact-left">
                    <h2>Contact</h2>
                    <ContactForm />
                </div>
                <div class="contact-right">
                    <img src="https://i.ibb.co/7JX6YxV/contact.png" alt="contact" />
                </div>
            </div>
        </section>
    )
}
