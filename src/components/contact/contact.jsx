import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./contact.style.scss";

function Contact({ id }) {
  const form = useRef();

  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_9syqat6",
        "template_pc9ucdo",
        form.current,
        "hoo_nkUP9cGUQu31Q"
      )
      .then(
        () => {
          alert("Message sent successfully");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message. Please try again");
        }
      );
  }

  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      className="contact-container"
    >
      <img src="/images/splsh.jpg" alt="background" />
      <h3>CONTACT ME</h3>
      <p>Sparked your interest ? Please don't hesitate to contact me!</p>

      <form ref={form} onSubmit={sendEmail}>
        <input
          className="input name"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="input email"
          type="email"
          placeholder="Email address"
          name="email"
          required
        />
        <input
          className="input subject"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea
          className="input message"
          placeholder="Message"
          name="message"
          required
        />
        <button className="submit-btn button" type="submit" value="Send">
          Send
        </button>
      </form>
    </AnimationOnScroll>
  );
}

export default Contact;
