// import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import GithubIcon from "@/assets/svgs/github.svg?react";
// import EmailIcon from "@/assets/svgs/email.svg?react";

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
		<div
			className="max-w-2xl h-[60vh] mx-auto p-8 relative flex flex-col  items-center border-t mt-8"
			id="contact"
		>
			<h2 className="section-heading">CONTACT ME</h2>
			<p>Sparked your interest ? Please don't hesitate to contact me!</p>
			<div className="flex justify-around gap-8 mt-4">
				<a
					href="https://github.com/akshkin"
					title="Go to Github profile"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/assets/svgs/github.svg"
						color="white"
						alt="GitHub"
						className="icon"
						width={30}
						height={30}
					/>
				</a>
				<a href="mailto:akshaya.kini12@gmail.com" title="Send Email">
					<Mail size={30} />
				</a>
			</div>
		</div>
		// </AnimationOnScroll>
	);
}

export default Contact;
