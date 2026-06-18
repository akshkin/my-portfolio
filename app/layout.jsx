import Navigation from "@/components/navigation/Navigation";
import "./globals.css";

export const metadata = {
	title: "Akshaya Kini - Portfolio",
	description:
		"Fullstack developer specializing in React and ASP.NET Core. Welcome to my portfolio showcasing my projects and skills in web development.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="w-screen max-w-screen">
				<Navigation />
				{children}
			</body>
		</html>
	);
}
