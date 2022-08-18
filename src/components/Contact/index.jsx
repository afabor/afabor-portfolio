import React, { useState } from "react";
import { useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vg5kahk",
        "template_gpnz6de",
        formRef.current,
        "zgnYDXwm9p3rSu4u7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <div className="info">
          <div className="item">
            <img src="assets/github.png" className="icon" alt="" />
          </div>
          <div className="item">
            <img src="assets/email.png" className="icon" alt="" />
          </div>
          <div className="item">
            <img src="assets/phone-call.png" className="icon" alt="" />
          </div>
        </div>
      </div>
      <div className="left">
        <h1>Keep in touch.</h1>
      </div>
      <div className="right">
        <p className="desc">
          <b>Let's work together.</b> I will be sure to respond as soon as
          possible. Hope to hear from you soon.
        </p>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea rows={5} placeholder="Message" name="message"></textarea>
          <button type="submit">send</button>
          {message && <span>Thank you, I'll respond as soon as possible</span>}
        </form>
      </div>
    </div>
  );
}
