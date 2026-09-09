import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";
import LanguageToggle from "../LanguageToggle";
import { useLocale } from "next-intl";
import AppNavLink from "./AppNavLink";

function Navigation() {
	const locale = useLocale();
	return (
		<header className="p-2 pr-4 max-w-screen overflow-hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
			<div className="flex justify-between gap-3 items-center">
				<Link href={`/${locale}`} className="link max-sm:pb-3">
					<Image
						src="/assets/images/logo.png"
						alt="logo"
						width={70}
						height={40}
					/>
				</Link>

				<div className="flex w-full items-center justify-end gap-4 px-4 pb-4 sm:py-3 max-lg:hidden">
					<AppNavLink hash="about" text="about" />
					<AppNavLink hash="testimonials" text="testimonials" />
					<AppNavLink hash="skills" text="skills" />
					<AppNavLink hash="projects" text="projects" />
					{/* <Link
						href="/blog"
						className={`link text-2xl [&.active]:text-indigo-200 ${activeLink("/blog") ? "active" : ""}`}
						>
						{t("notes")}
						</Link> */}
					<AppNavLink hash="contact" text="contact" />
				</div>
				<div className="flex gap-4 items-center">
					<LanguageToggle />
					<MobileNav />
				</div>
			</div>
		</header>
	);
}

export default Navigation;
