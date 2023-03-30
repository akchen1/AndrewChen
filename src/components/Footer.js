import React from "react";
import {useState} from "react";
import {send} from "emailjs-com";
import "../styles/Footer.css";
export const Footer = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Andrew",
    message: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      `${process.env.REACT_APP_SERVICE_KEY}`,
      `${process.env.REACT_APP_TEMPLATE_KEY}`,
      toSend,
      `${process.env.REACT_APP_PUBLIC_KEY}`
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({
          from_name: "",
          to_name: "Andrew",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-container-top">
          <div className="footer-contact-container">
            <h1>Contact</h1>
            <p>
              I would live to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="footer-input-container">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="from_name"
                placeholder="NAME"
                className="footer-input"
                value={toSend.from_name}
                onChange={handleChange}
                required={true}
              ></input>
              <input
                type="email"
                name="reply_to"
                placeholder="EMAIL"
                className="footer-input"
                onChange={handleChange}
                value={toSend.reply_to}
                required={true}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              ></input>
              <textarea
                className="footer-input"
                name="message"
                placeholder="MESSAGE"
                rows={5}
                onChange={handleChange}
                value={toSend.message}
                required={true}
              ></textarea>
              <button type="submit">
                <p>SEND MESSAGE</p>
              </button>
            </form>
          </div>
        </div>
        <div className="line-break"></div>
        <footer>
          <h3>Andrew Chen</h3>
          <div className="image-container">
            <img
              src={"/assets/images/icon-github.svg"}
              alt="github link"
              className="image-icons"
              onClick={() =>
                window.open("https://github.com/akchen1", "_blank")
              }
            ></img>
            <img
              src={"/assets/images/icon-linkedin.svg"}
              alt="linkedin link"
              className="image-icons"
              onClick={() =>
                window.open("https://www.linkedin.com/in/akchen1/", "_blank")
              }
            ></img>
          </div>
        </footer>
      </div>
    </div>
  );
};
