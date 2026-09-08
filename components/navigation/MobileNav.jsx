import Link from "next/link";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { TextAlignJustify } from "lucide-react";
import { useTranslations } from "next-intl";
import AppNavLink from "./AppNavLink";
import LanguageToggle from "../LanguageToggle";

function MobileNav() {
	const t = useTranslations("nav");
	return (
		<Sheet className="">
			<SheetTrigger className="md:hidden text-white">
				<TextAlignJustify size={32} />
			</SheetTrigger>
			<SheetContent
				title="Navigation"
				className="border-none mx-auto bg-black/90 text-white p-4"
			>
				{/* <SheetClose asChild>
					<Link href="/" className="link">
						<span>AK</span>
					</Link>
				</SheetClose> */}
				<div className="flex flex-col gap-6 mt-16">
					<SheetClose asChild>
						<LanguageToggle />
					</SheetClose>
					<SheetClose asChild>
						<AppNavLink hash="about" text="about" />
					</SheetClose>
					<SheetClose asChild>
						<AppNavLink hash="testimonials" text="testimonials" />
					</SheetClose>
					<SheetClose asChild>
						<AppNavLink hash="skills" text="skills" />
					</SheetClose>
					<SheetClose asChild>
						<AppNavLink hash="projects" text="projects" />
					</SheetClose>
					{/* <SheetClose asChild>
						<Link href={"/#contact"}>
							<span className="text-xl uppercase">{t("contact")}</span>
						</Link>
					</SheetClose> */}
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default MobileNav;
