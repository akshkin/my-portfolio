import { AnimationOnScroll } from "react-animation-on-scroll";
import HTMLIcon from "../../assets/svgs/html.svg?react";
import CSSIcon from "../../assets/svgs/css.svg?react";
import ReactIcon from "../../assets/svgs/reactjs.svg?react";
import JavaScriptIcon from "../../assets/svgs/javascript.svg?react";
import ResponsiveIcon from "../../assets/svgs/responsive.svg?react";
import SCSSIcon from "../../assets/svgs/scss.svg?react";
import StyledComponentsIcon from "../../assets/svgs/styled-components.svg?react";
import JestIcon from "../../assets/svgs/jest.svg?react";
import NodeIcon from "../../assets/svgs/node.svg?react";
import ReactNativeIcon from "../../assets/svgs/react-native.svg?react";

import "./skills.styles.scss";

function Skills() {
	return (
		// <AnimationOnScroll className="skills" animateIn="animate__fadeInRight">
		<div className="skills">
			<h2 style={{ textAlign: "center" }}>SKILLS</h2>
			<ul className="skills-list">
				<li className="skills-list-items">
					<HTMLIcon className="icon" /> HTML
				</li>
				<li className="skills-list-items">
					<CSSIcon className="icon" /> CSS
				</li>
				<li className="skills-list-items">
					<SCSSIcon className="icon" /> Sass/SCSS
				</li>
				<li className="skills-list-items">
					<JavaScriptIcon className="icon" /> JavaScript
				</li>
				<li className="skills-list-items">
					<ReactIcon className="icon" /> React{" "}
				</li>
				<li className="skills-list-items">
					<ReactNativeIcon className="icon" /> React Native{" "}
				</li>
				<li className="skills-list-items">
					<ResponsiveIcon className="icon" /> Responsive layouts
				</li>
				<li className="skills-list-items">
					<StyledComponentsIcon className="icon styled" /> Styled Components
					(CSS-in-JS)
				</li>
				<li className="skills-list-items">
					<JestIcon className="icon" /> Jest
				</li>
				<li className="skills-list-items">
					<NodeIcon className="icon" /> Node JS
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
