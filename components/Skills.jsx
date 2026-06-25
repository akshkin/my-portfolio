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
		<div className="mx-auto max-w-3xl pt-8 my-10 scroll-mt-16" id="skills">
			<h2 className="section-heading">SKILLS</h2>
			<ul className="flex flex-wrap justify-center items-center gap-8 mt-8">
				<li className="">
					{/* <HTMLIcon className="icon" /> HTML */}
					<Image
						src="/assets/svgs/html.svg"
						alt="HTML"
						className="icon"
						width={60}
						height={50}
						title="HTML"
					/>
				</li>
				<li className="skills-list-items">
					{/* <CSSIcon className="icon" /> CSS */}
					<Image
						src="/assets/svgs/css.svg"
						alt="CSS"
						className="icon"
						width={60}
						height={50}
						title="CSS"
					/>
				</li>
				<li className="skills-list-items">
					{/* <SCSSIcon className="icon" /> Sass/SCSS */}
					<Image
						src="/assets/svgs/scss.svg"
						alt="Sass/SCSS"
						className="icon"
						width={60}
						height={50}
						title="Sass/SCSS"
					/>
				</li>
				<li className="skills-list-items">
					{/* <JavaScriptIcon className="icon" /> JavaScript */}
					<Image
						src="/assets/svgs/javascript.svg"
						alt="JavaScript"
						className="icon"
						width={60}
						height={50}
						title="Javascript"
					/>
				</li>
				<li className="skills-list-items">
					{/* <JavaScriptIcon className="icon" /> JavaScript */}
					<Image
						src="/assets/svgs/typescript.svg"
						alt="JavaScript"
						className="icon"
						width={60}
						height={50}
						title="Typescript"
					/>
				</li>
				<li className="skills-list-items">
					{/* <ReactIcon className="icon" /> React */}
					<Image
						src="/assets/svgs/reactjs.svg"
						alt="React"
						className="icon"
						width={60}
						height={50}
						title="React"
					/>
				</li>
				<li className="skills-list-items">
					{/* <ReactNativeIcon className="icon" /> React Native */}
					<Image
						src="/assets/svgs/react-native.svg"
						alt="React Native"
						className="icon"
						width={60}
						height={50}
						title="React Native"
					/>
				</li>
				<li className="skills-list-items">
					{/* <ReactNativeIcon className="icon" /> React Native */}
					<Image
						src="/assets/svgs/nextjs.svg"
						alt="NEXT.js"
						className="icon"
						width={60}
						height={50}
						title="NEXT.js"
					/>
				</li>
				<li className="skills-list-items">
					{/* <ResponsiveIcon className="icon" /> Responsive layouts */}
					<Image
						src="/assets/svgs/responsive.svg"
						alt="Responsive layouts"
						className="icon"
						width={60}
						height={50}
						title="Responsive layouts"
					/>
				</li>
				<li className="skills-list-items">
					{/* <StyledComponentsIcon className="icon styled" /> Styled Components */}
					<Image
						src="/assets/svgs/styled-components.svg"
						alt="Styled Components"
						className="icon"
						width={60}
						height={50}
						title="Styled Components"
					/>
				</li>
				<li className="skills-list-items">
					{/* <JestIcon className="icon" /> Jest */}
					<Image
						src="/assets/svgs/jest.svg"
						alt="Jest"
						className="icon"
						width={60}
						height={50}
						title="Jest"
					/>
				</li>
				<li className="skills-list-items">
					{/* <NodeIcon className="icon" /> Node JS */}
					<Image
						src="/assets/svgs/node.svg"
						alt="Node JS"
						className="icon"
						width={60}
						height={50}
						title="Node.js"
					/>
				</li>
				<li className="skills-list-items">
					{/* <NodeIcon className="icon" /> Node JS */}
					<Image
						src="/assets/svgs/csharp.svg"
						alt="C#"
						className="icon"
						width={60}
						height={50}
						title="C#"
					/>
				</li>
				<li className="skills-list-items">
					{/* <NodeIcon className="icon" /> Node JS */}
					<Image
						src="/assets/svgs/dotnet.svg"
						alt="ASP.NET"
						className="icon"
						width={60}
						height={50}
						title="ASP.NET"
					/>
				</li>
				<li className="skills-list-items">
					<img
						src="/images/microsoft-certified-azure-fundamentals.png"
						className="icon"
						alt="Microsoft Certified Azure Fundamentals"
					/>
				</li>
			</ul>
			<p>
				Currently, I am learning{"   "}
				<Image
					src="/assets/svgs/docker.svg"
					alt="Docker"
					className="inline-block ml-4 mr-4 mb-2"
					width={100}
					height={50}
				/>
				and <span className="pl-2 font-extrabold text-2xl">AI</span>
			</p>
		</div>
		// </AnimationOnScroll>
	);
}

export default Skills;
