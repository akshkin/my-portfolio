// import emailjs from "@emailjs/browser";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./contact.style.scss";
import { ReactComponent as GithubIcon } from "../../assets/svgs/github.svg";
import { ReactComponent as EmailIcon } from "../../assets/svgs/email.svg";

function Contact({ id }) {
  // const form = useRef();

  // function sendEmail(event) {
  //   event.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_9syqat6",
  //       "template_pc9ucdo",
  //       form.current,
  //       "hoo_nkUP9cGUQu31Q"
  //     )
  //     .then(
  //       () => {
  //         alert("Message sent successfully");
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert("Failed to send message. Please try again");
  //       }
  //     );
  // }

  /**
   * 
   * // <form ref={form} onSubmit={sendEmail}>
      //   <input
      //     className="input name"
      //     type="text"
      //     placeholder="Name"
      //     name="name"
      //     required
      //   />
      //   <input
      //     className="input email"
      //     type="email"
      //     placeholder="Email address"
      //     name="email"
      //     required
      //   />
      //   <input
      //     className="input subject"
      //     type="text"
      //     placeholder="Subject"
      //     name="subject"
      //     required
      //   />
      //   <textarea
      //     className="input message"
      //     placeholder="Message"
      //     name="message"
      //     required
      //   />
      //   <button className="submit-btn button" type="submit" value="Send">
      //     Send
      //   </button>
      // </form>
   */

  return (
    // <AnimationOnScroll
    //   animateIn="animate__fadeInLeft"
    //   className="contact-container"
    // >
    <div className="contact-container">
      {/* <img src={imgSource} alt="background" /> */}

      <h3>CONTACT ME</h3>
      <p>Sparked your interest ? Please don't hesitate to contact me!</p>
      <div className="links">
        <a
          href="https://github.com/akshkin"
          title="Github profile"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon fontSize={30} />
        </a>
        <a href="mailto:akshaya.kini12@gmail.com" title="Email">
          <EmailIcon fontSize={30} />
        </a>
      </div>
    </div>
    // </AnimationOnScroll>
  );
}

export default Contact;
