import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { TextAlignJustify } from "lucide-react";
import { useTranslations } from "next-intl";
import AppNavLink from "./AppNavLink";

function MobileNav() {
	const t = useTranslations("nav");
	return (
		<Sheet className="">
			<SheetTrigger className="lg:hidden text-white">
				<TextAlignJustify size={32} />
			</SheetTrigger>
			<SheetContent
				title="Navigation"
				className="border-none mx-auto bg-black/90 text-white p-4 pt-16"
			>
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

				<SheetClose asChild>
					<AppNavLink hash="contact" text="contact" />
				</SheetClose>
			</SheetContent>
		</Sheet>
	);
}

export default MobileNav;
