import { AnimationOnScroll } from "react-animation-on-scroll";
// import HTMLIcon from "@/assets/svgs/html.svg";
// import CSSIcon from "@/assets/svgs/css.svg";
// import ReactIcon from "@/assets/svgs/reactjs.svg";
// import JavaScriptIcon from "@/assets/svgs/javascript.svg";
// import ResponsiveIcon from "@/assets/svgs/responsive.svg";
// import SCSSIcon from "@/assets/svgs/scss.svg";
// import StyledComponentsIcon from "@/assets/svgs/styled-components.svg";
// import JestIcon from "@/assets/svgs/jest.svg";
// import NodeIcon from "@/assets/svgs/node.svg";
// import ReactNativeIcon from "@/assets/svgs/react-native.svg";
import Image from "next/image";

function Skills() {
	return (
		// <AnimationOnScroll className="skills" animateIn="animate__fadeInRight">
		<div className="mx-auto max-w-3xl px-8 pt-8 my-10">
			<h2 style={{ textAlign: "center" }}>SKILLS</h2>
			<ul className="flex flex-wrap justify-center items-center gap-8 mt-8">
				<li className="">
					{/* <HTMLIcon className="icon" /> HTML */}
					<Image
						src="/assets/svgs/html.svg"
						alt="HTML"
						className="icon"
						width={60}
						height={50}
					/>
					HTML
				</li>
				<li className="skills-list-items">
					{/* <CSSIcon className="icon" /> CSS */}
					<Image
						src="/assets/svgs/css.svg"
						alt="CSS"
						className="icon"
						width={60}
						height={50}
					/>
					CSS
				</li>
				<li className="skills-list-items">
					{/* <SCSSIcon className="icon" /> Sass/SCSS */}
					<Image
						src="/assets/svgs/scss.svg"
						alt="Sass/SCSS"
						className="icon"
						width={60}
						height={50}
					/>
					Sass/SCSS
				</li>
				<li className="skills-list-items">
					{/* <JavaScriptIcon className="icon" /> JavaScript */}
					<Image
						src="/assets/svgs/javascript.svg"
						alt="JavaScript"
						className="icon"
						width={60}
						height={50}
					/>
					JavaScript
				</li>
				<li className="skills-list-items">
					{/* <ReactIcon className="icon" /> React */}
					<Image
						src="/assets/svgs/reactjs.svg"
						alt="React"
						className="icon"
						width={60}
						height={50}
					/>
					React
				</li>
				<li className="skills-list-items">
					{/* <ReactNativeIcon className="icon" /> React Native */}
					<Image
						src="/assets/svgs/react-native.svg"
						alt="React Native"
						className="icon"
						width={60}
						height={50}
					/>
					React Native
				</li>
				<li className="skills-list-items">
					{/* <ResponsiveIcon className="icon" /> Responsive layouts */}
					<Image
						src="/assets/svgs/responsive.svg"
						alt="Responsive layouts"
						className="icon"
						width={60}
						height={50}
					/>
					Responsive layouts
				</li>
				<li className="skills-list-items">
					{/* <StyledComponentsIcon className="icon styled" /> Styled Components */}
					<Image
						src="/assets/svgs/styled-components.svg"
						alt="Styled Components"
						className="icon"
						width={60}
						height={50}
					/>
					Styled Components (CSS-in-JS)
				</li>
				<li className="skills-list-items">
					{/* <JestIcon className="icon" /> Jest */}
					<Image
						src="/assets/svgs/jest.svg"
						alt="Jest"
						className="icon"
						width={60}
						height={50}
					/>
					Jest
				</li>
				<li className="skills-list-items">
					{/* <NodeIcon className="icon" /> Node JS */}
					<Image
						src="/assets/svgs/node.svg"
						alt="Node JS"
						className="icon"
						width={60}
						height={50}
					/>
					Node JS
				</li>
				<li className="skills-list-items">
					<img
						src="/images/microsoft-certified-azure-fundamentals.png"
						className="icon"
						alt="Microsoft Certified Azure Fundamentals"
					/>
				</li>
			</ul>
		</div>
		// </AnimationOnScroll>
	);
}

export default Skills;
