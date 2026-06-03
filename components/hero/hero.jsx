import "./hero.style.scss";
import AnimatedLetters from "../animated-letters/animated-letters.component";

function Hero() {
	const letterClass = "text-animate";
	const name = "Akshaya";
	const surname = "Kini";
	const nameArray = name.split("");
	const surnameArray = surname.split("");

	/**
	 * This is a simple comment
	 * .hero {
	height: 100vh;
	max-height: 100vh;
	max-width: 100%;
	text-align: center;
	color: #ebcade;
	margin-top: 2em;
	// background-image: url("../../assets/images/hero-bg.jpg");
	// background-size: cover;
	// background-color: #484747b0;

	filter: brightness(130%);

	.video-bg {
		@extend %full-screen-width;
		object-fit: cover;
		z-index: -1;
	}

	.hero-content {
		@extend %full-screen-width !optional;
		background-color: rgba(0, 0, 0, 0.566);
		background-blend-mode: multiply;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.hero-title {
			margin-bottom: 0;
			// margin-top: 2.5em;
			font-size: 2rem;
			font-weight: 200;
			word-wrap: no-wrap;
			color: $white;
			text-align: center;

			.accent {
				display: block;
				font-weight: 700;
				letter-spacing: 3px;
				font-size: 3rem;
				z-index: 100;

				.surname {
					display: block;
					margin-top: 0;
				}
			}

			@media (width > 500px) and (width < 950px) and (orientation: landscape) {
				font-size: 2rem;
			}
			@media (min-width: 700px) {
				font-size: 3rem;
				.accent {
					font-size: 5rem;
				}
			}
		}
	}

	.hero-subtitle {
		font-size: 2.5rem;
		animation: fadeIn 3s forwards;
		animation-delay: 3s;
		letter-spacing: 1.2px;
		padding: 1em;
		padding-left: 2.5em;
		margin-top: 0;
		color: $white;
		filter: brightness(230%);
	}
}
	 */

	return (
		<div className="h-screen max-h-screen max-w-screen text-center mt-8 relative filter brightness-125">
			<video
				src="/background-compressed.mp4"
				className="full-screen-width object-cover -z-10"
				autoPlay
				loop
				muted
			/>
			<div className="full-screen-width bg-black/60 bg-blend-multiply flex flex-col justify-center items-center">
				<h1 className="mb-0 mt-8 text-2xl font-light word-wrap text-white text-center">
					<span className={letterClass}>Hi, &nbsp; </span>
					<span className={`${letterClass} _14`}> I'm &nbsp;</span>
					<span className="block font-bold tracking-wider text-3xl z-10">
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
					</span>
				</h1>
				<p className="text-xl text-white filter brightness-230%">
					Fullstack developer{" "}
				</p>
			</div>
		</div>
	);
}

export default Hero;
