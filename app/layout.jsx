import Navigation from "@/components/navigation/Navigation";
import "./globals.css";

export const metadata = {
	title: {
		template: "%s | Akshaya Kini",
		default: "Akshaya Kini - Portfolio",
	},
	description:
		"Fullstack Software developer specializing in React and ASP.NET Core. Welcome to my portfolio showcasing my projects and skills in web development.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="w-full">
				<Navigation />
				<main className="w-full px-6">{children}</main>
			</body>
		</html>
	);
}
