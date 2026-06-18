import Link from "next/link";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { TextAlignJustify } from "lucide-react";

function MobileNav() {
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
						<Link href="/#about">
							<span className="text-xl uppercase">About</span>
						</Link>
					</SheetClose>
					<SheetClose asChild>
						<Link href={"/#skills"}>
							<span className="text-xl uppercase">Skills</span>
						</Link>
					</SheetClose>
					<SheetClose asChild>
						<Link href={"/#projects"}>
							<span className="text-xl uppercase">Projects</span>
						</Link>
					</SheetClose>
					<SheetClose asChild>
						<Link href={"/blog"}>
							<span className="text-xl uppercase">Tech Notes</span>
						</Link>
					</SheetClose>
					<SheetClose asChild>
						<Link href={"/#contact"}>
							<span className="text-xl uppercase">Contact</span>
						</Link>
					</SheetClose>
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default MobileNav;
