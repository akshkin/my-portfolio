import Navigation from "../components/navigation/navigation";

export const metadata = {
	title: "Akshaya Kini - Portfolio",
	description:
		"Fullstack developer specializing in React and ASP.NET Core. Welcome to my portfolio showcasing my projects and skills in web development.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Navigation />
			<body>{children}</body>
		</html>
	);
}
