import AnimatedLetters from "./animated-letters/animated-letters.component";

function Hero() {
	const letterClass = "text-animate";
	const name = "Akshaya";
	const surname = "Kini";
	const nameArray = name.split("");
	const surnameArray = surname.split("");

	return (
		<div className="max-w-screen h-screen max-h-screen  text-white overflow-x-hidden flex flex-col justify-center items-center">
			{/* <video
				src="/background-compressed.mp4"
				className="full-screen-width object-cover -z-10"
				autoPlay
				loop
				muted
			/> */}

			<span className={letterClass}>Hi, </span>
			<span className={`${letterClass} _14`}> I'm</span>
			<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 m-0">
				<span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
					Akshaya Kini
				</span>
				{/* </h1> */}
				{/* <span className="block font-bold tracking-wider text-3xl z-10">
						<AnimatedLetters
							letterClass={letterClass}
							strArray={nameArray}
							index={15}
						/>
						&nbsp;
						<span className="block font-bold tracking-wider text-4xl z-10 mt-0">
							<AnimatedLetters
								letterClass={letterClass}
								strArray={surnameArray}
								index={25}
							/>
						</span>
					</span> */}
			</h1>
			<h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 __web-inspector-hide-shortcut__">
				Fullstack Developer
			</h2>
			<p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
				Crafting exceptional experiences with
				<span className="text-blue-400"> React</span>,
				<span className="text-purple-400"> Next.js</span>, and
				<span className="text-blue-400"> React Native</span>
			</p>
		</div>
	);
}

export default Hero;
