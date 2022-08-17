import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="wrapper"></div>
      <div className="left">
        <h1>Keep in touch.</h1>
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
      <div className="right">
        <p className="desc">
          <b>Let's work together.</b> I will be sure to respond as soon as
          possible. Hope to hear from you soon.
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea rows={5} placeholder="Message" name="message"></textarea>
          <button type="submit">send</button>
          {message && <span>Thank you, I'll respond as soon as possible</span>}
        </form>
      </div>
    </div>
  );
}
