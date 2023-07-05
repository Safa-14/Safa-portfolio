import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
    const form = useRef();
    const [result, showResult] = useState(false);
    const [isLetterClicked, setIsLetterClicked] = useState(false);
    const [letter, setLetterPosition] = useState('letter hide');


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_zwen33q",
                "template_4dkpmz7",
                form.current,
                "f7pv3aTdvFI1IP9x1"
            )
            .then(
                (result) => {
                    // console.log(result.text);
                    // alert('Message successfully sent!')
                    showResult(true);
                    // window.location.reload(false);
                },
                (error) => {
                    // console.log(error.text);
                    showResult(false);
                    // alert('Failed to send the message, please try again')
                }
            );

        e.currentTarget.reset();
        // showResult(true);
    };

    // hide result
    setTimeout(() => {
        showResult(false);
    }, 10000);

    const ShowContactMessage = (e) => {
        if (!isLetterClicked) {
            setLetterPosition("letter show");
        //     e.currentTarget.firstChild.style.height = "150px";
        // e.currentTarget.firstChild.style.top = "30px";
          } else {
            setLetterPosition("letter hide");
        //     e.currentTarget.firstChild.style.height = "150px";
        // e.currentTarget.firstChild.style.top = "90px";
          }
          setIsLetterClicked(!isLetterClicked);

        
    };
    return (
        <section className='contact' id='contact'>
            <h5>Contact</h5>
            <h2>Let's have a chat</h2>
            <div className="contact_container">
                <div className="letter-content" id="form-wrap" onClick={ShowContactMessage}>
                    <div className={letter}>Be Free to write Me a Message!</div>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea
                        cols="30"
                        rows="10"
                        name="message"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn sendBtn">
                        SEND MESSAGE
                    </button>

                    {/* /*Message showed when the message is send */}
                    <div>
                        {result ? (
                            <p>
                                Your Message has been successfully sent. I will contact you
                                soon.
                            </p>
                        ) : (
                            null
                        )}
                    </div>
                </form>

            </div>

        </section>
    )
}

export default Contact
