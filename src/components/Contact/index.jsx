import React, { useState } from "react";
import { useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [done, setDone] = useState(false);

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
          setDone(true);
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
            <a href="https://github.com/afabor" target="_blank">
              <img src="assets/github.png" className="icon" alt="" />
            </a>
          </div>

          <div className="item">
            <a
              href="https://www.linkedin.com/in/michael-o-989321a7/"
              target="_blank"
            >
              <img src="assets/linkedin.png" className="icon" alt="" />
            </a>
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
          {done && <span>Thank you, I'll respond as soon as possible</span>}
        </form>
      </div>
    </div>
  );
}
