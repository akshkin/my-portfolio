import Navigation from "@/components/navigation/Navigation";
import "../globals.css";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

const montserrat = Montserrat({
	subsets: ["latin"],
});

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
			<body className={`w-full ${montserrat.className}`}>
				<NextIntlClientProvider>
					<Navigation />
					<main className="p-8 max-sm:p-4  mx-auto">{children}</main>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
