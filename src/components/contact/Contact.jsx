import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_1ja8x53", "template_e5e5xp9", form.current, "_nuszcvoOHVdbqllJ").then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>ctndumitrusorin@gmail.com</h5>
                        <a href="mailto:ctndumitrusorin@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsMessenger className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Cotuna Dumitru-Sorin</h5>
                        <a href="https://m.me/cotuna.sorin/" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiWhatsappFill className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+40740849933</h5>
                        <a href="https://api.whatsapp.com/send?phone=40740849933" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Contact;
